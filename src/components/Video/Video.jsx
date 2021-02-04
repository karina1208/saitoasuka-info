
import { useTranslation } from 'react-i18next'
import { useParams } from "react-router"
import React, { Component, Suspense, useState, useContext } from 'react'
import { Row, Col, Button, Collapse, AccordionContext, Container } from 'react-bootstrap'

import './custom.css'
import Navigationbar from "./../Navigationbar"

import Videos from './Videos'
import Videofearture from './Videofearture'
import VideoDetail from './VideoDetail'
import TypeTitle from './TypeTitle'

const Video = () => {

    const { t, i18n } = useTranslation()

    const sortedNewVideo = t('videoList').slice().sort((a, b) => b.date - a.date)
    const first4video = sortedNewVideo.slice(0, 3)

    const yodaVideo = sortedNewVideo.filter((video) => video.theme === "名探偵よだちゃん")
    const first4YodaVideo = yodaVideo.slice(0, 3)

    const nogiMonthVideo = sortedNewVideo.filter((video) => video.theme === "乃木坂毎月劇場")
    const first4NogiMonthVideo = nogiMonthVideo.slice(0, 3)

    const asukaWalkVideo = sortedNewVideo.filter((video) => video.theme === "あすさんぽ")
    const first4AsukaWalkVideo = asukaWalkVideo.slice(0, 3)

    const musicVideo = sortedNewVideo.filter((video) => video.type === "MV")
    const first4MusicVideo = musicVideo.slice(0, 3)

    const pVideo = sortedNewVideo.filter((video) => video.type === "PV")
    const first4pVideo = pVideo.slice(0, 3)

    const CMVideo = sortedNewVideo.filter((video) => video.type === "CM" || video.type === "CM MAKING")
    const first4CMVideo = CMVideo.slice(0, 3)

    const makingVideo = sortedNewVideo.filter((video) => video.type === "MAKING")
    const first4makingVideo = makingVideo.slice(0, 3)

    const hokaVideo = sortedNewVideo.filter(
        (video) =>
            video.type === "CM SPECIAL MOVIE"
            && !yodaVideo.includes(video)
            && !nogiMonthVideo.includes(video)
            && !asukaWalkVideo.includes(video))


    const first4HokaVideo = hokaVideo.slice(0, 3)

    

    let { id, no } = useParams()


    let validParam = false
    let array
    let typeTitle = ""


    if (id == 'all') {
        array = sortedNewVideo
        validParam = true
        typeTitle = "全部" + t('videolabel')
    }
    else if (id == 'yoda') {
        array = yodaVideo
        validParam = true
        typeTitle = "名探偵よだちゃん"
    } else if (id == 'nogimonthly') {
        array = nogiMonthVideo
        validParam = true
        typeTitle = "乃木坂毎月劇場"
    } else if (id == 'asukawalk') {
        array = asukaWalkVideo
        validParam = true
        typeTitle = "あすさんぽ"
    } else if (id == 'othercmspecial') {
        array = hokaVideo
        validParam = true
        typeTitle = t('other') + t('cmspeciallabel')
    } else if (id == 'mv') {
        array = musicVideo
        validParam = true
        typeTitle = "MV"
    } else if (id == 'pv') {
        array = pVideo
        validParam = true
        typeTitle = "PV"
    } else if (id == 'cm') {
        array = CMVideo
        validParam = true
        typeTitle = "CM"
    } else if (id == 'making') {
        array = makingVideo
        validParam = true
        typeTitle = "CM"
    } else if (id == 'content') {
        validParam = true
        array = t('videoList')
    }


    if (validParam && id == 'content') {
        return (
            <>
                <Navigationbar />
                <VideoDetail link={no} array={array} word={t('recommend')} />
            </>
        )
    } else
        if (validParam) {
            return (
                <>
                    <Navigationbar />
                    <div className="bg-image222">

                        <Videofearture video={array[0]} current={typeTitle} />
                        <Container className="videoContainer">
                            <br />
                            <br />
                            <Videos array={array} fade={"fade-up"} />
                        </Container>
                    </div>
                </>
            )
        } else if (!validParam || !id) {

            return (
                <>
                    <Navigationbar />
                    <div className="bg-image222">
                        <Container className="videoContainer" style={{marginTop: '0px'}}>
                            <br />
                            <div data-aos="fade-right">
                                <TypeTitle data-aos="fade-right" page="new" needButton={true} title={"最新" + t('videolabel')} />
                                <Videos array={first4video} fade={"fade-right"} />
                            </div>
                            <div data-aos="fade-left">
                                <TypeTitle data-aos="fade-left" page="mv" needButton={true} title="MV" />
                                <Videos array={first4MusicVideo} fade={"fade-left"} />
                            </div>
                            <div data-aos="fade-right">
                                <TypeTitle data-aos="fade-right" page="pv" needButton={true} title="PV" />
                                <Videos array={first4pVideo} fade={"fade-right"} />
                            </div>
                            <div data-aos="fade-left">
                                <TypeTitle data-aos="fade-left" page="nogimonthly" needButton={true} title="乃木坂毎月劇場" />
                                <Videos array={first4NogiMonthVideo} fade={"fade-left"} />
                            </div>
                            <div data-aos="fade-right">
                                <TypeTitle data-aos="fade-right" page="yoda" needButton={true} title="名探偵よだちゃん" />
                                <Videos array={first4YodaVideo} fade={"fade-right"} />
                            </div>
                            <div data-aos="fade-left">
                                <TypeTitle data-aos="fade-left" page="asukawalk" needButton={true} title="あすさんぽ" />
                                <Videos array={first4AsukaWalkVideo} fade={"fade-left"} />
                            </div>
                            <div data-aos="fade-right">
                                <TypeTitle data-aos="fade-right" page="othercmspecial" needButton={true} title={t('other') + t('cmspeciallabel')} />
                                <Videos array={first4HokaVideo} fade={"fade-right"} />
                            </div>
                            <div data-aos="fade-left">
                                <TypeTitle data-aos="fade-left" page="cm" needButton={true} title="CM & CM MAKING" />
                                <Videos array={first4CMVideo} fade={"fade-left"} />
                            </div>
                            <div data-aos="fade-right">
                                <TypeTitle data-aos="fade-right" page="making" needButton={true} title="MV MAKING" />
                                <Videos array={first4makingVideo} fade={"fade-right"} />
                            </div>

                        </Container>
                    </div>
                </>
            )
        }

}







export { Video }
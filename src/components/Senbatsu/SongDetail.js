import React from 'react'
import { useTranslation } from 'react-i18next'

const SongDetail = ({ value }) => {
    const { t, i18n } = useTranslation()



    const PositionBall = ({ formations, positionNo }) => {
        // console.log(formations)
        return (
            <>
                {formations.map((formation, index) => {
                    return (
                        <><div class="formation">
                            {formation.map((form, index) => {
                                return (

                                    <Ball num={form} positionNo={positionNo} />


                                )
                            })}
                            <br />
                        </div>
                        </>
                    )
                })}
            </>
        )
    }

    const Ball = ({ num, positionNo }) => {
        if (num == positionNo) {
            return (
                <div class="ball u-text u-text-white" style={{ backgroundColor: "#baadd6", fontWeight: "bold" }}>
                    {num}
                </div>
            )
        } else {
            return (
                <div class="ball u-text u-text-white">
                    {num}
                </div>
            )
        }

    }

    const IsAlbum = () => {
        if (value.position == "" || !value.hasOwnProperty('cwsong')) {
            return (<></>)
        } else {
            return (<p class="u-text u-text-grey-40 u-text-3">C/W:</p>)
        }

    }

    const MVbutton = ({ song }) => {
        let videoLink = ""
        const videoList = t('videoList').filter((video) => video.type === "MV")

        for (let i = 0; i < videoList.length; i++) {
            if (videoList[i].title.includes(song.title)) {
                videoLink = videoList[i].link
                break
            }
        }

        if (videoLink != '') {
            return (
                // <></>
                <a href={"#/video/content/" + videoLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle-fill " viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    </svg></a>
            )
        } else {
            return <></>
        }


    }


    if (value.sen) {
        if (!value.hasOwnProperty('cwsong')) {
            return (
                <>
                    <h5 class="u-text u-text-2-2 u-text-custom-color-4">{value.title} <MVbutton song={value} /></h5>

                    <p class="u-text u-text-custom-color-4 u-text-4">{value.position}</p>
                    <PositionBall formations={value.formation} positionNo={value.positionNo} />
                    <IsAlbum />
                </>
            )
        } else {
            return (
                <>
                    <h5 class="u-text u-text-2-2 u-text-custom-color-4">{value.title} <MVbutton song={value} /></h5>

                    <p class="u-text u-text-custom-color-4 u-text-4">{value.position}</p>
                    <PositionBall formations={value.formation} positionNo={value.positionNo} />
                    <IsAlbum />
                    {value.cwsong.map((song, index) => {
                        return (
                            <div class="u-text u-text-grey-60 u-text-4">
                                {song.title}<span class="u-text-grey-30">  {song.type}  <MVbutton song={song} /></span>
                            </div>
                        )
                    })}
                </>
            )
        }
    } else {
        if (!value.hasOwnProperty('cwsong')) {
            return (
                <>
                    <h5 class="u-text u-text-2-2 u-text-custom-color-4">{value.title} <MVbutton song={value} /></h5>
                    <p class="u-text u-text-custom-color-4 u-text-4">{value.position}</p>
                    <IsAlbum />
                </>
            )
        } else {
            return (
                <>
                    <h5 class="u-text u-text-2-2 u-text-custom-color-4">{value.title} <MVbutton song={value} /></h5>
                    <p class="u-text u-text-custom-color-4 u-text-4">{value.position}</p>
                    <IsAlbum />
                    {value.cwsong.map((song, index) => {
                        return (
                            <div class="u-text u-text-grey-60 u-text-4">
                                {song.title}<span class="u-text-grey-30">  {song.type}  <MVbutton song={song} /></span>
                            </div>
                        )
                    })}
                </>
            )
        }
    }

}

export default SongDetail
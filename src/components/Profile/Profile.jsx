
import React, { Component, Suspense } from 'react'
import Section1 from "./Section1"
import ProfilePics from "./ProfilePics"
import Schedule from "./Schedule"
import Performances from "./Performances"
import Navigationbar from "./../Navigationbar"

import './profile.css'
import './../../new.css'
// import './../../nicepage.css'

import './custom.css'



const Profile = () => {


    return (
        <>
        <Navigationbar />
        <div class="bg-image">

            <Section1 />
            <Schedule />
            <Performances />
            <ProfilePics />


        </div >
        </>
    )

}
export { Profile }
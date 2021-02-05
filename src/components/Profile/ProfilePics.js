import { useTranslation } from 'react-i18next'
import React from 'react'
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// const profileTitle = ;


const ProfilePics = () => {

    const { t, i18n } = useTranslation()

    return (
        <section data-aos="fade-up" class="u-align-center u-clearfix u-section-3" id="sec-bc58">
            <div class="u-clearfix u-sheet u-sheet-2" style={{width:"70%"}}>
            <br/><h4>{t('gallary')}</h4>
                <div className="u-align-center profilePics" >
                    {t('profilePic').map((value, index) => {
                        return (
                        <div className="hahhah boxes">
                            <div data-aos="fade-up" className="column blogPreview img-hover-zoom box" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + '/img/profile/officialPic' + index + '.jpg' + ")" }}>
                                <div class="overlay">
                                    <div class="text">
                                        <p class="title">{value}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ) 
                    })} 
                </div>

            </div>
        </section>
    )
}

export default ProfilePics
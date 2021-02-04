import { useTranslation } from 'react-i18next'


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const picNum = getRandomInt(3) + 1



const Section1 = () => {

    const { t, i18n } = useTranslation()
    return (
        <section data-aos="zoom-in" class="u-align-left u-clearfix u-section-2" id="carousel_a445">

            <div class="u-clearfix u-sheet u-sheet-1">
                <div class="u-clearfix u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-layout-wrap u-layout-wrap-1">
                    <div class="u-layout">
                        <div class="u-layout-row">
                            <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1 ">
                                <div className="u-container-layout u-valign-top-xl u-container-layout-1 ">
                                    <ruby><h2>齋藤飛鳥</h2><rp>(</rp><rt>{t('memberInfo').katakana}</rt><rp>)</rp></ruby>

                                </div>
                            </div>
                            <div className="u-container-style u-layout-cell u-palette-4-base u-right-cell u-size-30 u-layout-cell-2 my-custome-container-2">
                                <div className="u-container-layout u-container-layout-2">
                                    <table className="u-text u-text-3">
                                        <tr><td className="u-align-right customTd">{t('memberInfo').birthLabel}</td><td style={{fontWeight:'normal'}}>{t('memberInfo').birth}</td></tr>
                                        <tr><td className="u-align-right customTd">{t('memberInfo').bloodLabel}</td><td style={{fontWeight:'normal'}}>{t('memberInfo').blood}</td></tr>
                                        <tr><td className="u-align-right customTd">{t('memberInfo').zodiacLabel}</td><td style={{fontWeight:'normal'}}>{t('memberInfo').zodiac}</td></tr>
                                        <tr><td className="u-align-right customTd">{t('memberInfo').heightLabel}</td><td style={{fontWeight:'normal'}}>{t('memberInfo').height}</td></tr>
                                        <tr><td className="u-align-right customTd">{t('memberInfo').genLabel}</td><td style={{fontWeight:'normal'}}>{t('memberInfo').gen}</td></tr>
                                    </table>
                                    <span className="u-icon u-icon-circle u-text-white u-icon-1">

                                    </span>
                                    <img src={process.env.PUBLIC_URL + '/img/profile/profile0' + picNum + '.jpg'} alt="" class="u-expanded-width-xs u-image u-image-default u-image-1 profileSection1pic" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1
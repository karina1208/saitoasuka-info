import React from 'react'
import { useTranslation } from 'react-i18next'
import SongDetail from './SongDetail'


const Song = ({ value }) => {


    const { t, i18n } = useTranslation()

    return (
        <section class="u-clearfix u-section-senbatsu" id="carousel_04a5">
            <div class="u-clearfix u-sheet u-sheet-1">
                <div class="u-custom-color-3 u-opacity u-opacity-70 u-shape u-shape-circle u-shape-1"></div>
                <div class="u-clearfix u-expanded-width-lg u-expanded-width-md u-expanded-width-xl u-expanded-width-xs u-gutter-40 u-layout-wrap u-layout-wrap-1">
                    <div data-aos="fade-down" class="u-layout">
                        <div class="u-layout-row">
                            <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                                <div class="u-container-layout u-valign-top u-container-layout-1">
                                    <img src={process.env.PUBLIC_URL + '/img/senbatsu/discCover/' + value.image} alt="" class="u-expanded-width u-image u-image-default u-preserve-proportions u-image-1" />
                                </div>
                            </div>
                            <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                                <div class="u-container-layout u-container-layout-2">

                                    <SongDetail value={value} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Song
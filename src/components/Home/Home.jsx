import React from "react"
import { useTranslation } from 'react-i18next'
import LanguageSelector from './../LanguageSelector'
// import './nicepage_home.css'
import './home.css'
import './custom.scss'

import { Navbar, Nav, AccordionContext, Container } from 'react-bootstrap'
import Videos from './../Video/Videos'
import TypeTitle from './../Video/TypeTitle'


const Home = () => {
  const { t, i18n } = useTranslation()



  const sortedNewVideo = t('videoList').slice().sort((a, b) => b.date - a.date)
  const first4video = sortedNewVideo.slice(0, 6)

  return (
    <div className="bg-image222">

      <section data-aos="fade-in" data-aos-duration="900" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + '/img/home/07.jpg' + ")" }} class="u-clearfix u-image u-valign-bottom-md u-section-8" id="carousel_79ad">
        <Navbar bg="custom-bg-nav-home" expand="md" className="custom-bg-nav-home">
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-end">
              <LanguageSelector />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div data-aos="fade-up-right" data-aos-duration="500" class="u-grey-5 u-shape u-shape-circle u-shape-1"></div>
        <div class="u-clearfix u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div data-aos="fade-in" data-aos-duration="1000" class="u-layout-row">
              <div class="u-align-left u-container-style u-layout-cell u-left-cell u-size-60 u-layout-cell-1">
                <div class="u-container-layout u-container-layout-1">
                  <div data-aos="fade-up-right" data-aos-duration="1000" class="u-border-6 u-border-custom-color-4 u-line u-line-horizontal u-line-1">
                  </div>

                    <div data-aos="fade-up-right" data-aos-duration="1000" class="u-custom-font u-font-raleway u-text u-title u-text-1 heading--stroke heading--shadow">Saito<br />Asuka<br />Info</div>

                  <p class="u-text u-text-2">

                    <a className="videoWholeButton homeButton" href="#profile">
                      <h5 className="u-text videTitle">
                        {t('profile')}
                      </h5>
                    </a>
                    <a className="videoWholeButton homeButton" href="#senbatsu">
                      <h5 className="u-text videTitle">
                        {t('senbatsu')}
                      </h5>
                    </a>
                    <a className="videoWholeButton homeButton" href="#video">
                      <h5 className="u-text videTitle">
                        {t('videolabel')}
                      </h5>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <Container className="videoContainer" style={{ marginTop: '0px' }}>
          <br />
          <div data-aos="fade-up">
            <TypeTitle data-aos="fade-up" page="new" needButton={true} title={"最新" + t('videolabel')} />
            <Videos array={first4video} fade={"fade-up"} />
          </div>
          <br />
        </Container>
      </div>
    </div>
  )

}
export { Home }
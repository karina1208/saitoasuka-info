
import YouTube from 'react-youtube';
import React, { useState, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Video } from './Video'
import { Container } from 'react-bootstrap'
import Videoo from './Videoo'

// import './nicepageVideo.css'
import './Page-1Video.css'
import VideoBreadcrumb from './VideoBreadcrumb'

class VideoDetail extends React.Component {

  render() {


    let videos = this.props.array
    let i;

    for (i = 0; i < videos.length; i++) {
      if (videos[i].link == this.props.link) {
        break;
      }
    }
    const previews = videos.filter((video) => video.type === videos[i].type)

    const random1 = Math.floor(Math.random() * Math.floor(previews.length))
    const random2 = Math.floor(Math.random() * Math.floor(previews.length))
    const random3 = Math.floor(Math.random() * Math.floor(previews.length))

    console.log(random1, random2, random3)

    const opts = {
      height: '400px',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <div>
        <section class="u-clearfix u-custom-color-8 videoFeatureContainer u-section-1" id="carousel_67c4">

          <div  data-aos="zoom-in"class="u-clearfix u-sheet u-sheet-1">
            <div class="u-align-left u-container-style u-group u-white videoFeatureTextContainer u-group-1-video">
              <div class="u-valign-top-sm u-valign-top-xl u-container-layout-1-videofeature">

              </div>
            </div>
            <div class="u-gradient u-shape u-shape-circle videoFeatureRightCircle u-shape-1-video"></div>
            <div class="u-expanded-width-xs u-image videoFeaturePhoto u-image-1-videooo">
              <YouTube videoId={this.props.link} opts={opts} onReady={this._onReady} />
            </div>
            <div class="u-shape u-shape-svg u-text-custom-color-3-videooo videoFeatureLeftCircle u-shape-2-video">
              <svg class="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 160">
                <use xmlnsXLink="http://www.w3.org/1999/xlink" xlinkHref="#svg-d89e"></use>
              </svg>

            </div>
            <div class="u-text videoFeatureText u-text-2 u-text-white"><VideoBreadcrumb current={videos[i].title} /></div>
          </div>

        </section>
        <div className="u-custom-color-8">
          <Container className="videoContainer" style={{marginTop: '0px'}}>
            <br/>
            <h4  className="u-text-grey-50">{this.props.word}</h4>
            <div className="videoGrid ">
              {previews.map((value, index) => {
                if ((index == random1 || index == random2 || index == random3)
                  && previews[index].link !== videos[i].link) {
                  return (

                    <Videoo video={value} fade={"fade-up"}/>

                  )
                }
              })}
            </div>
          </Container>
        </div>
      </div>

      //  <YouTube videoId={this.props.link} opts={opts} onReady={this._onReady} />




    )
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default VideoDetail


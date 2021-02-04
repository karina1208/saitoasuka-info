
import { useTranslation } from 'react-i18next'
import VideoDetail from './VideoDetail'



const Videoo = ({ video, fade }) => {
    const { t, i18n } = useTranslation()

    let img = ''

    if (video.hasOwnProperty('image'))
        img = process.env.PUBLIC_URL + '/img/video/thumbnail/' + video.image
    else
        img = 'http://i3.ytimg.com/vi/' + video.link + '/maxresdefault.jpg'

    return (
        <a className="videoWholeButton" href={'#video/content/' + video.link}>
            <div data-aos={fade}>
                <img src={img} alt="" className="videoThumbnail" />

                <div className="u-text u-text-grey-50 videTitle">{video.title}</div>
                
                {/* <VideoDetail link={video.link}/> */}
            </div>
        </a>
    )
}

export default Videoo
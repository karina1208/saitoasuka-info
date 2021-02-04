import { useTranslation } from 'react-i18next'
import { Carousel } from 'react-bootstrap'

const Performances = () => {

    const { t, i18n } = useTranslation()

    return (
        <Carousel>
            {t('performance').title.map((value, index) => {
                return (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/img/profile/perform' + index + '.jpg'}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{value}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}

        </Carousel>

    )
}

export default Performances
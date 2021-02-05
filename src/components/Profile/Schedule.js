import { useTranslation } from 'react-i18next'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const Schedule = () => {

    const { t, i18n } = useTranslation()

    return (
        <section data-aos="fade-up" class="u-align-center u-palette-4-base u-size-50 u-layout-cell-2 my-customer-container-1" id="sec-bc58">
            <div class="u-clearfix u-sheet u-sheet-2 " style={{ width: "70%" }}>
                
                <Container  className="u-align-left">
                <h4>{t('schedule')}</h4>
                    <Row>
                        <Col sm={2}><p>{t('scheduleInfo').groupLabel}</p></Col>
                        <Col sm={8}><p>{t('scheduleInfo').nogichu}</p></Col>
                    </Row>
                    <Row>
                        <Col sm={2}><p>{t('scheduleInfo').selfLabel}</p></Col>
                        <Col sm={8}><p>{t('scheduleInfo').jwave}<br/>{t('scheduleInfo').sweet}</p></Col>
                    </Row>

                </Container>
            </div>
        </section>
    )
}

export default Schedule
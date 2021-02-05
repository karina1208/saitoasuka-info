import { useTranslation } from 'react-i18next'
import React, { useState, useContext } from 'react'
import { Accordion, Card, Row, Col, Button, Collapse, AccordionContext } from 'react-bootstrap'
import Song from './Song'


import './Page-1test.css'
import './custom.css'

import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';



function ContextAwareToggle({ genre, title, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <span className="genreContainer" style={{ color: isCurrentEventKey ?'#796eb4':'#444444'}}>
            <span className="genre">{genre}</span> <span className="title">{title} </span>
        </span>
    );
}

const Songs = () => {

    const { t, i18n } = useTranslation()
    const [open, setOpen] = useState(false)
    const arr = t('songs').slice().reverse()


    return (

        <Accordion defaultActiveKey="0" className="custiomacc">

            {arr.map((value, index) => {
                // console.log(value.cwsong)
                return (
                    <Card data-aos="fade-up">
                        <Accordion.Toggle id={index + 1} as={Card.Header} eventKey={index + 1}>
                            <ContextAwareToggle eventKey={index + 1} genre={value.genre} title={value.title}>

                            </ContextAwareToggle>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={index + 1}>
                            <Card.Body>


                                <Song value={value} />


                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )
            })}
        </Accordion>
    )
}

export default Songs
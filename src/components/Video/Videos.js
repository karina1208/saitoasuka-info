
import React, { useState, useContext } from 'react'
import { Row, Col, Button, Collapse, AccordionContext, Container } from 'react-bootstrap'
import Videoo from './Videoo'


const Videos = ({array, fade}) => {
    return (
        <div className="videoGrid ">
            {array.map((value, index) => {
                return (

                    <Videoo video={value} fade={fade}/>

                )
            })}
        </div>
    )
}

export default Videos
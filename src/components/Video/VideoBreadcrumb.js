import { useTranslation } from 'react-i18next'

import React, { Component, Suspense, useState, useContext } from 'react'
import { Breadcrumb } from 'react-bootstrap'


const VideoBreadcrumb = ({ current }) => {
    const { t, i18n } = useTranslation()

    
        return (
            <Breadcrumb className="videoBreadcrumb">
                <Breadcrumb.Item href="#video">{t('videolabel')}</Breadcrumb.Item>
                <Breadcrumb.Item active className="u-text-grey-40">{current}</Breadcrumb.Item>
            </Breadcrumb>
        )
    
}


export default VideoBreadcrumb
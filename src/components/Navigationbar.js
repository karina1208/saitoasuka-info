import React from "react"
import { useTranslation } from 'react-i18next'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import LanguageSelector from './LanguageSelector'
import './customNav.css'
import './../nicepage.css'

const Navigationbar = () => {
  const { t, i18n } = useTranslation()

  return (
    <Navbar bg="light" expand="md" sticky="top" className="custom-bg-nav">
      <Navbar.Brand href="#/" className="u-text-grey-50"><span className="u-text-custom-color-4">◢</span> SAITO ASUKA INFO</Navbar.Brand>
      <Navbar.Toggle className="shadow-none"/>
      <Navbar.Collapse className="justify-content-end">
        <Nav className="justify-content-end">
          <Nav.Link href="#profile">{t('profile')}</Nav.Link>
          <Nav.Link href="#senbatsu">{t('senbatsu')}</Nav.Link>
          <Nav.Link href="#video">{t('videolabel')}</Nav.Link>
          <LanguageSelector />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )

}

export default Navigationbar
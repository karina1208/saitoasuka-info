import React from 'react'
import { useTranslation } from 'react-i18next'
import Form from 'react-bootstrap/Form'

const LanguageSelector = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }



  return (
    <div onChange={changeLanguage}>
      <Form inline>
        <Form.Group controlId="exampleForm.SelectCustom" className="shadow-none">
          <Form.Control as="select" custom className="dropdownStyle shadow-none">
            <option value="jp" name="language" >日本語</option>
            <option value="zh" name="language" >繁體中文</option>
          </Form.Control>
        </Form.Group>
      </Form>
      
    </div>
  )
}

export default LanguageSelector
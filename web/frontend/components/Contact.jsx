import React from 'react'
import {
  Page,
  Card
} from "@shopify/polaris";
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <Page>
        <div className="contactHeader">
          <p>Conatct Us</p>
        </div>
        <Card sectioned>
          <p>Email: <a href="mailto: munibahmad47@gmail.com">munibahmad47@gmail.com</a></p>
        </Card>
      </Page>
    </div>
  )
}

export default Contact

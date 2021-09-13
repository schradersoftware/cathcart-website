import React from 'react';
import {Link} from '@material-ui/core';

import { Icon, InlineIcon } from '@iconify/react';

import locationIcon from '@iconify/icons-mdi/map-marker-radius-outline'
import phoneIcon from '@iconify/icons-mdi/phone-outline'
import emailIcon from '@iconify/icons-mdi/email-multiple-outline'

import facebookIcon from '@iconify/icons-mdi/facebook'
import linkedinIcon from '@iconify/icons-mdi/linkedin'
import twitterIcon from '@iconify/icons-mdi/twitter'

import './info.css';

const contactDetails = [
  {
    value: 'Cleveland Apartment Brokers',
    icon: locationIcon,
  },
  { value: '+440 570 6636', icon: phoneIcon },
  { value: 'steven.cathcart@gmail.com', icon: emailIcon },
]

const renderContactDetails = () =>
  contactDetails.map(detail => (
    <p key={detail.value} className="info-detail">
      <InlineIcon icon={detail.icon} /> {detail.value}
    </p>
  ))

const renderIcons = () =>
  [facebookIcon, linkedinIcon, twitterIcon].map((icon, key) => (
    <Icon icon={icon} key={key} className="info-icon" />
  ))

const Info = () => (
  <>
  <div className="info">
    {/* <h2 className="info-h2">Contact information</h2>
    <div className="info-details-container">{renderContactDetails()}</div>
    <div className="info-icons-container">{renderIcons()}</div> */}
    <div className="headingContent">
       <h2>Our Offices</h2>
       <p>1600 Cleveland Ave<br/>
         Cleveland NY 90210</p>
       <p><Link href="mailto:stevecathcart@gmail.com">stevecathcart@gmail.com</Link><br/>
         Tel: <Link href="tell:111-222-3333">111-222-3333</Link><br/>
         Fax: <Link href="fax:111-222-3333">111-222-3333</Link><br/></p>       
    </div>
    <div className="headingContent bordered">
       <h2>Opportunities</h2>
       <p>For additional listing opportunities with West River Realty, please send an email to: <Link href="mailto:stevecathcart@gmail.com">stevecathcart@gmail.com</Link></p>       
    </div>
  </div>
  
</>
)
export default Info



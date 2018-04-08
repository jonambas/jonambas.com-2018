import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby-link'
import { Footer } from 'components';

import './global.scss'

const TemplateWrapper = ({ children }) => (
  <Fragment>
    <Helmet>
      <title>Jon Ambas</title>
      <meta name='description' content='Designer, Front End Engineer'/>
      <link rel="icon" type="image/png" href={withPrefix('favicon.png')}/>
    </Helmet>
    { children() }
    <Footer/>
  </Fragment>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

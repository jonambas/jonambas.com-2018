import React, { Fragment } from 'react'
import { Container, UnstyledLink } from 'components';

const IndexPage = () => (
  <Container compact>
    <h1>Jon Ambas</h1>
    <p>
      Currently a UX engineer at <UnstyledLink external to='https://www.sparkpost.com'>SparkPost</UnstyledLink>,
      working from Baltimore. Formerly <UnstyledLink external to='https://www.fifteen4.com'>Fifteen4</UnstyledLink>.
    </p>
  </Container>
)

export default IndexPage

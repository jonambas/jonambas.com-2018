import React, { Fragment } from 'react'
import { Container, UnstyledLink } from 'components';

const IndexPage = () => (
  <Container>
    <h1>Jon Ambas</h1>
    <p>
      Currently a front end engineer at <UnstyledLink external to='https://www.sparkpost.com'>SparkPost</UnstyledLink>,
      working from Baltimore. Formerly <UnstyledLink external to='https://www.fifteenfour.com'>Fifteen Four</UnstyledLink>.
    </p>
  </Container>
)

export default IndexPage

import React, { Fragment } from 'react'
import { Container, Grid, UnstyledLink, Resume } from 'components';
import hiremepls from 'data/resume-2018';

const ResumePage = () => (
  <Container>
    <Resume resume={hiremepls} />
  </Container>
)

export default ResumePage
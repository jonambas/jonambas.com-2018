import React, { Fragment as F } from 'react';
import { UnstyledLink } from 'components';
import styles from './Resume.module.scss';

const Header = ({ name, title, email }) => (
  <div className={styles.Header}>
    <div className={styles.HeaderLeft}>
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
    <div className={styles.HeaderRight}>
      <p><UnstyledLink external to={`mailto:${email}`}>{email}</UnstyledLink></p>
      {/* <p>{phone}</p> */}
    </div>
  </div>
);

const Skills = ({ skills = [] }) => (
  <F>
    <h2 className={styles.SectionTitle}>Skills</h2>
    <ul className={styles.Skills}>
      {skills.map((skill, i) => <li key={i}>{skill}</li>)}
    </ul>
  </F>
)

const Education = ({ degree, school }) => (
  <F>
    <h2 className={styles.SectionTitle}>Education</h2>
    <p>{degree}<br/>{school}</p>
  </F>
)

const Job = ({ position, company, experience, startDate, endDate }) => (
  <div className={styles.Job}>
    <h3 className={styles.JobTitle}>{position}, {company}</h3>
    <p className={styles.Date}>
      {startDate} – {endDate}
    </p>
    <ul className={styles.Experience}>
      {experience.map((content, i) => <li key={i}>{content}</li>)}
    </ul>
  </div>
)

const Resume = ({ resume }) => {
  return (
    <div className={styles.Wrapper}>
      <Header {...resume.meta} />
      <div className={styles.Left}>  
        <Skills skills={resume.skills} />
        <Education {...resume.education} />
      </div>
      <div className={styles.Main}>
        <h2 className={styles.SectionTitle}>Experience</h2>
        {resume.jobs.map((job, i) => <Job {...job} key={i} />)}
      </div>
    </div>
  )
}

export default Resume;
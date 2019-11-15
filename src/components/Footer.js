import React from 'react'
import PropTypes from 'prop-types'
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'
import { IoLogoJavascript } from 'react-icons/io'
import git from '../images/git.jpg'
import express from '../images/express.png'
import jest from '../images/jest.png'
import redux from '../images/redux.png'
import styled from 'styled-components'


const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <h1>Skills</h1>

    <FaNodeJs size={80} color={'#3C873A'} />
    <SkillsList></SkillsList>
    <FaReact size={80} color={'#61DBFB'} />
    <SkillsList></SkillsList>
    <FaHtml5 color={'#F16529'} size={80} />
    <SkillsList></SkillsList>
    <GoMarkGithub size={80} />
    <SkillsList></SkillsList>
    <FaCss3Alt color={'#2965f1'} size={80} />
    <SkillsList></SkillsList>
    <IoLogoJavascript color={'#f7df1e'} size={80} />
    <SkillsList></SkillsList>
    <Image
      src="https://www.postgresql.org/media/img/about/press/elephant.png"
      alt="postgresIcon"
    />
    <SkillsList></SkillsList>
    <Image src={git} />
    <SkillsList></SkillsList>
    <Image src={express} />
    <SkillsList></SkillsList>
    <Image src={jest} />
    <SkillsList></SkillsList>
    <Image src={redux} />
    <SkillsList></SkillsList>
    <Image src="https://www.sqltabs.com/img/logo.png" />
    <SkillsList></SkillsList>
    <Image src="https://miro.medium.com/max/512/1*fVBL9mtLJmHIH6YpU7WvHQ.png" />
    <SkillsList></SkillsList>
    {/* <p className="copyright">
      &copy; Gatsby Starter - Dimension. Design:{' '}
      <a href="https://html5up.net">HTML5 UP</a>. Built with:{' '}
      <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
    </p> */}
  </footer>
)

const SkillsList = styled.span`
  font-size: .7em;
  position:relative;
`

const Image = styled.img`
  width: 70px;
  margin-left:19px;
`

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer

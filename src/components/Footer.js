import React from 'react'
import PropTypes from 'prop-types'
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'
import { IoLogoJavascript } from 'react-icons/io'

import styled from 'styled-components'
const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <h1>Skills</h1>

    <FaNodeJs size={80} color={'#3C873A'} />
    <SkillsList>Node.js</SkillsList>
    <FaReact size={80} color={'#61DBFB'} />
    <SkillsList>React.js</SkillsList>
    <FaHtml5 color={'#F16529'} size={80} />
    <SkillsList>Html5</SkillsList>
    <GoMarkGithub size={80} />
    <SkillsList>Github</SkillsList>
    <FaCss3Alt color={'#2965f1'} size={80} />
    <SkillsList>Css3</SkillsList>
    <IoLogoJavascript color={'#f7df1e'} size={80} />
    <SkillsList>Javascript</SkillsList>
    <Image src="https://www.postgresql.org/media/img/about/press/elephant.png" alt=""/>
    <SkillsList>PostgreSql</SkillsList>
    <p className="copyright">
      &copy; Gatsby Starter - Dimension. Design:{' '}
      <a href="https://html5up.net">HTML5 UP</a>. Built with:{' '}
      <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
    </p>
  </footer>
)

const SkillsList = styled.span`
  font-size: 1em;
`

const Image = styled.img`
width:70px;
`

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer

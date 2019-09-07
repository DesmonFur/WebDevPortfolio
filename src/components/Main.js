import React from 'react'
import PropTypes from 'prop-types'
import { IoLogoLinkedin } from 'react-icons/io'
import ReactPlayer from 'react-player'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import demon from '../images/demon.mp4'
import styled from 'styled-components'
import statics from '../images/statics.jpg'
class Main extends React.Component {
  render() {
    console.log(this.state)
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <h2 className="major">Xpense</h2>
          <Project className="image main">
            {' '}
            <ReactPlayer url={demon} playing controls />{' '}
          </Project>
          <ProjectPic className="image main">
            <img src={statics} alt="Project-Login" />
          </ProjectPic>

          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="desmond's face" />
          </span>
          <p>
            I am a former gas station, cold room employee, who decided he wanted
            to be a web developer. I took one class in python in high school and
            decided that I would love to become a programmer in the future. I
            went through some struggles before furthering my programming
            knowledge. Stuck with years of laziness syndrome, I quickly realized
            how quickly my life was going by. Now I’m on the grind and enjoy
            reading other coding languages other than JavaScript and seeing the
            similarities between them all. During the week if I’m not working, I
            am watching movies or tutorials to further my programming knowledge.
            I’m passionate about learning and I want to do my best at everything
            that I attempt. The future is what you do tomorrow, not what you do
            today.
          </p>
          <a
                href="www.linkedin.com/in/DesmonFur"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
          
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          {/* <form method="post" action="#"> */}
          <form
            method="post"
            action="https://formspree.io/desfurtick@gmail.com"
            method="POST"
          >
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="www.linkedin.com/in/DesmonFur"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/DesmonFur" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

const Project = styled.span`
  @media (max-width: 1680px) {
    display: none;
    visibility: hidden;
    position: absolute;
  }
`

const ProjectPic = styled.span`
  @media (min-width: 1681px) {
    display: none;
    visibility: hidden;
    position: absolute;
  }
`

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

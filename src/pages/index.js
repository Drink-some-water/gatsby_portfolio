import * as React from 'react'
import Layout from '../components/homepage_layout'
import {imageCircle, invertIcon, personalLinks} from '../components/layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h2>Sean Collins' Portfolio</h2>
      <h3>Thanks for visiting!</h3>
      <nav className={personalLinks}>
        <p>resume</p>
        <a href="mailto:sean.collins.developer@gmail.com" target="_blank">
          <StaticImage 
            src="../images/email.svg"
            alt="Email"
            className={invertIcon}
          />
        </a>
        <a href="https://www.linkedin.com/in/sean-collins-4a6279252/" target="_blank">
          <StaticImage 
            src="../images/linkedin-brands-solid.svg"
            alt="LinkedIn"
            className={invertIcon}
          />
        </a>
        <a href="https://github.com/Drink-some-water" target="_blank">
        <StaticImage 
            src="../images/github-brands-solid.svg"
            alt="GitHub"
            className={invertIcon}
          />
        </a>
      </nav>
      <StaticImage
        alt="A picture of Sean Collins looking professional at home"
        src="../images/portrait.jpg"
        className={imageCircle}
      />
      <p>Placeholder content</p>
    </Layout>
  )
}
export const Head = () => <title>Sean's Porfolio</title>
export default IndexPage
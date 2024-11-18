import * as React from 'react'
import Layout from '../components/homepage_layout'
import {imageCircle} from '../components/layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h2>Sean Collins' Portfolio</h2>
      <h3>Thanks for visiting!</h3>
      <nav>
        <p>resume</p>
        <a href="https://www.linkedin.com/in/sean-collins-4a6279252/" target="_blank">LinkedIn</a>
        <a href="https://github.com/Drink-some-water" target="_blank">GitHub</a>
        <a href="mailto:sean.collins.developer@gmail.com" target="_blank">Contact Me</a>
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
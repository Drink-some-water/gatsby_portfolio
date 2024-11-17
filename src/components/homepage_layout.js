import * as React from 'react'
//import {Link} from 'gatsby'
import {container} from './layout.module.css'

const Layout = ({pageBody}) => {
    return (
        <div className={container}>
            <h1>Sean Collins</h1>
            <nav>
                <ul>
                    <li><a href="https://www.linkedin.com/in/sean-collins-4a6279252/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/Drink-some-water" target="_blank">GitHub</a></li>
                    <li><a href="mailto:sean.collins.developer@gmail.com" target="_blank">Contact Me</a></li>
                </ul>
            </nav>
            <main>
                {pageBody}
            </main>
        </div>
    )
}

export default Layout
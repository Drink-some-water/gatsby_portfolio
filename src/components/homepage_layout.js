import * as React from 'react'
import {Link} from 'gatsby'
import {container} from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({children}) => {
    return (
        <div className={container}>
            <nav>
                <Link to="../pages/index">Home</Link>
                <Link to="../pages/works">Porfolio</Link>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
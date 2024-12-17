import * as React from 'react'
import { Link } from 'gatsby'
import { container, navBar, link } from './layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={container}>
            <nav className={navBar}>
                <Link to="/" activeStyle={{ color: "aliceblue" }} className={link}>Home</Link>
                <Link to="/works" activeStyle={{ color: "aliceblue" }} className={link}>Porfolio</Link>
                <Link to="/collaborations" activeStyle={{ color: "aliceblue" }} className={link}>Collaborations</Link>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
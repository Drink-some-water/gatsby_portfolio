import * as React from 'react'
import {Link} from 'gatsby'
import {container, navBar} from './layout.module.css'

const Layout = ({children}) => {
    return (
        <div className={container}>
            <nav className={navBar}>
                <Link to="/" activeStyle={{color : "white"}}>Home</Link>
                <Link to="/works" activeStyle={{color : "white"}}>Porfolio</Link>
                <Link to="/collaborations" activeStyle={{color : "white"}}>Collaborations</Link>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
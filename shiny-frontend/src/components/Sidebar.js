import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {Link} from "react-router-dom"
import SidebarData from './SidebarData'
import './SideBar.css'
import {Nav} from 'react-bootstrap'

function Sidebar() {
    const [sidebar, setSidebar] = useState(false)

    const showSideBar = () => setSidebar(!sidebar)
    return (
        <>
           
            <Nav className='flex-column'>
                <Nav.Item style={{margin: "black"}}></Nav.Item>
               

            </Nav>
        </>
    )
}

export default Sidebar

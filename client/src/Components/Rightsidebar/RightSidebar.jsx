import React from 'react'
import "./Rightsidebar.css"
import Widget from "./Widget.jsx"
import WidgetTags from "./WidgetTags.jsx"
const Rightsidebar = () => {
  return (
    <div>
        <aside className='right-sidebar'>
        <Widget/>
        <WidgetTags/>
        </aside>
    </div>
  )
}

export default Rightsidebar
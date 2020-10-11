import React from 'react'
import ReactDOM from 'react-dom'
import Netflixcard from "./Netflixcard.jsx"
import './Netflix.css'
import Netflixdata from './Netflixdata.jsx'

ReactDOM.render(
    <>
     <h1 className="heading_style"> List of top  WEB series all the time<br/> 
     &copy;Goutham Reddy</h1>
     
     
      {Netflixdata.map((val)=> {
        return(
        <Netflixcard 
        key={val.id}
        imgsrc={val.imgsrc} 
        title={val.title}
        sname = {val.sname}
        link = {val.links}
       />
       )

      })}
      
     </>

,document.getElementById('root')

);
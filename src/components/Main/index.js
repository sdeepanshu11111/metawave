import React from 'react'
import Home from "../layout/Home/index"
import Easy from "../layout/Easy/index"
import Network from '../layout/Network'
import OpenSource from '../layout/openSource'
import Blog from "../layout/Blog"
import Header from "../Header/index"
import Footer from '../Footer/index'

const Main = () => {
  return (
    
    <div className='main'>
        <Header/>
        <Home/>
        <Easy/>
        <Network/>
    <OpenSource/>
    <Blog/>
    <Footer/>

    </div>
  )
}

export default Main
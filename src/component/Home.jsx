import React from 'react'
import HeroComponent from '../utils/HeroComponent'
import Eyes from '../utils/Eyes'
import AboutContent from '../utils/AboutContent'
import VisionContent from '../utils/VisionContent'
import Content from '../utils/Content'
import Contact from '../component/Contact'
const Home = () => {
  return (
    <div className=' overflow-hidden'>
        <HeroComponent/>
        <Content />
        <AboutContent />
        <VisionContent/>
        <Eyes/>
        <Contact/>
    </div>
  )
}

export default Home
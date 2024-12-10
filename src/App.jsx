import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./styles/common/reset.css"
import Accordian from './components/accordian/Accordian'
import { IMAGE_PATH } from "./constant/Image"

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Header/>
      <div className="container">
      <Banner/>
      <HeaderLeft/>
        <Accordian>data</Accordian>
    </div>
    </>
  )
}

export default App


function Header() {
  return (<>
    <header>
      <nav className='nav-header'>
        <h1>TECHYON</h1>
        <ul className='nav-header-icon'>
          <li><img src={`${IMAGE_PATH}/Elements.png`} alt="Icon" /></li>
          <li><img src={`${IMAGE_PATH}/setting-5.png`} alt="Icon" /></li>
          <li><img src={`${IMAGE_PATH}/Elements1.png`} alt="Icon" /></li>
          <li><img src={`${IMAGE_PATH}/notification icon.png`} alt="Icon" /></li>
          <li><img src={`${IMAGE_PATH}/unsplash_OhKElOkQ3RE.png`} alt="Icon" /></li>
          <li><img src={`${IMAGE_PATH}/arrow-down.png`} alt="Icon" /></li>
        </ul>
      </nav>
    </header>
  </>)
}

function HeaderLeft() {
  return (<>
    <header>
      <nav className='nav-header-left'>
        <img src={`${IMAGE_PATH}/Hamburgermenu.png`} alt="Icon" />
      </nav>
    </header>
  </>)
}

function Banner(){
  return(<>
    <div className="banner-wrapper">
      <div className="banner-left">
        <span className="banner-text">Projects</span>
        <button className="banner-btn"><span className='plus-sign'>+</span> Projects</button>
      </div>
      <div className="banner-right">
        <div className="banner-overview">Dashboard / Project Overview</div>
      </div>
    </div>
  </>)
}
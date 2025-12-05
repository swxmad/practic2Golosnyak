import './App.css'
import Header from './components/Header/Header'
import Block from './components/pages/HomePages/components/Block/Block'
import Banner from './components/pages/HomePages/components/Banner/Banner'
import Icons from './components/pages/HomePages/components/Icons/Icons'
import Steps from './components/pages/HomePages/components/Steps/Steps'
import Information from './components/pages/HomePages/components/Information/Information'
import Nav from './components/pages/HomePages/components/Nav/Nav'
import Riviews from './components/pages/HomePages/components/Riviews/Riviews'
import Footer from './components/Footer/Footer'
import Flowers from './components/pages/HomePages/components/Flowers/Flowers'

function App() {

  return (
    <>
     <Header/>
     <Block/>
     <Banner/>
     <Icons/>
     <Flowers/>
     <Steps/>
     <Riviews/>
     <Information/>
     <Nav/>
     <Footer/>
    </>
  )
}

export default App
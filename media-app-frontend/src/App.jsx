
import './App.css'
import Home from './assets/Pages/Home'
import LandingPage from './assets/Pages/LandingPage'
import PageNotFound from './assets/Pages/PageNotfound'
import WatchHistory from './assets/Pages/WatchHistory'
import { Route, Routes } from 'react-router-dom'
import Header from './assets/Components/Header'
import Footer from './assets/Components/Footer'

function App() {

  return (
    <>
   <Header/>
   <Routes>
   <Route path='/' element={<LandingPage/>}/>
   <Route path='/Home' element={<Home/>}/>
    <Route path='/*' element={<PageNotFound/>}/>
    <Route path='/watchhistory' element={<WatchHistory/>}></Route>
   </Routes>
<Footer/>
    </>
  )
}

export default App

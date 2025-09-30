import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  Billing,
  Business,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials
} from './components'
import { AboutAppPage, PartnersPage } from './pages'
import styles from './style'
import AppStoreBanner from './components/AppStoreBanner'

const HomePage = () => {
  return (
    <>
      <AppStoreBanner />
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Business />
          <Billing />
          <Stats />
          <Footer />
        </div>
      </div>
    </>
  )
}

const App = () => {
  return (
    <Router>
      <div className='bg-primary w-full overflow-hidden'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-app" element={<AboutAppPage />} />
          <Route path="/partners" element={<PartnersPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
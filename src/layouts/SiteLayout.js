import React from 'react'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'

function SiteLayout() {
  return (
    <>
      < Navbar />
      <main>
        <div className="container my-5">
          <Outlet />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default SiteLayout
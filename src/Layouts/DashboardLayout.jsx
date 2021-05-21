import React from 'react'
import DashboardNavbar from '../Components/DashboardNavbar'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function DashboardLayout({children}) {
    return (
        <div>
            <div className="nav">
                <DashboardNavbar />
            </div>
            <div className="body min-h-screen pt-8 bg-gray-50 pb-16">
                {children}
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default DashboardLayout

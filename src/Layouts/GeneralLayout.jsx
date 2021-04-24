import React from 'react'
import Footer from '../Components/Footer'

function GeneralLayout({children}) {
    return (
        <div>
            <div className="body min-h-screen">
            {children}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default GeneralLayout

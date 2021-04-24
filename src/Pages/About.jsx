import React from 'react'
import GeneralLayout from '../Layouts/GeneralLayout'
import banner from '../assets/img/cars.jpg'
import Navbar from '../Components/Navbar'
import zipic from '../assets/img/cooperatebranding/IMG_2192.jfif'

function About() {
    return (
        <GeneralLayout>
            <Navbar transparent />
            <div className="about">
                <div className="relative flex content-center items-center justify-center min-h-screen"
                    style={{
                        backgroundImage: `url(${banner})`
                    }}>
                    <div className="absolute top-0 w-full h-full bg-center bg-cover">
                        <span id="blackOverlay" className="w-full h-full absolute opacity-90 bg-black"></span>
                    </div>
                    <div className="main container md:px-16 px-8 relative mx-auto grid md:grid-cols-3 grid-cols-1">
                        <div className="text flex flex-col col-span-2 md:mb-0 mb-2">
                            <p className="text text-white mb-16">About us</p>
                            <p className="slogan text-xl text-white">Since 2016, DesignWorx has been a well-known Sign Shop in Harare. What started out as a hobby, has become our passion and we're delighted to share it with you. We’re proud to have produced years of happy customers and look forward to continuing our work for many more to come! What are you waiting for? 
                            Stop by our store today for an exceptional branding experience.</p>
                        </div>
                        <div className="col-span-1 bottom-0">
                        </div>
                    </div>
                </div>
                <div className="imm">
                    <img src={zipic} alt="pikicha"/>
                </div>
            </div>
        </GeneralLayout>
    )
}

export default About

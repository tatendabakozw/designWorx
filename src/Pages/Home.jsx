import React, { useEffect, useRef } from 'react'
import Navbar from '../Components/Navbar'
import banner from '../assets/img/carsBack.png'
import carBa from '../assets/img/carBaB.png'
import { gsap, Power3, Bounce, TimelineLite } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import coop from '../assets/img/cooperatebranding/change.jpg'
import diverse from '../assets/img/cooperatebranding/devers.jfif'
import logo from '../assets/img/logo.png'
import custom1 from '../assets/img/custombranding/custom1.jpg'
import GeneralLayout from '../Layouts/GeneralLayout'
import { Link } from 'react-router-dom'
import whiteLogo from '../assets/img/dwLogo.png'
import { db } from '../firebase'
import { useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

function Home() {
    let carImage = useRef(null)
    let t1 = new TimelineLite({ delay: 0.5 })
    useEffect(() => {
        t1.from('.companyName', { y: 15, opacity: 0, ease: Bounce.easeOut, delay: 0.6 }, 'start')
        t1.from('.slogan', { y: 15, opacity: 0, ease: Power3.easeOut, delay: 0.7 }, 'start')
        t1.from('.demoandbrabdbtn', { y: 15, opacity: 0, ease: Power3.easeOut, delay: 0.8 }, 'start')
        // t1.from('.row2', { y: 15, opacity: 1, ease: Power3.easeOut, delay: 0.8 }, 'start')
        // TweenMax.to(carImage, 5,{opacity: 1, x: -40, ease:Power3.easeOut})
        gsap.from(carImage, {
            duration: 2, x: '-50', opacity: 1, ease: 'ease-out', scrollTrigger: {
                trigger: '.main',
                // start: 'top 90%',
                // end: 'bottom 60%',
                toggleActions: 'restart complete reverse reset'
            }
        })
        gsap.from('.row2', {
            duration: 2, y: '100', opacity: 0, ease: 'ease-out', scrollTrigger: {
                trigger: '.here',
                // start: 'top 90%',
                // end: 'bottom 60%',
                toggleActions: 'restart complete reverse reset'
            }
        })
        gsap.from('.row2-t', {
            duration: 2, y: '100', opacity: 0, ease: 'ease-out', scrollTrigger: {
                trigger: '.here',
                // start: 'top 90%',
                // end: 'bottom 60%',
                toggleActions: 'restart complete reverse reset'
            }
        })
        gsap.from('.row2-p', {
            duration: 2, y: '100', opacity: 0, ease: 'ease-out', scrollTrigger: {
                trigger: '.here',
                // start: 'top 90%',
                // end: 'bottom 60%',
                toggleActions: 'restart complete reverse reset'
            }
        })
    }, [t1])
    const [homestuff, setHomestuff] = useState()

    //get services from firebase
    useEffect(() => {
        db.collection('homepage').onSnapshot(snapshot => {
            setHomestuff(snapshot.docs.map(doc => ({
                id: doc.id,
                homeitem: doc.data()
            })))
        })
    }, [])
    console.log(homestuff)

    return (
        <>
            <Navbar transparent />
            <GeneralLayout>
                <div className="div">
                    <div className="relative flex content-center items-center justify-center min-h-screen"
                        style={{
                            backgroundImage: `url(${banner})`
                        }}>
                        <div className="absolute top-0 w-full h-full bg-center bg-cover">
                            <span id="blackOverlay" className="w-full h-full absolute opacity-25 bg-black"></span>
                        </div>
                        <div className="main container md:px-16 px-8 relative items-center mx-auto grid md:grid-cols-3 grid-cols-1">
                            <div className="text flex flex-col items-center col-span-1 md:mb-0 mb-2">
                                {/* <p className="companyName md:text-8xl text-5xl text-red-600 mb-2 font-extrabold">DesignWorx</p> */}
                                <img src={whiteLogo} alt="logo" className="companyName w-96" />
                                <p className="text-black ml-2 mt-8 border-2 text-xl border-red-600 cursor-pointer font-extrabold p-2 rounded-sm uppercase">PROFESSIONAL MOTOR GRAPhics</p>

                            </div>
                            <div className="col-span-2 bottom-0">
                                <img
                                    ref={el => { carImage = el }}
                                    src={carBa} alt="carbanner image" className="flex-self"
                                    alt="iima"
                                />
                            </div>
                        </div>
                        <div
                            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                            style={{ height: "70px", transform: "translateZ(0)" }}
                        >
                            <svg
                                className="absolute bottom-0 overflow-hidden"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="text-gray-900 fill-current"
                                    points="2560 0 2560 100 0 100"
                                ></polygon>
                            </svg>
                        </div>
                    </div>

                    <div className="pb-32 px-8 bg-gray-900 min-h-screen pt-16">
                        <div className="row2 container mx-auto px-4">
                            <p className="text-7xl text-center text-red-600 font-extrabold">01</p>
                            <p className="row2-t text-white text-center text-3xl mt-2 mb-24">Why us?</p>
                            {/* <p>custom branding</p> */}
                            {
                                homestuff?.map(item => (
                                    <div key={item.id} className="row2-p grid md:grid-cols-2 grid-cols-1 gap-2 mb-8">
                                        <div className="col-span-1">
                                            <img src={item.homeitem.home_picture} alt="coop" />
                                        </div>
                                        <div className="col-span-1 mx-auto flex items-center">
                                            <p className="md:text-4xl text-xl font-semibold text-white text-center">{item.homeitem.home_title}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <section className="relative py-20">
                        <div
                            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                            style={{ height: "80px", transform: "translateZ(0)" }}
                        >
                            <svg
                                className="absolute bottom-0 overflow-hidden"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="text-white fill-current"
                                    points="2560 0 2560 100 0 100"
                                ></polygon>
                            </svg>
                        </div>

                        <div className="more container mx-auto px-4">
                            <div className="items-center flex flex-wrap">
                                <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                                    <img
                                        alt="..."
                                        className="max-w-full rounded-sm shadow-lg"
                                        src={custom1}
                                    />
                                </div>
                                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                                    <div className="text md:pr-12">
                                        <div className="text-center inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full">
                                            <img src={logo} alt="logo" />
                                        </div>
                                        <h3 className="text-3xl font-semibold">
                                            Our services
                                    </h3>
                                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                            We offer a variety of branding services for all vehicles:
                                    </p>
                                        <ul className="list-none mt-6">
                                            <li className="py-2">
                                                <div className="flex items-center">
                                                    <div>
                                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3"></span>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-gray-600">
                                                            Corporate branding
                                                    </h4>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="flex items-center">
                                                    <div>
                                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3"></span>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-gray-600">Custom branding</h4>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="pb-20 relative block bg-gray-900">
                        <div className="container mx-auto px-4 lg:pt-36 lg:pb-64">
                            {/* <div className="flex flex-wrap text-center justify-center">
                                <div className="w-full lg:w-6/12 px-4">
                                    <h2 className="text-4xl font-semibold text-white">
                                        We achieve!
                                </h2>
                                    <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                                        We’re proud to have produced years of happy customers and look forward to continuing our work for many more to come!
                                        What are you waiting for? Stop by our store today for an exceptional branding experience.
                                    </p>
                                </div>
                            </div> */}

                        </div>
                    </section>
                    <section className="relative block py-24 lg:pt-0 bg-gray-900">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-50">
                                        <div className="flex-auto p-5 lg:p-10">
                                            <h4 className="text-2xl font-semibold">
                                                Want branding from us?
                                        </h4>
                                            <div className="relative w-full mb-3 mt-8">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="full-name"
                                                >
                                                    Full Name
                                            </label>
                                                <input
                                                    type="text"
                                                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                                    placeholder="Full Name"
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                            </div>

                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="email"
                                                >
                                                    Email
                                            </label>
                                                <input
                                                    type="email"
                                                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                                    placeholder="Email"
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                            </div>

                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="message"
                                                >
                                                    Message
                                            </label>
                                                <textarea
                                                    rows="4"
                                                    cols="80"
                                                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                                    placeholder="Type a message..."
                                                />
                                            </div>
                                            <div className="text-center mt-6">
                                                <button
                                                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                    type="button"
                                                    style={{ transition: "all .15s ease" }}
                                                >
                                                    Send Message
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </GeneralLayout>
        </>
    )
}

export default Home

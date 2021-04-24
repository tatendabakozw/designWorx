import React from 'react'
import Navbar from '../Components/Navbar'
import GeneralLayout from '../Layouts/GeneralLayout'
import coop from '../assets/img/coop1.svg'
import perso from '../assets/img/perso.svg'
import { Link } from 'react-router-dom'

function Services() {
    return (
        <GeneralLayout>
            <Navbar transparent />
            <div className="bg-gray-900">
                <div className="top min-h-screen pt-24">
                    <p className="text-center text-xl text-white mb-2 font-semibold">Our services</p>
                    <p className="text-center text-gray-400 mb-8">Our service categories</p>
                    <div className="servicecategorues grid grid-cols-3 gap-8 px-36 items-center">
                        <ServiceItem
                            className="bg-none hover:bg-gray-800 h-60"
                            image={coop}
                            category="Cooperate branding"
                            categoryDesc="For companies"
                            navig="/cooperate"
                        />
                        <ServiceItem
                            className="bg-gray-800 hover:bg-none h-80"
                            image={perso}
                            category="Pesronal branding"
                            categoryDesc="For pesronal vehicles"
                            navig="/personal"
                        />
                        <ServiceItem
                            className="bg-none h-60"
                            image={perso}
                            category="Pesronal branding"s
                            categoryDesc="For pesronal vehicles"
                            navig="/cooperate"
                        />
                    </div>
                </div>
            </div>
        </GeneralLayout>
    )
}

const ServiceItem = ({ className, image, category, categoryDesc, navig }) => {
    return (
        <div className="div">
            <Link to={navig} className={`${className} ser cursor-pointer hover:shadow-lg p-4 mb-5 content-center items-center flex`}>
                <div className="image text-center flex flex-col items-center w-full">
                    <img src={image} alt="image" className="w-56" />
                </div>
            </Link>
            <p className="text-white text-center capitalize font-semibold">{category}</p>
            <p className="text-gray-400 text-center capitalize text-sm">{categoryDesc}</p>
        </div>
    )
}

export default Services

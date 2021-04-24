import React from 'react'
import Navbar from '../Components/Navbar'
import ServiceItem from '../Components/ServiceItem'
import GeneralLayout from '../Layouts/GeneralLayout'
import image from '../assets/img/custombranding/custom1.jpg'
import ServiceItem2 from '../Components/ServiceItem2'
import image2 from '../assets/img/cooperatebranding/IMG_4993.jfif'

function Personal() {
    return (
        <GeneralLayout>
            <Navbar transparent />
            <div className="body bg-gray-900 min-h-screen py-24">
                <p className="text-center text-xl text-white mb-2 font-semibold">Custom branding</p>
                <p className="text-center text-gray-400 mb-8">Clients we offered personal branding</p>
                <div className="services">
                    <ServiceItem
                        image={image}
                        companyname="Some company"
                    />
                    <ServiceItem2
                        image={image2}
                        companyname="Some company"
                    />
                </div>
            </div>
        </GeneralLayout>
    )
}

export default Personal

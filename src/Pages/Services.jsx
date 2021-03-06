import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import GeneralLayout from '../Layouts/GeneralLayout'
import { db } from '../firebase'

function Services() {
    const [services, setServices] = useState()

    useEffect(() => {
        db.collection('services').onSnapshot(snapshot => {
            setServices(snapshot.docs.map(doc => ({
                id: doc.id,
                services: doc.data()
            })));
        })
    }, [])

    console.log(services)

    return (
        <GeneralLayout>
            <Navbar transparent />
            <div className="bg-gray-900">
                <div className="top min-h-screen pt-24">
                    <p className="text-center text-xl text-white mb-2 font-semibold">Our services</p>
                    <p className="text-center text-gray-400 mb-8">Our service categories</p>
                    <div className="servicecategorues grid md:grid-cols-3 grid-cols-1 gap-8 md:px-36 px-3 items-center">
                        {
                            services?.map(service => (
                                <>
                                    <ServiceItem
                                        key={service.id}
                                        className="bg-none col-span-1 hover:bg-gray-800 h-60"
                                        image={service.services.image}
                                        category={service.services.service}
                                        categoryDesc={service.services.branddescription}
                                        navig="/cooperate"
                                    />
                                </>
                            ))
                        }
                        {/* <ServiceItem
                            className="bg-gray-800 col-span-1 hover:bg-none h-80"
                            image={perso}
                            category="Pesronal branding"
                            categoryDesc="For pesronal vehicles"
                            navig="/personal"
                        />
                        <ServiceItem
                            className="bg-none col-span-1 h-60 mb-6"
                            image={perso}
                            category="Pesronal branding" s
                            categoryDesc="For pesronal vehicles"
                            navig="/cooperate"
                        /> */}
                    </div>
                </div>
            </div>
        </GeneralLayout>
    )
}

const ServiceItem = ({ className, image, category, categoryDesc, navig }) => {
    return (
        <div className="div">
            <span className={`${className} ser cursor-pointer hover:shadow-lg p-4 mb-5 content-center items-center flex`}>
                <div className="image text-center flex flex-col items-center w-full">
                    <img src={image} alt="image" className="w-56" />
                </div>
            </span>
            <p className="text-white text-center capitalize font-semibold">{category}</p>
            <p className="text-gray-400 text-center capitalize text-sm">{categoryDesc}</p>
        </div>
    )
}

export default Services

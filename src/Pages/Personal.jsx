import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import ServiceItem from '../Components/ServiceItem'
import GeneralLayout from '../Layouts/GeneralLayout'
import image from '../assets/img/custombranding/custom1.jpg'
import ServiceItem2 from '../Components/ServiceItem2'
import image2 from '../assets/img/cooperatebranding/IMG_4993.jfif'
import { db } from '../firebase'

function Personal() {
    const [services, setNewServices] = useState()

    useEffect(() => {
        db.collection('pageservices').onSnapshot(snapshot => {
            setNewServices(snapshot.docs.map(doc => ({
                id: doc.id,
                services: doc.data()
            })));
        })
    }, [])
    console.log(services)

    return (
        <GeneralLayout>
            <Navbar transparent />
            <div className="body bg-gray-900 min-h-screen py-24">
                <p className="text-center text-xl text-white mb-2 font-semibold">Custom branding</p>
                <p className="text-center text-gray-400 mb-8">Clients we offered personal branding</p>
                <div className="services">
                    {
                        services?.map(service => (
                            <>
                                {service.services.service === "Custom branding" ? (
                                    <>
                                        <ServiceItem
                                            image={service.services.image}
                                            companyname={service.services.customer}
                                        />
                                    </>
                                ) : null}
                            </>
                        ))
                    }

                </div>
            </div>
        </GeneralLayout>
    )
}

export default Personal

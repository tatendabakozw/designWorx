import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import ServiceItem from '../Components/ServiceItem'
import GeneralLayout from '../Layouts/GeneralLayout'
import { db } from '../firebase'

function Cooperate() {
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
                <p className="text-center text-xl text-white mb-2 font-semibold">Cooperate branding</p>
                <p className="text-center text-gray-400 mb-8">Clients we offered cooperate branding</p>
                <div className="services">
                    {
                        services?.map(service => (
                            <>
                                {service.services.service === "Cooperate branding" ? (
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

export default Cooperate

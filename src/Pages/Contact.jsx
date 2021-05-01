import React from 'react'
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GeneralLayout from '../Layouts/GeneralLayout';
import Navbar from '../Components/Navbar';

// mission: To exceed our clients expectations
// About Us/What we do: Vibrant Graphics Art firm that specializes in vehicle branding.
// Designworxzim

function Contact() {
    return (
        <GeneralLayout>
            <Navbar/>
            <div className="container flex flex-col w-full md:flex-row my-4 p-8">
                <div className="w-full flex flex-col justify-around">
                    <p className="text-gray-600 text-center font-semibold">Contact Us</p>
                    <p className="flex flex-row items-center mb-4 text-gray-700">
                        <PhoneEnabledIcon /> <p>0777341553</p>
                    </p>
                    {/* <p className="flex flex-row items-center mb-4 text-gray-700">
                        <EmailIcon /> <p>trewmane@gmail.com</p>
                    </p> */}
                    <p className="flex flex-row items-center mb-4 text-gray-700">
                        <LocationOnIcon /> <p>Cnr Harare and Robert Mugabe </p>
                    </p>
                </div>
                <div className="w-full p-2">
                    <form className="border shadow rounded p-3 flex flex-col">
                        <label htmlFor="name">Your Name</label>
                        <input
                            className="p-2 border-2 border-red-200 rounded mb-4"
                            type="text"
                            placeholder="name"
                            id="name"
                            name="name"
                        />
                        <label htmlFor="email">Mail</label>
                        <input
                            className="p-2 border-2 border-red-200 rounded mb-4"
                            type="email"
                            placeholder="email"
                            id="email"
                            name="email"
                        />
                        <label htmlFor="message">Message</label>
                        <input
                            name="message"
                            className="p-2 border-2 border-red-200 rounded "
                            placeholder="send message"
                            type="text"
                        />
                        <button
                            className="bg-white border-red-600 border-2 rounded mt-8 p-2 hover:bg-red-600 hover:text-white"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </GeneralLayout>
    )
}

export default Contact

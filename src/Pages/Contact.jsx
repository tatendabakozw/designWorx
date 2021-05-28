import React, { useEffect, useState } from 'react';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GeneralLayout from '../Layouts/GeneralLayout';
import Navbar from '../Components/Navbar';
import { db } from '../firebase';

// mission: To exceed our clients expectations
// About Us/What we do: Vibrant Graphics Art firm that specializes in vehicle branding.
// Designworxzim

function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [err, setErr] = useState('')
    const [msg, setMsg] = useState('')
    const [loading, setLoading] = useState(false)

    const createMessage = async (e) => {
        e.preventDefault()
        if (!email || !name || !message) {
            setErr('Enter all field')
        }
        else {
            setLoading(true)
            setErr('')
            await db.collection('messages').add({
                name: name,
                email: email,
                message: message,
                createAt: Date.now()
            })
            setMsg('Wessage has been sent, Thank you!')
            setName('')
            setEmail('')
            setMessage('')
            setLoading(false)
        }
    }

    return (
        <GeneralLayout>
            <Navbar />
            <div className="container flex flex-col w-full md:flex-row my-4 p-8">
                <div className="w-full flex flex-col justify-around">
                    <p className="text-gray-600 text-center font-semibold">Contact Us</p>
                    <p className="flex flex-row items-center mb-4 text-gray-700">
                        <PhoneEnabledIcon /> <p>+2638644290001</p>
                    </p>
                    <p className="flex flex-row items-center mb-4 text-gray-700">
                        {/* <EmailIcon /> <p>delroychip@gmail.com</p> */}
                    </p>
                    <p className="flex flex-row items-center mb-4 text-gray-700">
                        <LocationOnIcon /> <p>110 Harare St. Corner R. Mugabe </p>
                    </p>
                </div>
                <div className="w-full p-2">
                    <form onSubmit={createMessage} className="border shadow rounded p-3 flex flex-col">
                        {err ? (<p className="bg-red-200 border-l-4 border-red-600 w-full mb-2 text-gray-700 capitalize font-semibold text-center p-2 rounded-sm">{err}</p>) : null}
                        {msg ? (<p className="bg-blue-200 border-l-4 border-blue-600 w-full mb-2 text-gray-700 capitalize font-semibold text-center p-2 rounded-sm">{err}</p>) : null}

                        <label htmlFor="name" className="text-sm text-gray-700">Your Name</label>
                        <input
                            className="p-2 border-2 border-red-200 rounded-sm mb-4"
                            type="text"
                            placeholder="name"
                            id="name"
                            name="name"
                            onChange={e => setName(e.target.value)}
                        />
                        <label htmlFor="email" className="text-sm text-gray-700">Email/Phonenumber</label>
                        <input
                            className="p-2 border-2 border-red-200 rounded-sm mb-4"
                            type="text"
                            placeholder="phonenumber/email"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label htmlFor="message" className="text-sm text-gray-700">Message</label>
                        <textarea
                            name="message"
                            className="p-2 border-2 border-red-200 rounded-sm "
                            placeholder="send message"
                            type="text"
                            onChange={e => setMessage(e.target.value)}
                        />
                        {msg ? (<p className="bg-blue-200 border-l-4 border-blue-600 w-full mb-2 text-gray-700 capitalize font-semibold text-center p-2 rounded-sm">{err}</p>) : null}

                        {
                            loading ? (<p>loading...</p>) : (
                                <button
                                    type="submit"
                                    className="bg-white border-red-600 border-2 rounded mt-8 p-2 hover:bg-red-600 hover:text-white"
                                >
                                    Send Message
                                </button>
                            )
                        }
                    </form>
                </div>

            </div>
        </GeneralLayout>
    )
}

export default Contact

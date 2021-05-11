import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
// import google from '../Images/google.svg'
import { auth, provider } from '../firebase'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import GeneralLayout from '../Layouts/GeneralLayout';
import Navbar from '../Components/Navbar';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')
    const history = useHistory()
    const [passwordVisible, setPasswordVisible] = useState(false)
    // eslint-disable-next-line

    //login with google
    // const loginWithGoogle = (e) => {
    //     e.preventDefault()
    //     auth.signInWithPopup(provider).then((res) => {
    //         setMsg('Login successfull')
    //         console.log(res.user)
    //         localStorage.setItem('elynonuser', JSON.stringify(res.user))
    //         localStorage.setItem('elynontoken', res.accessToken)
    //         setTimeout(() => { history.push('/') }, 1000);
    //     }).catch((error) => {
    //         console.log(error.message)
    //         setMsg(error.message)
    //     })
    // }

    //login using credentials
    const signInWithCreds = (e) => {
        e.preventDefault()
        if (email === "delroychip@gmail.com" && password === "delTina5he") {
            setMsg('login successful')
            localStorage.setItem('designworxadmin', email)
            setTimeout(() => { history.push('/dashboard') }, 1000);
        } else {
            setMsg('wrong credentials')
        }

    }

    return (
        <>
            <Navbar />
            <GeneralLayout>
                <div>
                    <section className="w-full bg-gray-50 min-h-screen py-10">
                        <div
                            className="top-0 w-full h-full"
                        ></div>
                        <div className="login container mx-auto min-h-screen">
                            <div className="flex content-center items-center justify-center min-h-screen">
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="flex flex-col shadow min-w-0 break-words w-full mb-6 rounded bg-gray-300 border-0">
                                        {/* <button
                                        onClick={loginWithGoogle}
                                        className="bg-blue-700 self-center mt-4 mx-4 w-4/5 justify-center rounded-sm p-2 flex flex-row items-center ">
                                        <img src={google} alt="logo" className="w-8 mr-2" />
                                        <p className="text-white text-center font-semibold">Login with Google</p>
                                    </button> */}
                                        <div className="rounded-t mb-0 flex flex-col px-6">
                                            {msg ? (<p className="p-1 bg-blue-400 mt-4 rounded-sm text-center w-5/6 self-center border border-blue-800">{msg}</p>) : null}
                                            <hr className="mt-6 border-b-1 mb-6 border-gray-400" />
                                        </div>
                                        <div className="flex  flex-col flex-auto px-4 lg:px-10 py-10 pt-0">
                                            <div className="text-gray-500 text-center mb-3 font-bold">
                                                <small>sign in with credentials</small>
                                            </div>

                                            {/* the sign in form */}
                                            <form onSubmit={signInWithCreds}>
                                                <div className=" w-full mb-3">
                                                    <label
                                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Email
                                                </label>
                                                    <input
                                                        type="email"
                                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                                        placeholder="Email"
                                                        style={{ transition: "all .15s ease" }}
                                                        onChange={e => setEmail(e.target.value)}
                                                    />
                                                </div>

                                                <div className=" w-full mb-3">
                                                    <label
                                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Password
                        </label>
                                                    <div className="flex flex-row items-center px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full">
                                                        <input
                                                            type={passwordVisible ? "text" : "password"}
                                                            id="email"
                                                            onChange={e => setPassword(e.target.value)}
                                                            placeholder="Enter password" className="outline-none rounded p-2 w-full" />
                                                        {passwordVisible ? (<span onClick={() => setPasswordVisible(false)} className="cursor-pointer text-gray-600">
                                                            <VisibilityOffIcon />
                                                        </span>) : (<span onClick={() => setPasswordVisible(true)} className="cursor-pointer text-gray-600">
                                                            <VisibilityIcon />
                                                        </span>)}
                                                    </div>
                                                </div>

                                                <div className="text-center mt-6">
                                                    <button
                                                        className="bg-blue-700 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                                        type="submit"
                                                        style={{ transition: "all .15s ease" }}
                                                    >
                                                        Sign In
                        </button>
                                                </div>
                                                <div className="flex flex-wrap mt-6">
                                                    <div className="w-1/2">
                                                        <a
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                            className="text-gray-700"
                                                        >
                                                            <small>Forgot password?</small>
                                                        </a>
                                                    </div>
                                                    <div className="w-1/2 text-right">
                                                        <Link to='/register'
                                                            className="text-gray-700"
                                                        >
                                                            <small>Create new account</small>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </form>
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

export default Login

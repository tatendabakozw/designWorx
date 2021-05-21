import React, { useState } from 'react'
import DashboardLayout from '../Layouts/DashboardLayout'
import the_picture from '../assets/img/custombranding/custom1.jpg'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { db, storage } from '../firebase'

function EditHomePage() {
    const [home_title, setHomeTitle] = useState('')
    const [picture, setPicture] = useState(null)
    const [progress, setProgress] = useState(0)
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState('')

    const addHomeItem = (e) => {
        e.preventDefault()
        if (!picture || !home_title) {
            setErr('Enter all fields')
        } else {
            setLoading(true)
            const uploadTask = storage.ref(`/images/service/${picture.name}`).put(picture)
            uploadTask.on("state_changed", (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            }, (error) => {
                console.log(error);
                alert(error.message)
            },
                () => {
                    storage.ref('images/service').child(picture.name).getDownloadURL().then(url => {
                        db.collection('homepage').add({
                            home_title: home_title,
                            home_picture: url
                        })
                    })
                }
            )
            setLoading(false)
        }
    }

    const editHomeItem = (e) => {
        e.preventDefault()
    }

    const deleteHomeItem = (e) => {
        e.preventDefault()
    }

    return (
        <DashboardLayout>
            <div className="px-8">
                <div className="flex flex-row items-center">
                    <div className="mb-8 flex flex-col bg-white rounded-sm cursor-pointer p-4 shadow">
                        {err ? (<p className="bg-red-200 border-l-4 border-red-600 w-full mb-2 text-gray-700 capitalize font-semibold text-center p-2 rounded-sm">{err}</p>) : null}


                        <form onSubmit={addHomeItem} className="form flex-row flex items-center">
                            <p className="text-red-600 mr-4">Add item</p>
                            <input
                                onChange={e => setHomeTitle(e.target.value)}
                                type="text"
                                className="border border-gray-300 rounded-sm p-2 mr-4"
                                placeholder="home title for service" />
                            <input
                                type="file"
                                onChange={e => setPicture(e.target.files[0])}
                                className="border border-gray-300 rounded-sm p-2 mr-4" placeholder="home title for service" />
                            {loading ? (<p>loading...</p>) : (
                                <button type="submit" className="p-2 bg-blue-700 text-white text-sm rounded-sm hover:bg-blue-600">Add Home Item</button>
                            )}
                        </form>
                    </div>
                </div>
                <div className="home_items p-4">
                    <HomeItem title={`We exceed our clients expectations`} home_pic={the_picture} />
                </div>
            </div>
        </DashboardLayout>
    )
}

const HomeItem = ({ title, home_pic }) => {
    return (
        <div className="grid w-full bg-white shadow p-4 grid-cols-6 gap-8 mb-8 items-center justify-around">
            <div className="col-span-2 ">
                {title}
            </div>
            <div className="col-span-4 flex flex-row">
                <img src={home_pic} alt="picture" className="w-80 mr-4" />
                <div className="butt">
                    <span className="text-blue-400 mr-4 cursor-pointer">
                        <EditIcon fontSize="small" />
                    </span>
                    <span className="text-red-400 cursor-pointer">
                        <DeleteIcon fontSize="small" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default EditHomePage

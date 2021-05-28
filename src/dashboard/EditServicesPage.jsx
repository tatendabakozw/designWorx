import React, {useState, useEffect} from 'react'
import { db, storage } from '../firebase';
import DashboardLayout from '../Layouts/DashboardLayout'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

function EditServicesPage() {
    const [service, setService] = useState('')
    const [customer, setCustomer] = useState('')
    const [picture, setPicture] = useState()
    const [progress, setProgress] = useState(101)
    const [newServices, setNewServices] = useState()
    const [err, setErr] = useState('')

    const AddServiceItem = (e) => {
        e.preventDefault()
        if (!service || !picture) {
            setErr('Enter all fields')
        } else {
            const uploadTask = storage.ref(`/images/service/${picture.name}`).put(picture)
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                (error) => {
                    console.log(error);
                    alert(error.message)
                },
                () => {
                    storage.ref('images/service').child(picture.name).getDownloadURL().then(url => {
                        db.collection('services').add({
                            customer: customer,
                            service: service,
                            image: url
                        })
                    })
                }
            )
        }
    }

    useEffect(() => {
        db.collection('services').onSnapshot(snapshot => {
            setNewServices(snapshot.docs.map(doc => ({
                id: doc.id,
                services: doc.data()
            })));
        })
    }, [])

    console.log(newServices)
    return (
        <DashboardLayout>
            <div className="px-8">
                <div className="flex flex-row items-center">
                    <div className="mb-8 flex flex-col bg-white rounded-sm cursor-pointer p-4 shadow">
                        {err ? (<p className="bg-red-200 border-l-4 border-red-600 w-full mb-2 text-gray-700 capitalize font-semibold text-center p-2 rounded-sm">{err}</p>) : null}


                        <form onSubmit={AddServiceItem} className="form flex-row flex items-center">
                            <p className="text-red-600 mr-4">Add item</p>
                            <input
                                onChange={e => setService(e.target.value)}
                                type="text"
                                className="border border-gray-300 rounded-sm p-2 mr-4"
                                placeholder="Service name" />
                            <input
                                onChange={e => setCustomer(e.target.value)}
                                type="text"
                                className="border border-gray-300 rounded-sm p-2 mr-4"
                                placeholder="Service name" />
                            <input
                                type="file"
                                onChange={e => setPicture(e.target.files[0])}
                                className="border border-gray-300 rounded-sm p-2 mr-4" placeholder="home title for service" />
                            {parseInt(progress) < 100 ? (<p>loading...</p>) : (
                                <button type="submit" className="p-2 bg-blue-700 text-white text-sm rounded-sm hover:bg-blue-600">Add service Item</button>
                            )}
                        </form>
                    </div>
                </div>
                <div className="home_items p-4">
                    {
                        newServices?.map(item => (
                            <ServiceItem key={item.id} id={item.id} title={item.services.service} home_pic={item.services.image} />
                        ))
                    }
                </div>
            </div>
        </DashboardLayout>
    )
}

const ServiceItem = ({ title, home_pic, id }) => {

    const deleteHomeItem = async (e) => {
        e.preventDefault()
        const res = await db.collection('services').doc(id).delete();
        console.log(res)
    }

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
                    <span onClick={deleteHomeItem} className="text-red-400 cursor-pointer">
                        <DeleteIcon fontSize="small" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default EditServicesPage

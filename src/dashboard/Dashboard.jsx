import React, { useEffect, useState } from 'react'
// import userIcon from '../../Images/dashuser.svg'
import { Link } from 'react-router-dom';
import DashboardLayout from '../Layouts/DashboardLayout';
import logo from '../assets/img/logo.png'
import AddIcon from '@material-ui/icons/Add'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { db, storage } from '../firebase';

function Dashboard() {
    const [service, setServiceType] = useState('')
    const [openTDialog, setOpenDialog] = useState(false);
    const [openSDialog, setOpenSDialog] = useState(false);
    const [servicename, setServiceName] = useState('');
    const [description, setDescription] = useState('');
    const [servPicture, setServPicture] = useState('');
    const [customer, setCustomer] = useState('')
    const [picture, setPicture] = useState()
    const [progress, setProgress] = useState(0)

    const setSImage = (e) => {
        if (e.target.files[0]) {
            setServPicture(e.target.files[0]);
        }
    }

    const setImage = (e) => {
        if (e.target.files[0]) {
            setPicture(e.target.files[0]);
        }
    }

    const openDialog = () => {
        setOpenDialog(true);
    };

    const openServDialog = () => {
        setOpenSDialog(true);
    };

    const closeDialog = () => {
        setOpenDialog(false);
    };
    const closeServDialog = () => {
        setOpenSDialog(false);
    };

    const AddService = (e) => {
        e.preventDefault()
        const uploadTask = storage.ref(`/images/service/${Date.now() + '-' + picture.name}`).put(picture)
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
                storage.ref('images').child(picture.name).getDownloadURL().then(url => {
                    db.collection('pageservices').add({
                        customer: customer,
                        service: service,
                        image: url
                    })
                })
            }
        )
        closeDialog()
    }

    const AddBrand = (e) => {
        e.preventDefault()
        const uploadTask = storage.ref(`/pictures/${servPicture.name}`).put(servPicture)
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
                storage.ref('pictures').child(servPicture.name).getDownloadURL().then(url => {
                    db.collection('services').add({
                        brandtype: servicename,
                        branddescription: description,
                        brandpic: url
                    })
                })
            }
        )
        closeDialog()
    }

    const [newservices, setNewServices] = useState()

    useEffect(() => {
        db.collection('services').onSnapshot(snapshot => {
            setNewServices(snapshot.docs.map(doc => ({
                id: doc.id,
                services: doc.data()
            })));
        })
    }, [])
    

    console.log(newservices)
    return (
        <DashboardLayout>
            <div className="px-8 flex md:flex-row flex-col">
                <div className="left md:w-1/4 w-full">
                    <p className="text-gray-700 text-3xl font-semibold mb-4">Dashboard</p>
                    <div className="bg-white shadow rounded flex p-4 flex-col mb-4">
                        <img src={logo} alt="user" className="w-36 self-center" />
                        <p className="text-blue-900 font-semibold self-center">DesignWorxs</p>
                        <div className="border-b w-full self-center border-gray-300 m-4"></div>
                        {/* <div className="flex flex-row text-gray-500 items-center justify-around">
                            <p className="text-sm">Earned in March</p>
                            <p>$300</p>
                        </div> */}
                    </div>
                    {/* <Link to='/orders' className="flex cursor-pointer flex-row text-sm rounded items-center text-gray-500 p-4 mb-4 bg-white shadow">
                        <MailOutlineIcon fontSize="small" />
                        <p>Orders</p>
                        <div className="flex-1"></div>
                        <p className="text-blue-700">View All</p>
                    </Link> */}
                </div>
                <div className="right w-4/5 pl-8">
                    <div className="flex flex-col md:items-start items-center">
                        <p className="text-gray-500 font-semibold mb-4">Add new service</p>
                        <span className="bg-white p-4 w-full shadow rounded">
                            {/* <p className="text-gray-800 text-xl font-semibold mb-1">Benifits of upgrading account</p> */}
                            <p className="text-gray-600">Use this dashboard to add products to you services</p>
                        </span>
                        {/* <span onClick={openDialog} className="bg-white hover:shadow-md cursor-pointer p-4 my-4 shadow rounded">
                            <p className="text-red-600 flex flex-row items-center">
                                <AddIcon />
                                <p>Add jobs done</p>
                            </p>
                        </span> */}
                        <Dialog
                            open={openTDialog}
                            onClose={closeDialog}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                <p className="text-gray-700 font-semibold text-xl">{"Add a service"}</p>
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    <div className="ss grid md:grid-cols-3 grid-cols-1 gap-2">
                                        <select
                                            defaultValue=""
                                            onChange={e => setServiceType(e.target.value)}
                                            id="category"
                                            className="border border-gray-400 rounded outline-none col-span-1 text-sm text-gray-600 md:w-full w-1/2 py-1 placeholder-gray-400" >
                                            <option disabled={true} value="">branding type</option>
                                            <option value='Custom branding'>Custom branding</option>
                                            <option value='Cooperate branding'>Cooperate branding</option>
                                            {/* <option value='100k - 500k'>100k - 500k</option> */}
                                        </select>
                                        <input
                                            type="text"
                                            onChange={e => setCustomer(e.target.value)}
                                            placeholder="Customer name" className="border col-span-1 border-gray-600 rounded p-1" />
                                        <input
                                            type="file"
                                            onChange={setImage}
                                            placeholder="Select image" className="border col-span-1 border-gray-600 rounded p-1" />
                                    </div>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={closeDialog} color="primary" autoFocus>
                                    Cancel
                            </Button>
                                <Button onClick={AddService} color="primary" >
                                    <p className="font-semibold">Add</p>
                                </Button>
                            </DialogActions>
                        </Dialog>
                        <div className=" w-full flex flex-col">
                            <p className="text-gray-600 mt-4">Items below will be viewed on services page</p>
                            <p className="text-gray-600 mt-4">Adding just three will be a good number.The one below is an example that will be deleted on request</p>
                            <div className="flex">
                                <Link to='/eitservicespage' className="bg-white hover:shadow-md cursor-pointer p-4 my-4 shadow rounded">
                                    {/* <p className="text-gray-800 text-xl font-semibold mb-1">Benifits of upgrading account</p> */}
                                    <p className="text-red-600 flex flex-row items-center">
                                        <AddIcon />
                                        <p>Add service</p>
                                    </p>
                                </Link>
                                <Dialog
                                    open={openSDialog}
                                    onClose={closeServDialog}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">
                                        <p className="text-gray-700 font-semibold text-xl">{"Add a branding type"}</p>
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            <div className="ss grid md:grid-cols-3 grid-cols-1 gap-2">
                                                <input
                                                    type="text"
                                                    onChange={e => setServiceName(e.target.value)}
                                                    placeholder="Brand type" className="border col-span-1 border-gray-600 rounded p-1" />

                                                <input
                                                    type="text"
                                                    onChange={e => setDescription(e.target.value)}
                                                    placeholder="service description" className="border col-span-1 border-gray-600 rounded p-1" />
                                                <input
                                                    type="file"
                                                    onChange={setSImage}
                                                    placeholder="Select image" className="border col-span-1 border-gray-600 rounded p-1" />
                                            </div>
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={closeServDialog} color="primary" autoFocus>
                                            Cancel
                                        </Button>
                                        <Button onClick={AddBrand} color="primary" >
                                            <p className="font-semibold">Add</p>
                                        </Button>
                                        <p>{progress}</p>
                                    </DialogActions>
                                </Dialog>
                            </div>
                            <div className="bg-white grid md:grid-cols-3 grid-cols-1 gap-4 hover:shadow-md p-4 my-4 shadow rounded">
                                {
                                    newservices?.map(service => (
                                        <span className="px-4 cursor-pointer items-center flex flex-col">
                                            <p className="text-gray-700 text-sm">{service.services.service}</p>
                                            <div className="border-b-2 border-gray-400 my-2 rounded-sm w-10"></div>
                                            <img src={service.services.image} alt="cooperate" />
                                        </span>
                                    ))
                                }

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Dashboard

import React, { useState } from 'react'
// import userIcon from '../../Images/dashuser.svg'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
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
import cooperate from '../assets/img/cooperatebranding/IMG_3487.jfif'
import custom from '../assets/img/custombranding/custom1.jpg'

function Dashboard() {
    const [service, setServiceType] = useState('')
    const [openTDialog, setOpenDialog] = useState(false);
    const openDialog = () => {
        setOpenDialog(true);
    };

    const closeDialog = () => {
        setOpenDialog(false);
    };
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
                    <Link to='/orders' className="flex cursor-pointer flex-row text-sm rounded items-center text-gray-500 p-4 mb-4 bg-white shadow">
                        <MailOutlineIcon fontSize="small" />
                        <p>Orders</p>
                        <div className="flex-1"></div>
                        <p className="text-blue-700">View All</p>
                    </Link>
                </div>
                <div className="right w-4/5 pl-8">
                    <div className="flex flex-col md:items-start items-center">
                        <p className="text-gray-500 font-semibold mb-4">Add new service</p>
                        <span className="bg-white p-4 w-full shadow rounded">
                            {/* <p className="text-gray-800 text-xl font-semibold mb-1">Benifits of upgrading account</p> */}
                            <p className="text-gray-600">Use this dashboard to add products to you services</p>
                        </span>
                        <span onClick={openDialog} className="bg-white hover:shadow-md cursor-pointer p-4 my-4 shadow rounded">
                            {/* <p className="text-gray-800 text-xl font-semibold mb-1">Benifits of upgrading account</p> */}
                            <p className="text-red-600 flex flex-row items-center">
                                <AddIcon />
                                <p>Add service</p>
                            </p>
                        </span>
                        <div className=" w-full">
                           <p className="text-gray-600 mt-4">Click on any to edit how these are viewed on services page</p>
                           <div className="bg-white grid md:grid-cols-3 grid-cols-1 gap-4 hover:shadow-md p-4 my-4 shadow rounded">
                               <span className="px-4 cursor-pointer items-center flex flex-col">
                                   <p className="text-gray-700 text-sm">Cooperate</p>
                                   <div className="border-b-2 border-gray-400 my-2 rounded-sm w-10"></div>
                                   <img src={cooperate} alt="cooperate"/>
                               </span>
                               <span className="px-4 cursor-pointer items-center flex flex-col">
                                   <p className="text-gray-700 text-sm">Custom</p>
                                   <div className="border-b-2 border-gray-400 my-2 rounded-sm w-10"></div>
                                   <img src={custom} alt="cooperate"/>
                               </span>
                               <span className="px-4 cursor-pointer items-center flex flex-col">
                                   <p className="text-gray-700 text-sm">Cooperate</p>
                                   <div className="border-b-2 border-gray-400 my-2 rounded-sm w-10"></div>
                                   <img src={cooperate} alt="cooperate"/>
                               </span>
                           </div>
                        </div>
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
                                            <option disabled={true} value="">breanding type</option>
                                            <option value='Custom branding'>Custom branding</option>
                                            <option value='Cooperate branding'>Cooperate branding</option>
                                            {/* <option value='100k - 500k'>100k - 500k</option> */}
                                        </select>
                                        <input type="text" placeholder="Customer name" className="border col-span-1 border-gray-600 rounded p-1" />
                                        <input type="file" placeholder="Select image" className="border col-span-1 border-gray-600 rounded p-1" />
                                    </div>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={closeDialog} color="primary" autoFocus>
                                    Cancel
                            </Button>
                                <Button color="primary" >
                                    <p className="font-semibold">Add</p>
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Dashboard

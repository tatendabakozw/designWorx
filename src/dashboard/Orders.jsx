import React from 'react'
import DashboardLayout from '../Layouts/DashboardLayout'
import OrderTable from '../Components/OrderTable'

const Orders = () =>{
    return(
        <DashboardLayout>
            <div className="px-8">
                <p className="text-xl text-gray-800 mb-8">View your orders from here</p>
                <>
                    <OrderTable/>
                </>
            </div>
        </DashboardLayout>
    )
}

export default Orders
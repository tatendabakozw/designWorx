import React from 'react'

function ServiceItem({image, companyname}) {
    return (
        <div>
            <div className="row2-p grid md:grid-cols-2 grid-cols-1 gap-2 mb-8">
                <div className="col-span-1">
                    <img src={image} alt="coop" />
                </div>
                <div className="col-span-1 mx-auto flex items-center">
                    <p className="md:text-4xl text-xl font-semibold text-white text-center">{companyname}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceItem

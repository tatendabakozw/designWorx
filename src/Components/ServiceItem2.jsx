import React from 'react'

function ServiceItem2({image, companyname}) {
    return (
        <div>
            <div className="row2-p grid md:grid-cols-2 gric-cols-1 gap-2">
                <div className="col-span-1 mx-auto flex items-center">
                    <p className="md:text-4xl text-xl font-semibold text-white text-center">{companyname}</p>
                </div>
                <div className="col-span-1">
                    <img src={image} alt="divers" />
                </div>

            </div>
        </div>
    )
}

export default ServiceItem2

import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute({component: Component, ...rest}) {
    const user = localStorage.getItem('designworxadmin')
    return (
        <Route {...rest} render={(props) => (
            user === "me@gmail.com" ? (<Component {...props} />)
              : (<Redirect to='/login' />)
        )} />
    )
}

export default PrivateRoute

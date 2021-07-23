import React from 'react'
import {useParams} from 'react-router-dom'
function AccountPage() {
    let {launcherid} = useParams()
    console.log(launcherid)
    return (
        <div>
         {launcherid}
        </div>
    )
}

export default AccountPage

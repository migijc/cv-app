import React, {Component} from 'react'

export default class GenInfo extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="generalInfoSection">
                <label htmlFor="userName">Full Name</label>
                <input id="userName"></input>
                <label html="userEmail">Email</label>
                <input id="userEmail"></input>
                <label htmlFor="userPhoneNum">Phone Number</label>
                <input id="userPhoneNum"></input>
            </div>
        )
    }
    
}
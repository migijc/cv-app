import React, {Component} from 'react'


export default class GenInfo extends React.Component{
    constructor(props){
        super(props)

        this.state={
            name:"",
            email:"",
            phoneNumber:"",
        }
    }

    render(){
        return(
            <div className="generalInfoSection">
                <label htmlFor="userName">Full Name</label>
                <input onChange={this.props.change} id="userName"></input>
                <label html="userEmail">Email</label>
                <input onChange={this.props.change} id="userEmail"></input>
                <label htmlFor="userPhoneNum">Phone Number</label>
                <input onChange={this.props.change} id="userPhoneNum"></input>
            </div>
        )
    }
    
}
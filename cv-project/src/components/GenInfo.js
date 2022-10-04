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


    handleChange=(e)=>{
        if(e.target.id==="userName"){
            this.setState({name : e.target.value})
        } else if(e.target.id === "userEmail"){
            this.setState({email : e.target.value})
        }else if(e.target.id === "userPhoneNum"){
            this.setState({phoneNumber: e.target.value})
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
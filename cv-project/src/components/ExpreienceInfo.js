import React, {Component} from "react"
 export default class ExperienceInfo extends React.Component{
    constructor(props){
        super(props)

        this.state={
            jobTitle:"",
            company:"",
            startDate:"",
        }
    }

    render(){
        return(
            <div className="experienceInfoSection">
                <label htmlFor="relevantJobTitle">Relevant Job Title</label>
                <input onChange={this.props.change} id="relevantJobTitle"></input>
                <label htmlFor="relevantJobCompany">Company</label>
                <input onChange={this.props.change} id="relevantJobCompany"></input>
                <label htmlFor="relevantJobStartDate">Start Date</label>
                <input onChange={this.props.change} type="date" id="relevantJobStartDate"></input>
            </div>
        )
    }
}
import React, {Component} from "react"

 export default class ExperienceInfo extends React.Component{
    constructor(){
        super()
    }

    
    render(){
        return(
            <div className="experienceInfoSection">
                <label htmlFor="relevantJobTitle">Relevant Job Title</label>
                <input id="relevantJobTitle"></input>
                <label html="relevantJobCompany">Company</label>
                <input id="relevantJobCompany"></input>
                <label htmlFor="relevantJobStartDate">Start Date</label>
                <input type="date" id="relevantJobStartDate"></input>
            </div>
        )
    }
}
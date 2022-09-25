import React, {Component} from "react"

export default class EducationInfo extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="educationHistory">
                <label htmlFor="schoolAttended">College Attended</label>
                <input id="schoolAttended"></input>
                <label html="major">Field of Study</label>
                <input id="major"></input>
                <label htmlFor="graduationDate">date Graduated</label>
                <input type="date" id="graduationDate"></input>
            </div>
        )
    }
    
}
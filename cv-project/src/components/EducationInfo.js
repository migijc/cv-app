import React, {Component} from "react"

export default class EducationInfo extends React.Component{
    constructor(props){
        super(props)

        this.state={
            school:"",
            major:"",
            gradDate:"",
        }
    }

    render(){
        return(
            <div className="educationHistory">
                <label htmlFor="schoolAttended">College Attended</label>
                <input onChange={this.props.change} id="schoolAttended"></input>
                <label html="major">Field of Study</label>
                <input onChange={this.props.change} id="major"></input>
                <label htmlFor="graduationDate">Date Graduated</label>
                <input onChange={this.props.change} type="date" id="graduationDate"></input>
            </div>
        )
    }
    
}
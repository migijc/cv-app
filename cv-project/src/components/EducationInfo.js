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

    handleChange=(e)=>{
        if(e.target.id==="major"){
            this.setState({major : e.target.value})
        } else if(e.target.id === "schoolAttended"){
            this.setState({school : e.target.value})
        }else if(e.target.id === "graduationDate"){
            this.setState({gradDate: e.target.value})
        }
    }

    render(){
        return(
            <div className="educationHistory">
                <label htmlFor="schoolAttended">College Attended</label>
                <input onChange={this.handleChange} id="schoolAttended"></input>
                <label html="major">Field of Study</label>
                <input onChange={this.handleChange} id="major"></input>
                <label htmlFor="graduationDate">date Graduated</label>
                <input onChange={this.handleChange} type="date" id="graduationDate"></input>
            </div>
        )
    }
    
}
import React, {Component} from "react"
import ExperienceInfo from "./ExpreienceInfo"
import GenInfo from "./GenInfo"
import EducationInfo from "./EducationInfo"
import CvDisplay from "./CvDisplay"

export default class WholeForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            CvInfoDisplayed: false,
            showForm:"flex",

        }

    }

    onChange=(e)=>{
        let inputValue = e.target.value
        this.setState({[e.target.id] : inputValue})
    }

    onSubmit=(e)=>{
        e.preventDefault()
        e.target.style.display="showForm"
        this.setState({showForm:"none"})
        return this.setState({CvInfoDisplayed: true})
    }

    onEditClick=()=>{
        this.setState({showForm:"flex"})
        this.setState({CvInfoDisplayed:false})
    }

  
    
    render(){
        return(
            <>
           <form className="form" display={"true"} style={{display: this.state.showForm}}>
                <GenInfo change={this.onChange}/>
                <ExperienceInfo change={this.onChange}/>
                <EducationInfo change={this.onChange}/>
                <button onClick={this.onSubmit}className="submitButton">Create CV</button>
            </form>

            {this.state.CvInfoDisplayed && (<CvDisplay userInfo={this.state} handleEditClick={this.onEditClick}/>)}

         
            </>
        )
    }
}


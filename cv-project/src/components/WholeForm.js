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

        }

    }

    onChange=(e)=>{
        let inputValue = e.target.value
        this.setState({[e.target.id] : inputValue})
    }

    onSubmit=(e)=>{
        e.preventDefault()
        e.target.style.visibility="hidden"
        return this.setState({CvInfoDisplayed: true})
    }

    changeCVInfoDisplayed=()=>{
        this.setState({CvInfoDisplayed: false})
    }
    
    
    render(){
        return(
            <>
           {this.state.CvInfoDisplayed === false && (<form className="form">
                <GenInfo change={this.onChange}/>
                <ExperienceInfo change={this.onChange}/>
                <EducationInfo change={this.onChange}/>
                <button onClick={this.onSubmit}className="submitButton">Create CV</button>
            </form>)}

            {this.state.CvInfoDisplayed && (<CvDisplay userInfo={this.state} changeDisplayInfo={this.changeCVInfoDisplayed}/>)}

         
            </>
        )
    }
}


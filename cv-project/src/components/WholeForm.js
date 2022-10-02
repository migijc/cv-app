import React, {Component} from "react"
import ExperienceInfo from "./ExpreienceInfo"
import GenInfo from "./GenInfo"
import EducationInfo from "./EducationInfo"

export default class WholeForm extends React.Component{
    render(){
        return(
            <>
            <GenInfo/>
            <ExperienceInfo/>
            <EducationInfo/>
            <button className="submitButton">Submit CV</button>
            </>
        )
    }
}


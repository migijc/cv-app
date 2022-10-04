import React, {Component} from "react"

export default class CvDisplay extends React.Component{
    constructor(props){
        super(props)

    }

    
    
    render(){
        
        return(
            <div className="displayDivWrapper">
                <div className="cvDisplay">
                    <div className="userInfo">
                        <p className="userName">{this.props.userInfo.userName}</p>
                        <p>{this.props.userInfo.userEmail}</p>
                        <p>{this.props.userInfo.userPhoneNum}</p>
                        
                    </div>
                    <hr/>
                    <hr/>
                    <div className="workInfo">
                        <h3 className="experienceTitle">Experience</h3>
                        <p className="userFormerCompany">{this.props.userInfo.relevantJobCompany}</p>
                        <p className="userFormerJobTitle">{this.props.userInfo.relevantJobTitle}</p>
                        <p className="resumeDate">{this.props.userInfo.relevantJobStartDate}</p>
                    </div>

                   <div className="gradInfo">
                        <h3 className="educationTitle">Education</h3>
                        <p>{this.props.userInfo.schoolAttended}</p>
                        <p className="userMajor">{this.props.userInfo.major}</p>
                        <p className="resumeDate">{this.props.userInfo.graduationDate}</p>
                   </div>
                  
                </div>

                <button onClick={this.props.changeDisplayInfo} className="editButton">Edit Resume</button>
 
            </div>
        )
    }
}
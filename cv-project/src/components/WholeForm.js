import React, {useState} from "react"
import ExperienceInfo from "./ExpreienceInfo"
import GenInfo from "./GenInfo"
import EducationInfo from "./EducationInfo"
import CvDisplay from "./CvDisplay"

export default function WholeForm(props){

    const [cvInfoDisplayed, setCvInfoDisplayed] = useState(false)
    const [showForm, setShowForm] = useState("flex")
    const [userInfo, setUserInfo] = useState({})

     function onChange(e){
        let inputValue = e.target.value
        let inputID=e.target.id
        let allUserInfo=userInfo
        allUserInfo[`${inputID}`]=inputValue
        setUserInfo(allUserInfo)
    }

     function onSubmit(e){
        e.preventDefault()
        e.target.style.display=cvInfoDisplayed === false ? true : false
        setCvInfoDisplayed(true)
        setShowForm("none")
        return
    }

    function onEditClick(){
        setShowForm("flex")
        setCvInfoDisplayed(false)

    }

  

    return(
        <>
       <form className="form" display={"true"} style={{display: showForm}}>
            <GenInfo change={onChange}/>
            <ExperienceInfo change={onChange}/>
            <EducationInfo change={onChange}/>
            <button onClick={onSubmit}className="submitButton">Create CV</button>
        </form>

        {cvInfoDisplayed && (<CvDisplay userInfo={userInfo} handleEditClick={onEditClick}/>)}

     
        </>
    )
    
}


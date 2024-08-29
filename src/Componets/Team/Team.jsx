import React, { useState } from 'react'
import "./Team.css"


const Team = () => {
    const [team,setTeam] = useState([])
    const [name,setName] = React.useState("")
    const [skill,setSkill] = React.useState("")
    const [photo,setPhoto] = React.useState("")
    const handleNameChange = (e) =>{
      setName(e.target.value)
        
    }

    const handleSkillChange = (e) =>{
        setSkill(e.target.value)
    }

    const handlePhotoChange = (e) =>{
        setPhoto(e.target.value)
    }
    const handleAddTeam = () =>{
        setTeam((prevState)=>{
           if( name == "" || skill == "" || photo == ""){
            alert("Pleas fill all the fields")
           }else{
            return [...prevState,{name,skill,photo}]
           }

        })
    }
  return <>
   <div className="team">
       <div className="teams">
       <h1>TeamMate</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
       <form className='forms' action="#">
        
                <input onChange={handleNameChange} type="text" placeholder=' Name'/>
                <input onChange={handleSkillChange} type="text" placeholder="Skill"/>
                <input onChange={handlePhotoChange}  type="text" placeholder='"Photo'/>
                <button onClick={handleAddTeam}>Add</button>
            </form>
       </div>

       <div className="tems">
         
        {
            team.length > 0 ? (
                team.map((team) => {
                    const {name,skill,photo} = team
                    return (
                        <div className="card">
                            <img src={photo} alt="" />
                            <h1>{name}</h1>
                            <p>{skill}</p>
                        </div>
                    )
                })
            ) : (
                <p>No team members to display</p>
            )
        }
       

         

       </div>

    </div>
  </>
   
        }


export default Team
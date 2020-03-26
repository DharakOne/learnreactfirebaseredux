import React from 'react'
import ProjectSunmary from './ProjectSunmary' 
import {connect} from 'react-redux'


function ProjectList({projects}) {
    return (
        <div className="project-list section">
           {projects && projects.map(project =>{
               return <ProjectSunmary project={project} key={project.id}/>
           })}
        </div>
    )
}

function mapStateToProps(state){
    return{
        projects:state.project.projects
    }
}

export default connect(mapStateToProps)(ProjectList)
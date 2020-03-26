import React, { useState } from 'react'
import {createProject} from '../../store/actions/projectActions'
import { connect } from 'react-redux'

 function CreateProject({createProject}) {
    const [state, setState] = useState({ title:'', content:'' })

    function handleChange(e){
        setState({...state,[e.target.id]:e.target.value})
    }
    function handleSubmit(e) {
        e.preventDefault()
        createProject(state)
        setState({title:'',content:''})
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-dark">Create Project</h5>
                <div className="input-field">
                    <input type="text" id='title'value={state.title}  onChange={handleChange} />
                    <label htmlFor="projectTitle">Project Title</label>
                </div>
                <div className="input-field">
                <textarea id='content' className='materialize-textarea' onChange={handleChange} value={state.content} ></textarea>
                <label htmlFor="projectContent">Project Content</label>
               
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0" >Login</button>
                </div>
            </form>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        createProject:(project)=>dispatch(createProject(project))
    }
}

export default connect(null,mapDispatchToProps)(CreateProject)
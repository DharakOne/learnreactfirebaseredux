import React from 'react'


export default function ProjectSunmary({project}) {
    return (
        <div className="card z-depth-0 project-sumary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title} </span>
                <p>{project.content}</p>
                <p className="grey-text">3rd September, 2 am</p>
            </div>
        </div>
    )
}
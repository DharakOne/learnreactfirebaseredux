export function createProject(project){
    return function(dispatch,getState){
        dispatch({type:"CREATE_PROJECT",project})
    }
}
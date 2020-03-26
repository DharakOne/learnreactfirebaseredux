const initialState = {
    projects: [
        { id: 1, title: 'help me find peach', content: 'bla bla bla' },
        { id: 2, title: 'collet all the stars', content: 'bla bla bla' },
        { id: 3, title: 'egg hunt with  yoshi', content: 'bla bla bla' }
    ]
}

export default function projectReducer(state = initialState, action) {
    switch (action.type) {
        case 'CREATE_PROJECT':
        console.log('Project created')
        console.log(action.project)
            return state

        default:
            return state
    }
}
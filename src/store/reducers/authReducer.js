const initialState = {}

export default function authReducer (state = initialState, action) {
    switch (action.type) {
        case 'REQUEST_USER':
        console.log('GET_USER')
            return state

        default:
            return state
    }

}
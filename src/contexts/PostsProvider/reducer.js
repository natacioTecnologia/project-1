import * as types from './types'

export const reducer = (state, action) => {
    switch(action.type){
        case types.POST_SUCCES : {
            return {...state, posts: action.payload }
        }
        default:{
            return {...state}
        }
    }

}
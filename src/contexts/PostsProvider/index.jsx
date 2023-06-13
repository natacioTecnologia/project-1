import { useReducer } from 'react'
import {PostContext} from './context'
import { reducer } from './reducer'
import { data } from './data'
import P from 'prop-types'

export const PostsProvider = ({ children }) => {
    const [postsState, postsDispatch] = useReducer(reducer, data)

    return <PostContext.Provider value= {{ postsState, postsDispatch}}>
        {children}
    </PostContext.Provider>
}

PostsProvider.prototype = {
    children: P.node.isRequired,
}
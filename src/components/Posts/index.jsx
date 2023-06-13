import { useContext, useEffect } from "react";
import { PostContext } from "../../contexts/PostsProvider/context";
import { loadPosts } from '../../contexts/PostsProvider/actions';

export const Posts = () => {
    const postsContext = useContext(PostContext)

   const {postsState, postsDispatch} = postsContext

    console.log(postsState)

    useEffect(()=>{
        loadPosts(postsDispatch)
    },[postsDispatch])

    return(
        <div>
            <h1>Posts</h1>
            {postsState.posts.map((p) => (
                <p key={p.id}>{p.title}</p>
            ))}
        </div>
    );
}
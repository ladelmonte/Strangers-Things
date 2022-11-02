import React from "react";
import PostItem from "./PostItem";

const Posts = ({ posts }) => {
console.log("posts", posts)
    return (
         <div>
            <h1>Things for Sale</h1>
            {posts.map(( item ) => {
                return <PostItem key={item._id} posts={ item } />
            })}
        </div>
    );
};
    //     <div>
    //    {posts.map(( posts ) => {
    //      <PostItems key={posts._id} posts={posts} />

    //    })}
    //    </div>
//     )
// }

export default Posts;
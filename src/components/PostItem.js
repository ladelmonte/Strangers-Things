import React from 'react'
import Posts from "./Posts";

const PostItem = ({ posts }) => {
return (
       <div className="ui card">
            <div className="content">
                <h3 className='centered aligned header'>
                {posts.title}
                </h3>

                <div className='centered aligned description'>
                    <p>  {posts.description}</p>
                  
                </div>
            </div>
       </div>
)
};

export default PostItem;
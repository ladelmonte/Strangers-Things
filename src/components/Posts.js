import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { Link } from "react-router-dom";
import { deletePost } from "../api/api";

import './App.css';


 const Posts = ({ posts, setPost,  token }) => {
 console.log("posts", posts)


 const [searchTerm, setSearchTerm] = useState('');
 const [filteredPosts, setFilteredPosts] = useState(posts);

 useEffect(() => {
     if (searchTerm) {
         const searchTerms = searchTerm.toLowerCase().trim().split(' ');
         const filtered = posts.filter((postObject) => {

             const filterableValues = [
                 postObject.title,
                 postObject.description,
             ];

             for (let value of filterableValues) {
                 const valueLower = value.toLowerCase().trim();

                 for (let term of searchTerms) {
                     if (valueLower.length > 0 && term.length > 0 && valueLower.includes(term)) {
                         return true;
                     }
                 }
             }
             return false;
         });


         setFilteredPosts(filtered);
     } else {
         setFilteredPosts(posts);
     }
 }, [searchTerm, posts]);


     const handleDeleteClick =async (POST_ID) => {
         await deletePost(token, POST_ID);
         setPost((prevPosts) =>
         prevPosts.filter((posts) => posts._id !== POST_ID)
         );
     };

     return ( 
     <>
         <div className="ui icon input">
             <input type="text" placeholder="Search"
             value={searchTerm}
             onChange={(event) => setSearchTerm(event.target.value)} />
            <i className="search icon"></i>
         </div>
         <Link to="/posts/create" className="ui button">
             Create Post</Link>

        { <div className="posts-container">
            {filteredPosts.map((item) => {
                return ( 
                <PostItem key={item._id} posts={item}
                headerElement={item.isAuthor ? <div className="right floated aligned tiny header">Mine</div> : null} 
                >

            {item.isAuthor ? (
                <button
                onClick={() => handleDeleteClick(item._id)}
                className="negative ui button left floated"
                >
                delete
                </button>
            ) : null}
            </PostItem>
            );
         })}
   </div> }
     </>
     );
 };
     
export default Posts;

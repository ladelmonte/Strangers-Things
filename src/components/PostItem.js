import React from "react";
import {Link} from "react-router-dom";


const PostItem = ({ posts, headerElement, children }) => {
  
    return (
      <div className="ui card">
        <div className="content">
          <div className="left floated aligned header">{posts.title}</div>
          {headerElement}
          <div className="centered aligned description">
            <p>{posts.description}</p>
            <p>{posts.price}</p>
            <div className="extra content">
              <div className=" center aligned header">
                <Link to={`posts/${posts._id}`}>View Listing</Link>
              </div>
            </div>
          </div>
          {children}
          <div
            role="list"
            className="ui divided relaxed list"
            style={{ color: "#444", clear: 'both' }}
          >
            {posts.messages.map((message) => {
              return (
                <div key={message._id} role="listitem" className="item">
                  <b>{message.user.username}</b>
                  <p className="content">{message.content}</p>
                </div>
              );
            })}
          </div>random
        </div>
      </div>
    );
  };
  
  export default PostItem;


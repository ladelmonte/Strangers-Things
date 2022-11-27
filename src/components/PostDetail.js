
import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {addMessage} from '../api/api';
import PostItem from './PostItem';

const PostDetail = (props) => {
    const { token, posts, getPosts } = props;
    const { POST_ID } = useParams();
    const [messageText, setMessageText] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const singlePost = posts.find((onePost) => {
        const foundPost = onePost._id == POST_ID;
        return foundPost;
    });

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const { success, error, message } = await addMessage(token, POST_ID, messageText);

        if (success) {
            // only clear input if api call worked
            setMessageText('');
            
            console.log('we successfully added a comment!');

            // refresh all vacations to get new comment
            await getPosts();
        } else {
            setErrorMessage(error);
            console.log('failed to add a comment');
        }
    };

    if (!singlePost) {
        return <p>Loading...</p>;
    }

    return (<>
        <PostItem posts={singlePost} />
        <form className="comment-form" onSubmit={handleOnSubmit}>
            <input type="text" placeholder="New Message"
                value={messageText}
                onChange={(event) => setMessageText(event.target.value)}/>
            <button type="submit">Send</button>
            {errorMessage ? 
                <p style={{color: 'red', backgroundColor: 'pink'}}>Operation Failed: {errorMessage}</p>
                : null}
        </form>
    </>);
};

export default PostDetail;
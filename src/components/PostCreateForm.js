
import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { createPost } from "../api/api";




const PostCreateForm = ({token, setPost}) => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    return <form className="ui form" onSubmit={async (event) => {
        event.preventDefault();

        const {error, posts} = await createPost(token, title, description, price);

        if (posts) {
            posts.isAuthor = true;
            setPost((prevPosts) => [...prevPosts, posts]);
            setTitle('');
            setDescription('');
            setPrice('');
            history.push('/posts');
        } else {
            setErrorMessage(error);
        }
    }}>
        <h2>Create Post</h2>

        <div className="field">
    <label htmlFor="title">What do you want to sell?</label>
    <input name='title' type="text" placeholder="What do you want to sell?" required autoComplete="off"
    value={title}
    onChange={(event) => setTitle(event.target.value)}></input>
</div>

<div className="field">
    <label htmlFor="description">Description</label>
    <input name='description' type="text" placeholder="a description of item for sale" required autoComplete="off"
    value={description}
    onChange={(event) => setDescription(event.target.value)}></input>
</div>

<div className="field">
    <label htmlFor="price">Price</label>
    <input name='price' type="text" placeholder="Price"  autoComplete="off"
    value={price}
    onChange={(event) => setPrice(event.target.value)}></input>
</div>


{errorMessage ?
<p className="ui negative message">{errorMessage}</p>
: null}

<button type="submit" className="ui button">Create</button>
</form>
};

export default PostCreateForm;
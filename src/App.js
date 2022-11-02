import React, {useEffect, useState} from "react";
import {Home, Posts, AccountForm} from "./components"
import {Route, Switch, Link, useHistory} from "react-router-dom"
import { fetchPosts, fetchUser } from "./api/api";
import "./App";

const App = () => {
    const [posts, setPosts] = useState([]);

    const [token, setToken] = useState(window.localStorage.getItem("token") || ""
     );

    const [user, setUser] = useState(null);
 
     const history = useHistory();

    useEffect (() => {
        const getPosts = async() => {

            const {error, posts} = await  fetchPosts();


            if (error) {
                console.error(error);
            }

                if(typeof result ==='string'){

                }

            setPosts(posts);
        };
        getPosts();
    }, [])

    useEffect(() => {
        if (token) {
            const getUser = async () => {
                const {user} = await fetchUser(token);
                console.log("username", user);
                setUser(user);
            };
            getUser();
        };

}, [token]);

    useEffect (() => {
        window.localStorage.setItem("token", token);
    }, [token]);

    const logOut= () => {

        setToken("")
        setUser(null)
        history.push("/")

    }


    return (
    <div className="container">
        {token ? (
            <button onClick={logOut} className="item">Log Out</button>
        ): (
            <>
        <Link className="item" to="/account/login"> Log In </Link> 
        <Link className="item" to="/account/register"> Sign Up </Link>
        
        </>
        )}
    
     
        <nav className="secondarymenu">
            <Link to="/">Home</Link>
            <Link to="/Posts"> Posts</Link>
        
            
        </nav>
        <Switch>
            <Route exact path="/">
                <Home user={user}/>
            </Route>
            <Route path="/posts">
                <Posts posts={posts}/>
            </Route>
            <Route className="item" path="/account/:action">
                <AccountForm setToken={setToken}/>
            </Route>
        </Switch>
    </div>
    );
};

export default App;
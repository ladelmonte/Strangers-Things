import React from "react";

const Home = ({user}) => { return (
    <>
<h1>Stranger's Things</h1>; 
{user && <h3>Welcome {user.username}</h3>}
</>
);
};


export default Home;
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
            <h1>Welcome to the Home Page</h1>
            <Link to="/user/login">로그인</Link>
        </>
    )
}

export default Home;
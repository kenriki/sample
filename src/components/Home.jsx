import React from "react";
import { Link } from "react-router-dom";

const Home = () => homeData();

function homeData() {
    return (
    <div className="home">
    <Link to="/products">Link to Products</Link>
    <Link to="/about"> Link to About</Link>
    </ div >
    );
}

export default Home;
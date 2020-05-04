import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <p>This Is First Page</p>
                <Link to="/second">Go to Second</Link>
            </div>
        )
    }
}

export default Home;

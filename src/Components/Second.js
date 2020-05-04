import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Second extends Component {
    render() {
        return (
            <div>
                <p>This Is Second Page</p>
                <Link to="/home">Go to First page</Link>
            </div>
        )
    }
}

export default Second;

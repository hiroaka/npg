import React, {Component} from 'react';
import PassForm from "../PassForm";

class Landing extends Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <div className="container">
                    <PassForm/>
                </div>
            </div>
        );
    }
}

export default Landing;
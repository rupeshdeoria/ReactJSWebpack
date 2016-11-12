import React from "react";
import ReactDOM from 'react-dom';

import Layout from "./components/Layout";

const app = document.getElementById('app');
ReactDOM.render(<Layout/>,app);

/*class Layout extends React.Component{
    constructor(){
        super();
        this.name = "rupesh";
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1>Hello {this.name}</h1>
                    </div>
                </div>
            </div>
        )
    }
};
render(<Layout/>, window.document.getElementById('app'));*/

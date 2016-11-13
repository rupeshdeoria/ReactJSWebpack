import  React from "react"
import Header from "./Header";
import Footer from "./Footer";
export default class Layout extends  React.Component{
    constructor(){
      super();
      this.state = {title:"rupesh"};
    }
    changeTitle(title){
        this.setState({title});
    }
    render() {
        return (
            <div>
                <Header title={this.state.title} changeTitle={this.changeTitle.bind(this)}/>
                <Footer/>
            </div>
        )
    }
}

/*import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}*/

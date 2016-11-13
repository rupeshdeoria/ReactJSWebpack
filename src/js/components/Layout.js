import  React from "react"
import Header from "./Header";
import Footer from "./Footer";
export default class Layout extends  React.Component{
    constructor(){
      super();
      this.state = {title:"rupesh"};
    }
    render() {
        setTimeout(
            ()=>{this.setState({title:"teststate"})},
            2000)
        const title = "test properties"
        return (
            <div>
                <Header title={this.state.title}/>
                <Header title={"sypplypros"}/>
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

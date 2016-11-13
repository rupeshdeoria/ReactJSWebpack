import  React from "react"
import Header from "./Header";
import Footer from "./Footer";
export default class Layout extends  React.Component{
    /*constructor(){
      super();
      this.state = {name:"rupesh"};
    }*/
    render() {
        /*setTimeout(
            ()=>{this.setState({name:"teststate"})},
            9000)*/
        const title = "test properties"
        return (
            <div>
                <Header title={title}/>
                <Header title1={"sypplypros"}/>
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

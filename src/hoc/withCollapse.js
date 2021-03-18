//https://eduweb.pl/programowanie-i-www/reactjs/react-techniki-zaawansowane/render-props-w-praktyce
import React from "react";

return class Collapse extends React.Component {
  state = {
    isCollapsed: false
  };

  toggle = () => {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed
    }));
  };

render(){
  return this.props.render()
}

};

export default Collapse;

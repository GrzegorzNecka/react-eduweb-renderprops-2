//https://eduweb.pl/programowanie-i-www/reactjs/react-techniki-zaawansowane/render-props-w-praktyce
import React from 'react';

class Collapse extends React.Component {
  state = {
    isCollapsed: false
  };

  toggle = () => {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed
    }));
  };

  render() {
    const renderProps = {
      isCollapsed: this.state.isCollapsed,
      toggle: this.toggle
    };

    const styleObj = {
      background: 'red'
    };

    return <div style={styleObj}>
        {this.props.render(renderProps)}
    </div>;
  }
}

export default Collapse;

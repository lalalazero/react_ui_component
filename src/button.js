import React from "react";

import "./button.css";

export default class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
      deltaX: 0,
      deltaY: 0
    };
    this.myRef = React.createRef();
  }
  btnClick(event) {
    let { x, y } = this.myRef.current.getBoundingClientRect();
    let { clientX, clientY } = event;
    let deltaX = clientX - x;
    let deltaY = clientY - y;
    console.log(deltaX, deltaY);
    this.setState({
      active: true,
      deltaX: deltaX,
      deltaY: deltaY
    });
  }
  animationEnd() {
    // console.log('animation end..')
    this.setState({
      active: false
    });
  }
  render() {
    return (
      <button
        ref={this.myRef}
        className="my-button"
        onClick={this.btnClick.bind(this)}
      >
        涟漪按钮
        {this.state.active === true ? (
          <span
            onAnimationEnd={this.animationEnd.bind(this)}
            className="circle"
            style={{ left: this.state.deltaX, top: this.state.deltaY }}
          />
        ) : (
          ""
        )}
      </button>
    );
  }
}

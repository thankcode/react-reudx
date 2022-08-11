import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  increment,
  decrement,
  asyncIncrement,
} from '../../redux/actions/count';
class CountUI extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.count}-{this.props.len}
        </h1>
        <select ref={(_) => (this.selectDOM = _)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.asyncDecrement}>async +</button>
      </div>
    );
  }
  increment = () => {
    const { value } = this.selectDOM;
    this.props.increment(Number(value));
  };
  decrement = () => {
    const { value } = this.selectDOM;
    this.props.decrement(Number(value));
  };
  asyncDecrement = () => {
    const { value } = this.selectDOM;
    this.props.asyncIncrement(Number(value), 1000);
  };
}

export default connect(
  (state) => ({
    count: state.count,
    len: state.list.length,
  }),
  {
    increment,
    decrement,
    asyncIncrement,
  }
)(CountUI);

// export default connect(
//   (state) => ({
//     count: state,
//   }),
//   (dispatch) => ({
//     increment: (value) => {
//       dispatch(increment(value));
//     },
//     decrement: (value) => {
//       dispatch(decrement(value));
//     },
//     asyncIncrement: (value, timeout) => {
//       dispatch(asyncIncrement(value, timeout));
//     },
//   })
// )(CountUI);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addList } from '../../redux/actions/list';
class listUI extends Component {
  render() {
    return (
      <div>
        {this.props.count}
        <input type="text" ref={(_) => (this.nameInput = _)} />
        <input type="text" ref={(_) => (this.ageInput = _)} />
        <button onClick={this.submit}>提交</button>
        {this.props.list.map(({ id, name, age }) => {
          return (
            <h5 key={id}>
              {name}-{age}
            </h5>
          );
        })}
      </div>
    );
  }
  submit = () => {
    const name = this.nameInput.value;
    const age = this.ageInput.value;
    this.props.addList({
      id: Math.random() * 1000,
      name,
      age,
    });
  };
}
export default connect(
  (state) => ({
    list: state.list,
    count: state.count,
  }),
  {
    addList,
  }
)(listUI);

import React from 'react';

class Square extends React.Component {
  render() {
    return (
      <div className={this.props.color+' w-16 h-16 border-4 border-indigo-light rounded-full'} onClick={this.props.onClick}>
        
      </div>
    );
  }
}

export default Square;

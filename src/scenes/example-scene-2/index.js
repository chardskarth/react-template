import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

// import style from './styles.scss';

class ExampleScene2 extends Component{
  render(){
    return (
      <div>
        <h1>This is ExampleScene2</h1>
        <Link to="/">Go Home</Link>
      </div>
    );
  }
}

export default ExampleScene2;

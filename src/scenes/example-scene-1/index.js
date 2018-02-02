import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import style from './styles.scss';

class ExampleScene1 extends Component{
  render(){
    return (
      <div className={style.mainBody}>
        <h1>This is ExampleScene1</h1>
        <Link to="/scene2">Go to Scene 2</Link>
      </div>
    );
  }
}

export default ExampleScene1;

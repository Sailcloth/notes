import React, {Component} from 'react';

import Feed from '../Feed/Feed.jsx'

import Input from '../Input/Input.jsx'

console.log(Input)

class WrapperComponent extends Component {
  render(){
    return(
      <div className="Holder">
        <Feed></Feed>
        <Input></Input>
      </div>
    )
  }
}

export default WrapperComponent 

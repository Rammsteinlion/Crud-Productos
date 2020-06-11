import React, { Component } from 'react';
import Header from './components/header';
import {FormProduct,ListProduct} from './components/Products';


class App extends Component{
  render(){
    return(
      <div className="container">
      <Header title="Products App" />
    </div>
    );
  }
 
}


export default App;

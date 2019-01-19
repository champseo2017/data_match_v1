import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
class App extends React.Component {
  render(){
    return (
      <div>
        <Header/>
        <p>Hello</p>
        <Footer/>
      </div>
    );
  }
}



export default App;

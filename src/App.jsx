import React from 'react';
import './App.css';
import Board from '../src/Components/Board'

class App extends React.Component 
{
  render(){
    return(
      <div className='App'>
        <Board />
      </div>

    )
  };
}

export default App;

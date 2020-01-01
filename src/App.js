import React, { Component } from 'react';
import Board from './components/Board/Board'
//import logo from './logo.svg';
import './App.css';

class Game extends Component {
  render() {
    return (
      <div>
        <h1 className="flex justify-center mt-8 mb-8">Connect Four</h1>
        <div className="flex justify-center my-2">
          <Board />
        </div>
        <footer class="flex justify-center flex-col lg:flex-row w-full py-10">
          <a href="https://kylehumphrey.com" target="_blank" rel="noopener noreferrer" className="text-black no-underline px-4">
            Made by Kyle Humphrey
          </a>
          <a href="https://github.com/InsearchofPandas/connect-four" target="_blank" rel="noopener noreferrer" className="text-black no-underline px-4">
            View Code on GitHub
          </a>
        </footer>
      </div>
    );
  }
}

export default Game;

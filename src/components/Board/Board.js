import React from 'react';
import Square from '../Square/Square'
import { calculateWinner } from '../../calculateWinner.js';
import _ from 'lodash';
import '../../App.css';


class Board extends React.Component {s
  constructor(props) {
    super(props)
    let squares = this.boardMaker()
    let player = 'bg-purple-lighter'
    this.state = {
      squares: squares,
      player: player
    }
  }

reset() {
  let squares = this.boardMaker()
  let player = 'bg-purple-lighter'
  this.setState({
    squares: squares,
    player: player
  })
}

boardMaker() {
  let i = 0
  let row = 0
  let col = 0
  let squares = []
  let square = {}
  for ( i = 0; i < 42; i++ ) {
     square = {i:i, row:row, col:col, color: 'bg-teal'}
     squares.push(square)
     col++
     if (col > 6) {
       col = 0
       row++
     }
  }
  return squares
}

  handleClick(i) {
    const winner = calculateWinner(this.state.squares)
    if (winner) {
      return
    }
    let squaresWork = this.state.squares
    let newColumn = squaresWork[i].col
    let columnTemp = _.filter(squaresWork, ['col', newColumn])
    columnTemp = _.filter(columnTemp, ['color', "bg-teal"])
    columnTemp = _.findLast(columnTemp)
    if (!columnTemp) {
      return
    }
    let colorUpdate = this.state.player
    colorUpdate = (colorUpdate === 'bg-purple-lighter') ? 'bg-pink-lighter' : 'bg-purple-lighter'
    columnTemp.color = colorUpdate
    this.setState({
      squares: squaresWork,
      player: colorUpdate
    })
  }

  renderSquare(i, c) {
    return <Square value={i} color={c} onClick={() => this.handleClick(i)} />
  }

  render() {

      const winner = calculateWinner(this.state.squares)
      let status
      let colorUpdate = this.state.player;
      if (winner) {
        status = (colorUpdate === 'bg-pink-lighter') ? 'PLAYER 1 WINNER' : 'PLAYER 2 WINNER'
      }
      else {
        colorUpdate = (colorUpdate === 'bg-purple-lighter') ? 'bg-pink-lighter' : 'bg-purple-lighter'
        status = (colorUpdate === 'bg-pink-lighter') ? 'PLAYER 1 GO' : 'PLAYER 2 GO'
      }

    return (
      <div>
      <div className={colorUpdate+ " flex justify-center pt-2"}>
        <h2>{ status }</h2>
      </div>
      <div className="bg-indigo-light p-3">
          <div className="flex">
            {this.renderSquare(0, this.state.squares[0].color)}{this.renderSquare(1, this.state.squares[1].color)}
            {this.renderSquare(2, this.state.squares[2].color)}{this.renderSquare(3, this.state.squares[3].color)}
            {this.renderSquare(4, this.state.squares[4].color)}{this.renderSquare(5, this.state.squares[5].color)}
            {this.renderSquare(6, this.state.squares[6].color)}
          </div>
          <div className="flex">
            {this.renderSquare(7, this.state.squares[7].color)}{this.renderSquare(8, this.state.squares[8].color)}
            {this.renderSquare(9, this.state.squares[9].color)}{this.renderSquare(10, this.state.squares[10].color)}
            {this.renderSquare(11, this.state.squares[11].color)}{this.renderSquare(12, this.state.squares[12].color)}
            {this.renderSquare(13, this.state.squares[13].color)}
          </div>
          <div className="flex">
            {this.renderSquare(14, this.state.squares[14].color)}{this.renderSquare(15, this.state.squares[15].color)}
            {this.renderSquare(16, this.state.squares[16].color)}{this.renderSquare(17, this.state.squares[17].color)}
            {this.renderSquare(18, this.state.squares[18].color)}{this.renderSquare(19, this.state.squares[19].color)}
            {this.renderSquare(20, this.state.squares[20].color)}
          </div>
          <div className="flex">
            {this.renderSquare(21, this.state.squares[21].color)}{this.renderSquare(22, this.state.squares[22].color)}
            {this.renderSquare(23, this.state.squares[23].color)}{this.renderSquare(24, this.state.squares[24].color)}
            {this.renderSquare(25, this.state.squares[25].color)}{this.renderSquare(26, this.state.squares[26].color)}
            {this.renderSquare(27, this.state.squares[27].color)}
            </div>
          <div className="flex">
            {this.renderSquare(28, this.state.squares[28].color)}{this.renderSquare(29, this.state.squares[29].color)}
            {this.renderSquare(30, this.state.squares[30].color)}{this.renderSquare(31, this.state.squares[31].color)}
            {this.renderSquare(32, this.state.squares[32].color)}{this.renderSquare(33, this.state.squares[33].color)}
            {this.renderSquare(34, this.state.squares[34].color)}
            </div>
          <div className="flex">
            {this.renderSquare(35, this.state.squares[35].color)}{this.renderSquare(36, this.state.squares[36].color)}
            {this.renderSquare(37, this.state.squares[37].color)}{this.renderSquare(38, this.state.squares[38].color)}
            {this.renderSquare(39, this.state.squares[39].color)}{this.renderSquare(40, this.state.squares[40].color)}
            {this.renderSquare(41, this.state.squares[41].color)}
          </div>
      </div>
       <button type="button" onClick={() => this.reset()} className=" flex justify-center bg-red text-white p-1 shadow-inner">New Game</button>
      </div>
    );
  }

}

export default Board;

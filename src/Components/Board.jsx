import React from 'react';
import Cell from '../Components/Cell'
import '../Components/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Container,Col,Row} from 'react-bootstrap';

class Board extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            cells: Array(9).fill(null),
            check : Array(9).fill(false),
            xisNext : true,
            finish : false,
        };
        this.baseState=this.state;
    }

    handleRestart(e){
        this.setState(this.baseState);
    }

    checkwinner(i,squares){
        if(this.state.finish)
            return true;
        const lines=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
        for (let i = 0; i < lines.length; i++) 
        {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a];
            }
        }
        return false;
    }

    handleClick(i)
    {
        if(this.state.finish)
            return;
        const newarray=this.state.cells.slice();
        const check=this.state.check.slice();
        if(check[i]===true)
        {
            window.alert('It is already filled');
            return;
        }
        check[i]=true;
        newarray[i]= this.state.xisNext ? 'X' : '0';
        this.setState({
            cells: newarray,
            check : check,
            xisNext : !this.state.xisNext,
            finish : this.checkwinner(i,newarray),
        });
    }

    rendercell(i) 
    {
        return <Cell value={this.state.cells[i]} onClick={() => this.handleClick(i) } />;
    }

    render(){
        var status;
        if(this.state.finish)
            status = 'We found a winner ' + (this.state.xisNext? 'O' : 'X');
        else
            status = 'This is ' + (this.state.xisNext? 'X' : 'O') + '\'s turn';
        return(
            <Container>
                <Row>
                    <h1 className='heading'>Welcome to the Game World!!!</h1>
                </Row>
                <Row style={{padding:"0px"}}>
                    <Col sm="6" className='section'>
                        <div className='row_container'>
                            <div className='col_container'> {this.rendercell(0)} </div>
                            <div className='col_container'> {this.rendercell(1)} </div>
                            <div className='col_container'> {this.rendercell(2)} </div>
                        </div>
                        <div className='row_container'>
                            <div className='col_container'> {this.rendercell(3)} </div>
                            <div className='col_container'> {this.rendercell(4)} </div>
                            <div className='col_container'> {this.rendercell(5)} </div>
                        </div>
                        <div className='row_container'>
                            <div className='col_container'> {this.rendercell(6)} </div>
                            <div className='col_container'> {this.rendercell(7)} </div>
                            <div className='col_container'> {this.rendercell(8)} </div>
                        </div>                
                    </Col>
                    <Col lg className='section'>
                        <h1 className='game_data'>Tic-Tac-Toe Game</h1>
                        <h2 className='game_data'>{status}</h2>                
                        <button onClick={this.handleRestart.bind(this)}>Restart</button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Board;
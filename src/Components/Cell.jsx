import React from 'react';
import '../Components/styles.css'

class Cell extends React.Component{
    render(){
        return(
            <>
                <h1 className='cell_style' onClick={this.props.onClick}> {this.props.value} </h1>
            </>
        );
    }
}

export default Cell;
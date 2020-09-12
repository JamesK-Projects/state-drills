import React, { Component } from 'react';

class RouletteGun extends Component {
    static defaultProps = {
        bulletInChamber: 8
    };
    
    state = {
        chamber: null,
        spinningTheChamber: false
    };
    
    componentWillUnmount(){
        clearTimeout(this.timeout)
    }

    handleButtonClick = () => {  
        this.setState({
            spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)
            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false,
            })
        }, 2000)
    }

    gunResults(){
        if(this.state.spinningTheChamber){
            return "Spinning the chamber and pulling the trigger....."
        }
        if(this.props.bulletInChamber === this.state.chamber){
            return "BANG!!!"
        }
        else{
            return "You're safe!"
        }
        
    }

    
    render() { 
        return ( 
            <div>
                <p>{this.gunResults()}</p>
                <button onClick={this.handleButtonClick}>Pull the trigger!</button>
            </div>
        );
    }
}
 
export default RouletteGun;
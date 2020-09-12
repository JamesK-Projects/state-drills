import React from 'react';

class HelloWorld extends React.Component {
    constructor(props){
        super(props)
        this.state = {who: 'world'}
    }

    handleButtonClickWorld = () => {
        console.log(this.state)
        this.setState({who: 'world'})
    }
    handleButtonClickFriend = () => {
        console.log(this.state)
        this.setState({who: 'friend'})
    }
    handleButtonClickReact = () => {
        console.log(this.state)
        this.setState({who: 'React'})
    }
    
    render() { 
        return ( 
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick = {this.handleButtonClickWorld} id="World">World</button>
                <button onClick = {this.handleButtonClickFriend} id="Friend">Friend</button>
                <button onClick = {this.handleButtonClickReact} id="React">React</button>
            </div>
             );
    }
}
 
export default HelloWorld;
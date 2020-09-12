import React from 'react';



class Bomb extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            count: 0
        }
    }
    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1

            })
        }, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    bombOutput(){
        if(this.state.count >=8){
            return 'BOOM!!!'
        }
        if(this.state.count % 2 === 0){
            return 'tick'
        }
        if(this.state.count % 2 !== 0){
            return 'tock'
        }
    }
    render() { 
        return ( 
            <div>
                <p>{this.bombOutput()}</p>
            </div>
             );
    }
}
 
export default Bomb;
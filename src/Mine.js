import React from 'react'
import Child from './Child';

class Mine extends React.Component {
    constructor(){
        super()
        this.state = {texts: []}
        this.changeColor = this.changeColor.bind(this)
    }

    componentDidMount(){
        this.setState({texts: ['Learn ReacJs', 'Really Fun', 'Hehehe'], color: 'green'})
    }
    changeColor(){
        if (this.state.color === 'green') {
            this.setState({color: 'blue'})
        } else {
            this.setState({color: 'green'})
        }
    }
    render() {
        let texts = this.state.texts.map(function(text) {
            return (
                <Child text = {text} />
            )
        })

        let style = {color: this.state.color}
        return(
            <div style={style} onClick={this.changeColor}>
                <div id="mine">
                    Hello World Js
                </div>

                <div>
                    React is cool
                </div>

                {texts}
            </div>
        );
    }
}

export default Mine;
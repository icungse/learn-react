import React from 'react'
import Child from './Child';

class Mine extends React.Component {
    constructor(){
        super()
        this.state = {texts: ['Learning ReactJs', 'Funny', 'Cool']}
    }
    render() {
        let texts = this.state.texts.map(function(text) {
            return (
                <Child text = {text} />
            )
        })
        return(
            <div>
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
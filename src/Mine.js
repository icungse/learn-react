import React from 'react'
import Child from './Child';

class Mine extends React.Component {
    render() {
        return(
            <div>
                <div id="mine">
                    Hello World Js
                </div>

                <div>
                    React is cool
                </div>

                <Child />
                <br/>
                <Child />
                <br/>
                <Child />
            </div>
        );
    }
}

export default Mine;
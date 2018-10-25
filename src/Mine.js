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

                <Child text="Learn"/>
                <br/>
                <Child text="React Js"/>
                <br/>
                <Child text="Cool"/>
            </div>
        );
    }
}

export default Mine;
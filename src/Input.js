import React from 'react'


class Input extends React.Component {
    constructor(props){
        super(props);
        this.state={
            a:0,
            b:0
        }
        this.aValueChangedHandler=this.aValueChangedHandler.bind(this)
        this.bValueChangedHandler=this.bValueChangedHandler.bind(this)
    }

    aValueChangedHandler(event){
        console.log("Value changed a:"+event.target.value)
        this.setState({a:event.target.value});
    }
    bValueChangedHandler(event){
        console.log("Value changed b:"+event.target.value)
        this.setState({b:event.target.value});
    }


    render(){
        const content=(
            <div>
                <label>Number a: </label>
                <input type="number" onChange={this.aValueChangedHandler} />
                <br/>
                <br/>
                <label>Number b: </label>
                <input type="number" onChange={this.bValueChangedHandler} />
            </div>
        )
    
        return content
    
    }
}

export default Input
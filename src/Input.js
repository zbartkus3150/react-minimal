import React from 'react'


class Input extends React.Component {
    constructor(props){
        super(props);
        this.state={
            a:0,
            b:0,
            arr:[]
        }
        this.aValueChangedHandler=this.aValueChangedHandler.bind(this)
        this.bValueChangedHandler=this.bValueChangedHandler.bind(this)
        this.generateArray=this.generateArray.bind(this)
    }

    aValueChangedHandler(event){
        console.log("Value changed a:"+event.target.value)
        this.setState({a:event.target.value});
        this.generateArray(event.target.value, this.state.b)
    }
    bValueChangedHandler(event){
        console.log("Value changed b:"+event.target.value)
        this.setState({b:event.target.value});
        this.generateArray(this.state.a, event.target.value)
    }


    generateArray(a, b){
        a=parseInt(a)
        b=parseInt(b)
        this.state.arr=[]
        if(a < b && a > 0){
            var i
            for(i = 0; i < b - a - 1; i++)
                this.state.arr[i] = a + i + 1;
        }
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
                <ul>
                    {this.state.arr.map(item => (<li key={item}>{item}</li>))}
                </ul>
            </div>
        )
    
        return content
    
    }
}

export default Input
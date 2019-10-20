import React from 'react'


class Input extends React.Component {
    constructor(props){
        super(props);
        this.state={
            a:0,
            b:0,
            arr:[],
            sqrtArray:[],
            flag:false
        }
        this.counter=1
        this.aValueChangedHandler=this.aValueChangedHandler.bind(this)
        this.bValueChangedHandler=this.bValueChangedHandler.bind(this)
        this.generateArray=this.generateArray.bind(this)
        this.processArray=this.processArray.bind(this)
        this.changeFlag=this.changeFlag.bind(this)
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
        if(this.state.flag){
            this.processArray();
        }
        else{
            this.state.sqrtArray=[]
        }
    }

    processArray(){
        this.state.sqrtArray=Array.from(this.state.arr, element => Math.sqrt(element))
    }

    changeFlag(){
        if(!this.state.flag){
            this.setState({flag:true});
        }
        else{
            this.setState({flag:false});
        }
        this.processArray();
    }


    render(){
        console.time("render - "+this.counter.toString())
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
                <button onClick={this.changeFlag}>Process array</button>
                <ul>
                    {this.state.sqrtArray.map(item => (<li key={item}>{item}</li>))}
                </ul>
            </div>
        )
        console.timeEnd("render - "+this.counter.toString())
        this.counter++;
        return content
    
    }
}

export default Input
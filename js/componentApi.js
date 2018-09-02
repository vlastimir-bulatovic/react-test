// set state
class SetState extends React.Component{
    constructor(){
        super();

        this.state= { // creating state becose set state only update state
            data : ["bannana "]
        }

        this.setStateHandler = this.setStateHandler.bind(this);
    };

    setStateHandler() {// updating state
        var item = "set state banana, ";
        var myArray= this.state.data.slice();
        myArray.push(item);
        this.setState({
            data: myArray
        })
    };

    render(){
        return(// seting on click update event
            <div>
                <button onClick = {this.setStateHandler}>Set state</button>
                <p>Array : {this.state.data}</p>
            </div>
        )
    }
}

// forse update 

class App extends React.Component{
    constructor(){
        super();

        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    };
    
    forceUpdateHandler(){
        var i = "samo test";
    
        this.forceUpdate();
    }
    render(){
        return(
            <div>
                <button onClick = {this.forceUpdateHandler}>Update</button>
                <p>Number : {Math.random()*10}</p>
            </div>
        )
    }
}

//find dom node 

class FindDomNode extends React.Component{
    constructor(){
        super();

        this.findDomNode = this.findDomNode.bind(this);
    }
    
    findDomNode(){
        var div = document.getElementById("divId");
        ReactDOM.findDOMNode(div).style.color = "blue";
    }

    render(){
        return(
            <div>
                <button onClick ={this.findDomNode}>Click me</button>
                <div id="divId">I feel so blue</div>
            </div>
        );
    }
}
class LogedUser extends React.Component{
    render(){
        return <h1>{this.props.text}</h1>
    }
}

function Text (props){

    const isLoged = props.isLogedIn;

    if (isLoged) {
        return <LogedUser text="Welcome" />
    }
    return <LogedUser text="Please log in" />
}

class Btnlog extends React.Component{
    render(){
        return(
            <button onClick={this.props.loged}>
                {this.props.text}
            </button>
        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props);

        this.state={logedIn : false};

        this.handlerLogedIn = this.handlerLogedIn.bind(this);
        this.handlerLogedOut = this.handlerLogedOut.bind(this);
    }

    handlerLogedIn(){
        this.setState(state => ({logedIn : true}));
    }

    handlerLogedOut (){
        this.setState(state => ({logedIn : false}))
    }

    render(){
        
        const isLog = this.state.logedIn;
        let button;

        
        if(isLog){
            button = <Btnlog loged={this.handlerLogedOut} text='log out'/>;
        }else{
            button = <Btnlog loged={this.handlerLogedIn} text='log in'/> ;
        }

        return(
            <div>
                <Text isLogedIn={this.state.logedIn} />
                {button}
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('example')
);
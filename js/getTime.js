class GetDate extends React.Component{ //get local time 
    render(){
        return(
            <p>Time : {new Date().toLocaleTimeString()}.</p>
        );
    }
}

class Item extends React.Component{ // simple component
    render(){
        return(
            <li>{this.props.name}</li>
        );
    }
}

class Listitem extends React.Component{ //component that invoke component
    render(){
        return(
            <ul>
                <Item name="Instagram"/>
                <Item name="Povrce"/>
                <Item name="Babi lek" />      
            </ul>
        );
    }
}

class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                < Listitem/>
            </div>
        );
    }
}

function newTime(){
    ReactDOM.render(
        <GetDate/>,
        document.getElementById('time')
    );
}

setInterval(newTime,1000);

ReactDOM.render(
    <ShoppingList name="Vlastimir"/>,
    document.getElementById('one')
);
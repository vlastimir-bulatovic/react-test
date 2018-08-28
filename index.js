class Listitem extends React.Component{
    render(){
        return(
            <ul>
                <li>Instagram</li>
                <li>WhatsApp</li>
                <li>Oculus</li>
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
ReactDOM.render(
    <ShoppingList name="Mark"/>,
    document.getElementById('root')
);
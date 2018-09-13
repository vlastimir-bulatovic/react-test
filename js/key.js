function ListItem (props){

    const numbers = props.numbers;
    const listItem = numbers.map((number,index) => <li key={index}>{number * 3}</li>);

    return(
        <ul>{listItem}</ul>
    );

}

class App extends React.Component{
    constructor(props){
        super(props)

        this.state= {
            list : [1,2,3,4,5]
        };
    }

    render(){
        return(
            <ListItem numbers={this.state.list} />
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('example')
);
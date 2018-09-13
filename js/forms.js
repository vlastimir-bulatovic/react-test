class FormTest extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value : ''
        };

        this.preventFormSubmit = this.preventFormSubmit.bind(this);
        this.colectUserInput = this.colectUserInput.bind(this);
    }

    preventFormSubmit(event) {
        event.preventDefault(); 
        alert('User input: ' + this.state.value);
    }

    colectUserInput(event){
        this.setState({value: event.target.value});
    }

    render(){
        
        return(
            <form onSubmit={this.preventFormSubmit}>
                <select value={this.state.value} onChange={this.colectUserInput}>
                    <option value="grape"> grape</option>
                    <option value="limun"> limun</option> 
                    <option value="mango"> mango</option>
                    <option value="banana"> banana</option>   
                </select>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

ReactDOM.render(
    <FormTest />,
    document.getElementById('example')
);
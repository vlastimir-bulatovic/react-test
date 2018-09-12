class Link extends React.Component{
    render(){
        return(
            <a href="#" onClick={this.props.prevent}>
                Prevet default
            </a>
        );
    }
}

class Button extends React.Component{
    render(){
        return(
            <button onClick={this.props.action}>
                {this.props.name}
            </button>
        );
    }
}

class Text extends React.Component{
    render(){
        return(
            <p id="text">
                Text
            </p>
        );
    }
}


class Toggle extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isOn : true
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(state => ({
            isOn: !state.isOn
        }));
    }

    render(){
        return(
            <button onClick={this.toggle}>
                {this.state.isOn ? 'On' : 'Off'}    
            </button>
        );
    }
}
class Comment extends React.Component{

    logBtn = () => {
        console.log(this);
    }

    edit(){
        document.getElementById('text').innerHTML = 'promenjeno';
    }

    remove(){
        document.getElementById('text').innerHTML = '';
    }
    
    clickLink(e){
        e.preventDefault();
        alert('Event for link prevented');
    }
    
    render(){
        return(
            <div >
                <Button action={this.edit} name='edit' />
                <Button action={this.logBtn} name='Log '/>
                <Text />
                <Link prevent={this.clickLink} />
                <Toggle />
            </div>
        )
    }
}

ReactDOM.render(
    <Comment/>,
    document.getElementById('example')
);
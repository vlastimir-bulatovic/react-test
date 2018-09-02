/*
    State adn props combinations
*/

class FirstStateComponent extends React.Component{
    constructor(state){
        super(state);

        this.state = {
            logo : "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fcodeplanet.io%2Fwp-content%2Fuploads%2F2016%2F10%2Freact.png&f=1",
            header : "Header",
            content : "Here is some text that I should write about React JS"     
        }
    }
    render(){
        return(
            <div>
                <Logo source={this.state.logo} />
                <Header header={this.props.header} />
                <Content content={this.state.content} />
            </div>
        )
    }
}
FirstStateComponent.defaultProps = {
    header: "Header default props",
    content: "Content default props"
}
class Logo extends React.Component{
    render(){
        return( 
            <div title="React Logo">
                <img  src={this.props.source} alt="React Logo" />
            </div>
        );
    }
}
class Header extends React.Component{
    render(){
        return <h1>{this.props.header}</h1>;
    }
}

class Content extends React.Component{
    render(){
        return <p>{this.props.content}</p>;
    }
}
ReactDOM.render(
    <FirstStateComponent />,
    document.getElementById("one")
)
const App = React.createClass({
  render(){
    return (
      <div>
        <ListContainer />
      </div>
    );
  }
});

// Container
const ListContainer = React.createClass( {
  getInitialState() {
    return {
      names: ['hamlet', 'katie', 'charlie', 'ken', 'alex']
    }
  },
  render() {
    return <List names={this.state.names} />;
  }
})

// Component
const List = React.createClass({
  renderNames(name){
    return <li>{name}</li>
  },
  render(){
    return <ul>{this.props.names.map(this.renderNames)}</ul>
  }
});

ReactDOM.render(<App />, document.getElementById('container'));
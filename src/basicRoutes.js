import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

const Outer = (props) => <div><h1>Home</h1><Links />{props.children}</div>;
const About = (props) => <div><h1>About</h1>/div>;
const Contact = () => <div><h1>Contact</h1></div>;


const Links = () => 
	<nav>
		<Link to='/'>Home</Link><br/>
		<Link to='/about'>About</Link><br/>
		<Link to='/about/contact'>Contact</Link>
	</nav> 


//Basic Route Setup
class App extends React.Component {
	render() {
		return (
			<Router history={ hashHistory }>
				<Route path="/" component={Outer}></Route>
				<Route path="/about" component={About}></Route>
				<Route path="/contact" component={Contact}></Route>
			</Router>
		);
	}
}

export default App;

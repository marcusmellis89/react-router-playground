import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

const Home = () => <h1>Home</h1>
const HomeBody = () => <div>This is HomeBody <h1>hello</h1></div>;
const Other = () => <h1>Other Part</h1>;
const OtherBody = () => <div>This is the other body</div>

const Container = (props) => <div>{props.header}{props.body}<Links/></div>

const Links = () =>
	<nav>
		<Link to='/'>Root</Link><br/>
		<Link to='/other'>Other</Link><br/>
	</nav>


//Basic Route Setup
class App extends React.Component {
	render(){
		return (
			<Router history={ hashHistory }>
				<Route path="/" component={Container}>
					<IndexRoute components={{header: Home, body:HomeBody}}></IndexRoute>
					<Route path="other" components={{header: Other, body:OtherBody}}></Route>
				</Route>
			</Router>
		);
	}
}

export default App;

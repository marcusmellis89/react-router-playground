import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';



const Message = (props) => <div><h1>{props.params.message || 'hello'}</h1><Links/></div>

const Links = () => 
	<nav>
		<Link to='/'>Root</Link><br/>
		<Link to='/howdythere'>Howdy</Link><br/>
		<Link to='/delivery'>Delivery</Link>			
	</nav>

//Basic Route Setup
class App extends React.Component {
	render(){
		return (
			<Router history={ hashHistory }>
				<Route path="/(:message)" component={Message}></Route>
			</Router>
		);
	}
}

export default App;

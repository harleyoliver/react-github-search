import React from 'react';
import Search from './Search';
import User from './User';
import Results from './Results';

class Main extends React.Component {
	constructor() {
		super();
		this.state = {
			repos: [],
			user: [],
		}
	}

	componentWillMount() {
		const params = this.props.match.params || {};
		const searchUser = params.searchUser || undefined;

		this.loadUser(searchUser);
		this.loadRepos(searchUser);
	}

	componentWillReceiveProps(nextProps) {
		this.loadUser(nextProps.match.params.searchUser);
		this.loadRepos(nextProps.match.params.searchUser);
	}

	loadUser = (searchUser = 'harleyoliver') => {
		fetch(`https://api.github.com/users/${searchUser}`)
			.then(data => data.json())
			.then(user => {
				console.log(user);
				this.setState({
					user: user,
				});
			})
	}

	loadRepos = (searchUser = 'harleyoliver') => {
		fetch(`https://api.github.com/users/${searchUser}/repos?type=all`)
			.then(data => data.json())
			.then(repos => {
				console.log(repos);
				this.setState({
					repos: repos,
				});
			})
	}

	render() {
		return (
			<div className="container">
				<Search />
				<User user={this.state.user}/>
				<Results repos={this.state.repos} />
			</div>
		)
	}
}

export default Main;

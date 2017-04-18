import React from 'react';

class User extends React.Component {
	render() {

		const { name, avatar_url, followers, following, public_repos } = this.props.user;

		return (
			<div className="user-profile">
				<h2>{name}</h2>
				<img src={avatar_url} alt={name} />
				<ul>
					<li>Followers: {followers}</li>
					<li>Following: {following}</li>
					<li>Repos: {public_repos}</li>
				</ul>
			</div>
		)
	}
}

export default User;

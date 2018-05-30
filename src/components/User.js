import React from 'react';

class User extends React.Component {
	render() {

		const { name, bio, avatar_url, followers, following, public_repos } = this.props.user;

		return (
			<div className="user-profile">
				<img src={avatar_url} alt={name} />
				<ul>
					<li>
						<h2>{name}</h2>
					</li>
					<li>
						<p>{bio}</p>
					</li>
					<li>
						<strong>Followers:</strong> {followers}
					</li>
					<li>
						<strong>Following:</strong> {following}
					</li>
					<li>
						<strong>Repos:</strong> {public_repos}
					</li>
				</ul>
			</div>
		)
	}
}

export default User;

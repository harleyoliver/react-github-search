import React from 'react';
import { Link } from 'react-router-dom';

class Repo extends React.Component {
	render() {
		// Destruture the prop into a variable
		const { name, description, stargazers_count } = this.props.details;

		return (
			<div className="repo">
				<h2>{name}</h2>
				<p>{description}</p>
				<strong>{stargazers_count}</strong>
			</div>
		)
	}
}

export default Repo;

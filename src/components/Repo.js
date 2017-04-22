import React from 'react';

class Repo extends React.Component {
	render() {
		// Destruture the prop into a variable
		const { name, description, stargazers_count } = this.props.details;

		return (
			<div className="repo">
				<h2>{name}</h2>
				<p>{description}</p>
			</div>
		)
	}
}

export default Repo;

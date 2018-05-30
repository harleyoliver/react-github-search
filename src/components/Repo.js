import React from 'react';

class Repo extends React.Component {
	render() {
		// Destruture the prop into a variable
		const { name, description, html_url, language } = this.props.details;

		return (
			<div className="repo">
				<span>{language}</span>
				<h2>
					<a href={html_url}>{name}</a>
				</h2>
				<p>{description}</p>
				<a href={html_url} className="btn">View Repo on GitHub</a>
			</div>
		)
	}
}

export default Repo;

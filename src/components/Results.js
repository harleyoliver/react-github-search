import React from 'react';
import Repo from './Repo';

class Results extends React.Component {

	static propTypes = {
		repos: React.PropTypes.array.isRequired
	}

	render() {
		return (
			<div className="results">
				{this.props.repos.map( repo => <Repo key={repo.id} details={repo} />)}
			</div>
		)
	}
}

export default Results;

import React from 'react';
import Repo from './Repo';
import PropTypes from 'prop-types';

class Results extends React.Component {

	static propTypes = {
		repos: PropTypes.array.isRequired
	}

	render() {
		return (
			<div className="results">
				{ this.props.repos.map( repo => <Repo key={repo.id} details={repo} />) }
			</div>
		)
	}
}

export default Results;

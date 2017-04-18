import React from 'react';

class Search extends React.Component {

	static contextTypes = {
		router: React.PropTypes.object
	}

	handleSubmit = (e) => {
		// Stop
		e.preventDefault();
		// Getthe value from the input
		const searchUser = this.q.value;
		// Change the URL to /search/searchUser
		this.context.router.history.push(`/search/${searchUser}`);
	}

	render() {
		return (
			<div className="search">
				<form onSubmit={this.handleSubmit} >
					<input type="text" ref={(q) => this.q = q} placeholder="Enter GitHub Username" />
					<input type="submit" value="Search"/>
				</form>
			</div>
		)
	}
}

export default Search;

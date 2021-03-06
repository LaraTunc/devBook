import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<section className="landing">
			<div className="landing-inner">
				<img className="landing-pic" src="../../.././icon.jpg" alt="computer" />
				<h1 className="x-large">DevBook</h1>
				<p className="lead">Meeting point for developers</p>
				<div className="buttons">
					<Link to="/register" className="btn btn-primary">
						Sign Up
					</Link>
					<Link to="/login" className="btn btn-light">
						Login
					</Link>
				</div>
			</div>
		</section>
	);
};

Landing.propTypes = {
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);

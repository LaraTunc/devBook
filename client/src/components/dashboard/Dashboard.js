import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';

const Dashboard = ({
	getCurrentProfile,
	auth: { user },
	profile: { profile, loading },
	deleteAccount,
}) => {
	useEffect(() => {
		getCurrentProfile();
	}, []);

	return loading && profile == null ? (
		<Spinner />
	) : (
		<>
			<h1 className="large text-primary">Dashboard</h1>
			<p className="lead">Welcome {user && user.name}</p>
			{profile !== null ? (
				<>
					<DashboardActions />
					<Experience experience={profile.experience} />
					<Education education={profile.education} />

					<div className="my-2">
						<button className="btn btn-danger" onClick={() => deleteAccount()}>
							Delete My Account
						</button>
					</div>
				</>
			) : (
				<>
					<p>You have not yet setup a profile. Please add some info.</p>
					<Link to="/create-profile" className="btn btn-primary my-1">
						Create Profile
					</Link>
				</>
			)}
		</>
	);
};

Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	deleteAccount: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
	Dashboard
);
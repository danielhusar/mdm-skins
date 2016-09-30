import React from 'react';
import Helmet from 'react-helmet';

function Profile() {
  return (
    <div className="index">
      <Helmet title="Profile" />
      <div>Profile</div>
    </div>
  );
}

Profile.propTypes = {};

export default Profile;

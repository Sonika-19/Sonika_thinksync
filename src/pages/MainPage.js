import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  const goToViewProfiles = () => {
    navigate('/view-profiles');
  };

  const goToViewProjects = () => {
    navigate('/view-projects');
  };

  const goToViewTeams = () => {
    navigate('/view-teams');
  };

  const viewYourProfile = () => {
    navigate('/profile');
  };

  return (
    <div>
      <h1>Welcome to the Main Page</h1>
      <button onClick={goToViewProfiles}>View Profiles</button>
      <button onClick={goToViewProjects}>View Projects</button>
      <button onClick={goToViewTeams}>View Teams</button>
      <button onClick={viewYourProfile}>Your Profile</button>
      {/* Add more buttons or links for other navigations as needed */}
    </div>
  );
};

export default MainPage;

import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileForm from './ProfileForm';
import ProfileAuthentication from './ProfileAuthentication';
import ProfileFooter from './ProfileFooter';

const ProfilePage: React.FC = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#f4f7f9', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }}>
      <ProfileHeader />
      <ProfileForm />
      <ProfileAuthentication />
      <ProfileFooter />
    </div>
  );
};

export default ProfilePage;

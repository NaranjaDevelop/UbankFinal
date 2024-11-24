import React from 'react';
import './ProfileForm.css';

const ProfileForm = () => {
  return (
    <form className="formContainer">
      <div className="formGroup">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" placeholder="" />
      </div>
      <div className="formGroup">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" placeholder="" />
      </div>
      <div className="formGroup">
        <label htmlFor="timeZone">Time Zone</label>
        <select id="timeZone">
          <option>+5 GMT</option>
        </select>
      </div>
      <div className="formGroup">
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" placeholder="" />
      </div>
      <div className="formGroup">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="" />
      </div>
    </form>
  );
};

export default ProfileForm;
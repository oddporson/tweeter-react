import React from 'react';

function Profile() {
  return(
    <aside>
      <div className="profile">
        <img className="profile__image" src="./profile-hex.png" alt="person"></img>
      </div>
      <br></br>
      <div className="profile__name">
        <h2><span className="profile--bold">Amy</span> Mansell</h2>
      </div>
  </aside>
  )
}

export default Profile;
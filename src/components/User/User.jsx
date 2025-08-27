import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../../redux/reducers/userSlice";
import "../User/User.css";

function User() {
  const token = useSelector((state) => state.user.token);
  const userData = useSelector((state) => state.user.profile);

  const [display, setDisplay] = useState(true);
  const [userName, setUserName] = useState(userData?.userName || "");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const isValidName = (name) => name.trim().length >= 3;

  const handleSubmitUsername = async (event) => {
    event.preventDefault();
    if (!isValidName(userName)) {
      setErrorMessage("Invalid userName");
      return;
    }
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userName }), 
      });

      if (response.ok) {
        const data = await response.json();
        const username = data.body.userName;
        dispatch(updateUsername(username));
        setDisplay(true);
      } else {
        console.log("Invalid Fields");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="header">
      {display ? (
        <div>
          <h2>
            Welcome back
            <br />
            {userData?.firstName} {userData?.lastName} !
          </h2>
          <button className="edit-button" onClick={() => setDisplay(false)}>
            Edit Name
          </button>
        </div>
      ) : (
        <div>
          <h2>Edit user info</h2>
          <form onSubmit={handleSubmitUsername}>
            <div className="edit-input">
              <label htmlFor="username">User name:</label>
              <input
                type="text"
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="edit-input">
              <label htmlFor="firstname">First name:</label>
              <input type="text" id="firstname" value={userData?.firstName} disabled />
            </div>
            <div className="edit-input">
              <label htmlFor="lastname">Last name:</label>
              <input type="text" id="lastname" value={userData?.lastName} disabled />
            </div>
            <div className="buttons">
              <button type="submit" className="edit-username-button">
                Save
              </button>
              <button
                type="button"
                className="edit-username-button"
                onClick={() => setDisplay(true)}
              >
                Cancel
              </button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      )}
    </div>
  );
}

export default User;

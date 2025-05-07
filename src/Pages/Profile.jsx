import React, { use, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { FaUserEdit } from "react-icons/fa";

const Profile = () => {
  const { user, updateUser } = use(AuthContext);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {};
    setError("");
    setSuccess("");

    if (name) obj.displayName = name;
    if (photoURL) obj.photoURL = photoURL;

    if (Object.keys(obj).length === 0) return;

    console.log(obj);

    updateUser(obj)
      .then(() => {
        // console.log(res);
        setName("");
        setPhotoURL("");
        setSuccess("Profile updated successfully!");
      })
      .then((err) => {
        setError(err);
        // console.log(error);
      });
  };
  return (
    <div className="min-h-[calc(100vh-115px)] mb-[70px]">
      <div className="max-w-md mx-auto p-6 shadow-md rounded-xl bg-base-100 mt-10 shadow-primary border-primary border">
        <div className="text-center mb-6">
          <img
            src={user?.photoURL}
            alt="User"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h2 className="text-2xl font-bold mt-4">
            {user?.displayName || "No Name"}
          </h2>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Update Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter new name"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Update Photo URL</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter photo URL"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full flex items-center gap-2">
            <FaUserEdit /> Update Profile
          </button>
          {success && <p className="text-success text-sm mt-2">{success}</p>}
          {error && <p className="text-error text-sm mt-2">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default Profile;

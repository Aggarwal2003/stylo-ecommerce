import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  // TEMP: replace later with Redux user state
  const user = {
    name: "Atharv Aggarwal",
    email: "atharv@email.com",
  };

  const [name, setName] = useState(user.name);

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("Profile updated (connect backend later)");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left: Profile Card */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-1">
            My Account
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Manage your profile and orders
          </p>

          <ul className="space-y-4 text-sm">
            <li>
              <Link to="/orders" className="text-gray-800 hover:underline">
                My Orders
              </Link>
            </li>
            <li>
              <Link to="/addresses" className="text-gray-800 hover:underline">
                Saved Addresses
              </Link>
            </li>
            <li>
              <Link to="/support" className="text-gray-800 hover:underline">
                Help & Support
              </Link>
            </li>
          </ul>

          <button
            onClick={handleLogout}
            className="mt-8 w-full border border-gray-300 text-gray-700 py-2 rounded-md text-sm hover:bg-gray-100"
          >
            Logout
          </button>
        </div>

        {/* Right: Profile Details */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Profile Details
          </h2>

          <form onSubmit={handleUpdate} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={user.email}
                disabled
                className="w-full border border-gray-200 rounded-md px-4 py-2 text-sm bg-gray-100 cursor-not-allowed"
              />
            </div>

            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-2 rounded-md text-sm hover:bg-gray-800"
            >
              Save Changes
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Profile;

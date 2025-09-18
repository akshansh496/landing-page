import React from "react";
import PersonIcon from '@mui/icons-material/Person';

export default function CoachSignup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl w-full max-w-2xl border border-slate-700 relative">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl">
            <PersonIcon style={{ fontSize: 32 }} />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-green-400 mb-2">
          Join as Coach
        </h2>
        <p className="text-center text-slate-400 mb-6">
          Create your coaching profile and help athletes with AI-powered insights
        </p>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-slate-300 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full h-11 px-3 rounded-lg bg-slate-800 text-white border border-slate-600 focus:border-green-500 focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-slate-300 mb-1">Username</label>
            <input
              type="text"
              placeholder="Choose a username"
              className="w-full h-11 px-3 rounded-lg bg-slate-800 text-white border border-slate-600 focus:border-green-500 focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-slate-300 mb-1">Gender</label>
            <select className="w-full h-11 px-3 rounded-lg bg-slate-800 text-white border border-slate-600 focus:border-green-500 focus:ring-2 focus:ring-green-500">
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Age */}
          <div>
            <label className="block text-slate-300 mb-1">Age</label>
            <input
              type="number"
              placeholder="Your age"
              className="w-full h-11 px-3 rounded-lg bg-slate-800 text-white border border-slate-600 focus:border-green-500 focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Primary Sport */}
          <div>
            <label className="block text-slate-300 mb-1">Primary Sport</label>
            <select className="w-full h-11 px-3 rounded-lg bg-slate-800 text-white border border-slate-600 focus:border-green-500 focus:ring-2 focus:ring-green-500">
              <option value="">Select your sport</option>
              <option>Football</option>
              <option>Basketball</option>
              <option>Cricket</option>
              <option>Tennis</option>
              <option>Other</option>
            </select>
          </div>

          {/* Experience Level */}
          <div>
            <label className="block text-slate-300 mb-1">Experience Level</label>
            <select className="w-full h-11 px-3 rounded-lg bg-slate-800 text-white border border-slate-600 focus:border-green-500 focus:ring-2 focus:ring-green-500">
              <option value="">Select experience</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>Expert</option>
            </select>
          </div>

          {/* Training Goals */}
          <div className="md:col-span-2">
            <label className="block text-slate-300 mb-1">Training Goals</label>
            <input
              type="text"
              placeholder="e.g., Build team strategy, Improve player skills"
              className="w-full h-11 px-3 rounded-lg bg-slate-800 text-white border border-slate-600 focus:border-green-500 focus:ring-2 focus:ring-green-500"
            />
          </div>
        </form>

        {/* Submit Button */}
        <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition">
          Create Coach Profile
        </button>
      </div>
    </div>
  );
}

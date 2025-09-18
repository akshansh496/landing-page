import React from "react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <div className="bg-gray-800/50 shadow-[0_8px_30px_rgba(34,197,94,0.4)] rounded-2xl p-8 w-full max-w-md ">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-rgba(34,197,94,0.4)-900 ">
          Sign in to your account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Choose your account type to continue
        </p>
        {/* Account Type Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold shadow-[0_4px_15px_rgba(59,130,246,0.4)] hover:bg-blue-700 transition">
            Player
          </button>
          <button className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold shadow-[0_4px_15px_rgba(34,197,94,0.5)] hover:bg-blue-700 transition">
            Coach
          </button>
        </div>
        <form className="space-y-5">
        
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-white mb-1"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-[0_2px_10px_rgba(34,197,94,0.2)] focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-[0_2px_10px_rgba(34,197,94,0.2)] focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

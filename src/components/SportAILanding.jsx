import React from "react";
import { Zap, BarChart3, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function SportAILanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-white text-xl font-bold">SportAI</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/login"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Sign In
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Welcome to the future of sports — powered by AI
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Revolutionize your athletic journey with AI-driven insights,
              personalized training programs, and seamless connections between
              players and coaches.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <Target className="w-5 h-5" />
                <Link
                to="/PlayerLogin"
                className="text-green-400 hover:text-green-300 text-white font-medium underline"
              >
                Join as Player
              </Link>
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <Target className="w-5 h-5" />
                <Link
                to="/coach-signup"
                className="text-green-400 hover:text-green-300 text-white font-medium underline"
              >
                Join as Coach
              </Link>
              </button>
            </div>

            {/* Sign In Link */}
            <div className="pt-4">
              <span className="text-gray-400">Already have an account? </span>
              <Link
                to="/login"
                className="text-green-400 hover:text-green-300 font-medium underline"
              >
                Sign in here
              </Link>
            </div>
          </div>

          {/* Right Column - Athletic Image with Overlays */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl overflow-hidden h-96 lg:h-[500px]">
              {/* Athlete Image Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/80 to-blue-500/80">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 lg:w-64 lg:h-64 bg-green-300/30 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white/20 rounded-full flex items-center justify-center">
                      <Target className="w-16 h-16 lg:w-20 lg:h-20 text-white/80" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Badge */}
              <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <BarChart3 className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-semibold">
                  +15% Performance
                </span>
              </div>

              {/* AI Analysis Badge */}
              <div className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <Zap className="w-4 h-4 text-green-400" />
                <span className="font-semibold">AI Analysis</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800/70 transition-all">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">
              AI-Powered Training
            </h3>
            <p className="text-gray-400">
              Personalized workouts based on your performance data
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800/70 transition-all">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">
              Performance Analytics
            </h3>
            <p className="text-gray-400">
              Track progress with advanced metrics and insights
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800/70 transition-all">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">
              Connect & Collaborate
            </h3>
            <p className="text-gray-400">
              Find the perfect coach or player match
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

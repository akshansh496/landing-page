import React from "react";
import { PlayCircle } from "lucide-react"; // play icon
import UploadVideoCard from "./UploadVideoCard";

const videos = [
  {
    id: 1,
    title: "Free Throw Practice Session",
    player: "Alex Thompson - Point Guard",
    date: "Jan 10, 2025",
    duration: "2:45",
    accuracy: "89%",
    score: "88%",
    thumbnail: "https://via.placeholder.com/400x220?text=Video+1",
  },
  {
    id: 2,
    title: "Dribbling Drill Compilation",
    player: "Alex Thompson - Point Guard",
    date: "Jan 8, 2025",
    duration: "4:20",
    accuracy: "85%",
    score: "85%",
    thumbnail: "https://via.placeholder.com/400x220?text=Video+2",
  },
  {
    id: 3,
    title: "Game Situation Scrimmage",
    player: "Alex Thompson - Point Guard",
    date: "Jan 5, 2025",
    duration: "8:15",
    accuracy: "94%",
    score: "94%",
    thumbnail: "https://via.placeholder.com/400x220?text=Video+3",
  },
];

export default function PlayerVideos() {
  return (
    <div className="text-white p-8">
      {/* Video Section */}
      <h2 className="text-xl font-semibold mb-4">Player Video Analysis</h2>
      <p className="text-gray-400 mb-6">
        Review your connected players' videos and AI analysis results
      </p>

      {/* Grid Wrapper with soft shadow */}
      <div className="rounded-2xl shadow-xl shadow-slate-900/40 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden"
            >
              {/* Thumbnail with play button */}
              <div className="relative">
                <img
                  src={video.thumbnail}
                  className="w-full h-48 object-cover"
                  
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white opacity-80 hover:opacity-100 transition" />
                </div>
                <span className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                  {video.accuracy} Accuracy
                </span>
                <span className="absolute top-2 right-2 bg-black bg-opacity-60 px-2 py-1 text-xs rounded">
                  {video.duration}
                </span>
              </div>

              {/* Details */}
              <div className="p-4">
                <h3 className="font-bold">{video.title}</h3>
                <p className="text-gray-400 text-sm">{video.player}</p>
                <p className="text-gray-400 text-sm mt-1">
                  {video.date} • AI Analyzed
                </p>
                <p className="mt-2">
                  Overall Score:{" "}
                  <span className="font-bold text-yellow-400">{video.score}</span>
                </p>

                {/* Button */}
                <button
                  className="
                    mt-3 w-full px-4 py-2 
                    bg-blue-600 text-white font-semibold rounded-lg shadow-md 
                    transition-all duration-200 ease-in-out
                    hover:bg-green-600 hover:translate-y-0.5
                  "
                >
                  View Analysis
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Card */}
      <div className="mt-8">
        <UploadVideoCard />
      </div>
    </div>
  );
}

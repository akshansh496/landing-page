import React, { useState } from "react";

export default function TrialsPage() {
  const [trials, setTrials] = useState([
    {
      id: 1,
      title: "Elite Basketball Assessment",
      sport: "Basketball",
      location: "City Sports Arena",
      date: "2025-09-20",
      startTime: "10:00",
      endTime: "12:00",
      skill: "Intermediate",
      maxParticipants: 20,
      currentParticipants: 12,
    },
    {
      id: 2,
      title: "Tennis Summer Tryouts",
      sport: "Tennis",
      location: "Greenfield Courts",
      date: "2025-09-22",
      startTime: "15:30",
      endTime: "17:00",
      skill: "Beginner",
      maxParticipants: 16,
      currentParticipants: 8,
    },
    {
      id: 1,
      title: "Elite Basketball Assessment",
      sport: "Basketball",
      location: "City Sports Arena",
      date: "2025-09-20",
      startTime: "10:00",
      endTime: "12:00",
      skill: "Intermediate",
      maxParticipants: 20,
      currentParticipants: 12,
    },
    {
      id: 2,
      title: "Tennis Summer Tryouts",
      sport: "Tennis",
      location: "Greenfield Courts",
      date: "2025-09-22",
      startTime: "15:30",
      endTime: "17:00",
      skill: "Beginner",
      maxParticipants: 16,
      currentParticipants: 8,
    },
    {
      id: 1,
      title: "Elite Basketball Assessment",
      sport: "Basketball",
      location: "City Sports Arena",
      date: "2025-09-20",
      startTime: "10:00",
      endTime: "12:00",
      skill: "Intermediate",
      maxParticipants: 20,
      currentParticipants: 12,
    },
    {
      id: 2,
      title: "Tennis Summer Tryouts",
      sport: "Tennis",
      location: "Greenfield Courts",
      date: "2025-09-22",
      startTime: "15:30",
      endTime: "17:00",
      skill: "Beginner",
      maxParticipants: 16,
      currentParticipants: 8,
    },
  ]);

  const handleRegister = (id) => {
    setTrials((prev) =>
      prev.map((trial) =>
        trial.id === id && trial.currentParticipants < trial.maxParticipants
          ? { ...trial, currentParticipants: trial.currentParticipants + 1 }
          : trial
      )
    );
  };

  return (
    <div className="min-h-screen  text-white p-8">
      {/* Page Title */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Available Trials & Tryouts</h2>
      </div>
      <p className="text-gray-400 mb-10">Browse and register for upcoming trials.</p>

      {trials.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {trials.map((trial) => {
            const spotsLeft = trial.maxParticipants - trial.currentParticipants;
            const isFull = spotsLeft === 0;

            return (
              <div
                key={trial.id}
                className="bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-700 hover:border-green-500 transition"
              >
                <h4 className="text-xl font-semibold mb-2">{trial.title}</h4>
                <div className="flex gap-2 mb-3">
                  <span className="bg-blue-600 text-xs px-2 py-1 rounded-full">
                    {trial.sport}
                  </span>
                  <span className="bg-purple-600 text-xs px-2 py-1 rounded-full">
                    {trial.skill}
                  </span>
                </div>

                <p className="text-gray-400 mb-1">
                  📍 <span className="font-medium text-white">Location:</span>{" "}
                  {trial.location}
                </p>
                <p className="text-gray-400 mb-1">
                  📅 <span className="font-medium text-white">Date:</span>{" "}
                  {trial.date} — {trial.startTime} to {trial.endTime}
                </p>
                <p className="text-gray-400 mb-4">
                  👥 <span className="font-medium text-white">Space in team:</span>{" "}
                  {trial.currentParticipants}/{trial.maxParticipants}
                </p>

                {/* Spots Left / Full Badge */}
                <div className="flex justify-between items-center">
                  {isFull ? (
                    <span className="text-red-400 font-medium text-sm">
                      Trial Full
                    </span>
                  ) : (
                    <span className="text-green-400 font-medium text-sm">
                      {spotsLeft} spots left
                    </span>
                  )}

                  <button
                    onClick={() => handleRegister(trial.id)}
                    disabled={isFull}
                    className={`px-4 py-2 rounded-lg font-semibold transition ${
                      isFull
                        ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                        : "bg-emerald-500 hover:bg-emerald-600 text-white"
                    }`}
                  >
                    {isFull ? "Closed" : "Register"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-400">No trials available at the moment.</p>
      )}
    </div>
  );
}

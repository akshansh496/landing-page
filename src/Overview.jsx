import React from "react";
import { TrendingUp, Target, Activity, Flame, User } from "lucide-react";

// Sample data
const performanceData = [
  { id: 1, label: "Performance Score", value: "78%", icon: TrendingUp, tag: "This Week" },
  { id: 2, label: "Weekly Progress", value: "65%", icon: Target, tag: "Goal Progress" },
  { id: 3, label: "Training Sessions", value: "24", icon: Activity, tag: "Total" },
  { id: 4, label: "Day Streak", value: "7", icon: Flame, tag: "Streak" },
];

const coaches = [
  { id: 1, name: "Sarah Johnson", specialty: "Speed & Agility", rating: "4.9/5.0", exp: "8 years", match: "95%" },
  { id: 2, name: "Mike Rodriguez", specialty: "Strength Training", rating: "4.8/5.0", exp: "12 years", match: "89%" },
  { id: 3, name: "Emily Chen", specialty: "Mental Performance", rating: "4.9/5.0", exp: "6 years", match: "87%" },
];

export default function DashboardSections() {
  return (
    <div className="text-white p-8 space-y-12">
      {/* Performance Overview */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
          {performanceData.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800 rounded-xl p-6 transition"
              style={{ boxShadow: "0 2px 8px #00ff6680" }} // subtle green shadow
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "none")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "0 2px 8px #00ff6680")
              }
            >
              <div className="flex items-center justify-between mb-4">
                <item.icon className="w-8 h-8 text-green-400" />
                <span className="text-xs bg-blue-600 px-2 py-1 rounded">
                  {item.tag}
                </span>
              </div>
              <p className="text-2xl font-bold">{item.value}</p>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Coach Recommendations */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Coach Recommendations</h2>
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {coaches.map((coach) => (
            <div
              key={coach.id}
              className="bg-slate-800 rounded-xl p-6 transition"
              style={{ boxShadow: "0 2px 8px #00ff6680" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "none")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "0 2px 8px #00ff6680")
              }
            >
              <div className="flex items-center mb-4">
                <User className="w-10 h-10 text-gray-400 mr-3" />
                <div>
                  <h3 className="font-bold">{coach.name}</h3>
                  <p className="text-gray-400 text-sm">{coach.specialty}</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">Rating: {coach.rating}</p>
              <p className="text-sm text-gray-400">Experience: {coach.exp}</p>
              <p className="text-sm text-gray-400">Match: {coach.match}</p>

              <button
                className="mt-4 w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition hover:bg-green-600 hover:translate-y-0.5"
              >
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

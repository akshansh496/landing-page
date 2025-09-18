import { useState } from "react";
import { Search, Filter, Heart, ThumbsUp, MessageSquare, Bookmark } from "lucide-react";

export default function CoachesFeed() {
  const [posts] = useState([
    {
      id: 1,
      author: "Coach Sarah Johnson",
      location: "Los Angeles, CA",
      date: "20/1/2025",
      type: "photo",
      sport: "Basketball",
      content:
        "Morning training session at our new facility! The energy from these young athletes is incredible. Remember, consistency beats perfection every time. Keep pushing your limits! 🏀💪",
      image:
        "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=1200&q=80",
      tags: ["Training", "Motivation", "Facility"],
      likes: 124,
      comments: 18,
      shares: 12,
    },
    {
      id: 2,
      author: "Coach Michael Torres",
      location: "Miami, FL",
      date: "19/1/2025",
      type: "tip",
      sport: "Basketball",
      content:
        "When working on free throws, focus on building a consistent routine. Repetition creates confidence under pressure. 🏀🔥",
      image: null,
      tags: ["Tips", "Shooting", "Routine"],
      likes: 87,
      comments: 10,
      shares: 7,
    },
    {
      id: 1,
      author: "Coach Sarah Johnson",
      location: "Los Angeles, CA",
      date: "20/1/2025",
      type: "photo",
      sport: "Basketball",
      content:
        "Morning training session at our new facility! The energy from these young athletes is incredible. Remember, consistency beats perfection every time. Keep pushing your limits! 🏀💪",
      image:
        "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=1200&q=80",
      tags: ["Training", "Motivation", "Facility"],
      likes: 124,
      comments: 18,
      shares: 12,
    },
    {
      id: 2,
      author: "Coach Michael Torres",
      location: "Miami, FL",
      date: "19/1/2025",
      type: "tip",
      sport: "Basketball",
      content:
        "When working on free throws, focus on building a consistent routine. Repetition creates confidence under pressure. 🏀🔥",
      image: null,
      tags: ["Tips", "Shooting", "Routine"],
      likes: 87,
      comments: 10,
      shares: 7,
    },
  ]);

  return (
    <div className="min-h-screen  text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Posts from Coaches Worldwide</h1>
      <p className="text-gray-300 mb-6">
        Discover training tips, photos, videos, and opportunities from coaches around the globe
      </p>

      
      {/* Posts */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-blue-800/40 text-white rounded-2xl shadow-lg p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <div>
                <h2 className="font-semibold">{post.author}</h2>
                <p className="text-xs text-gray-300">
                  {post.location} • {post.date}
                </p>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-lg font-medium ${
                  post.type === "photo" ? "bg-green-700" : "bg-yellow-600"
                }`}
              >
                {post.type}
              </span>
            </div>

            {/* Content */}
            <p className="mb-3 text-sm">{post.content}</p>

            {post.image && (
              <img
                src={post.image}
                alt="post"
                className="w-full h-48 object-cover rounded-xl mb-3"
              />
            )}

            {/* Tags */}
            <div className="flex gap-2 mb-3 flex-wrap">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-700/70 text-xs px-2 py-1 rounded-lg"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between text-sm text-gray-300">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1">
                  <Heart className="w-4 h-4" /> {post.likes}
                </button>
                <button className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" /> {post.comments}
                </button>
                <button className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" /> {post.shares}
                </button>
              </div>
              <button>
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
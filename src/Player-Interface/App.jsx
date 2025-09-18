import React, { useState } from "react";
import {
	TrendingUp,
	Users,
	Target,
	Star,
	Activity, 
	Clock,
	ChevronRight,
	Settings,
	LogOut,
	Search,
	Eye,
	MoreHorizontal,
} from "lucide-react";
import './App.css'
import PVideos from "./PlayerVideos";
import Overview from "./Overview";
import TrialsPage from "./Trials";
import Posts from "./Posts";


const SoccerCoachingDashboard = () => {
	const [activeTab, setActiveTab] = useState("overview");

	const tabs = [
		{ id: "overview", label: "Overview" },
		// { id: "leaderboard", label: "Leaderboard" },
		{ id: "videos", label: "My Posts" },
    { id: "analytics", label: "Posts" },
		{ id: "trials", label: "Trials" },
	];

	const renderContent = () => {
		switch (activeTab) {
			case "overview":
				return <Overview/>;
			case "leaderboard":
				return (
					<div className="p-8 text-gray-400">coming soon</div>
				);
			case "videos":
				return (
					<div className="p-8 text-gray-400"><PVideos/></div>
				);
			case "trials":
				return <div className="p-8 text-gray-400"><TrialsPage/></div>;
			case "analytics":
				return <div className="p-8 text-gray-400"><Posts/></div>;
			default:
				return <Overview />;
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
			{/* Header */}
			<div className="border-b border-gray-700/50 backdrop-blur-sm bg-slate-900/50">
				<div className="px-6 py-4 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
							<Users className="w-6 h-6 text-white" />
						</div>
						<div>
							<h1 className="text-xl font-bold text-white">
								Welcome back,dzdsd!
							</h1>
							<p className="text-gray-400 text-sm">soccer</p>
						</div>
					</div>
					<div className="flex items-center gap-4">
						
						<button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-gray-300">
							Logout
						</button>
					</div>
				</div>
			</div>

			{/* Navigation Tabs */}
			<div className="px-6 pt-4">
				<div className="flex gap-2">
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`px-6 py-3 rounded-t-lg font-medium transition-all ${
								activeTab === tab.id
									? "bg-slate-800/80 text-white border-t-2 border-blue-500"
									: "bg-slate-900/50 text-gray-400 hover:text-white hover:bg-slate-800/50"
							}`}
						>
							{tab.label}
						</button>
					))}
				</div>
			</div>

			{/* Content */}
			<div className="px-6 pb-6">
				<div className="bg-slate-900/50 backdrop-blur-sm rounded-b-lg rounded-tr-lg min-h-[calc(100vh-180px)]">
					{renderContent()}
				</div>
			</div>
		</div>
	);
};

const OverviewContent = () => {
	const players = [
		{
			name: "Alex Thompson",
			role: "Basketball • Point Guard",
			performance: 85,
			improvement: "+12%",
			lastSession: "2 days ago",
			potential: "High",
		},
		{
			name: "Maria Garcia",
			role: "Soccer • Midfielder",
			performance: 78,
			improvement: "+8%",
			lastSession: "1 day ago",
			potential: "Medium",
		},
		{
			name: "James Wilson",
			role: "Track & Field • Sprinter",
			performance: 92,
			improvement: "+15%",
			lastSession: "Today",
			potential: "High",
		},
	];

	return (
		<div className="p-6">
			{/* Coaching Overview Section */}
			<div className="mb-8">
				<h2 className="text-xl font-semibold text-white mb-4">
					Coaching Overview
				</h2>
				<div className="grid grid-cols-4 gap-4">
					<StatCard
						icon={<Users className="w-5 h-5 text-blue-400" />}
						label="Active"
						value="12"
						subtext="Total Athletes"
						bgColor="bg-blue-500/10"
					/>
					<StatCard
						icon={<Target className="w-5 h-5 text-green-400" />}
						label="Running"
						value="8"
						subtext="Active Programs"
						bgColor="bg-green-500/10"
					/>
					<StatCard
						icon={<TrendingUp className="w-5 h-5 text-purple-400" />}
						label="Average"
						value="23%"
						subtext="Player Improvement"
						bgColor="bg-purple-500/10"
					/>
					<StatCard
						icon={<Star className="w-5 h-5 text-yellow-400" />}
						label="Rating"
						value="4.8/5.0"
						subtext="Coach Rating"
						bgColor="bg-yellow-500/10"
					/>
				</div>
			</div>

			{/* AI Recommendations */}
			<div className="mb-8">
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-xl font-semibold text-white">
						AI-Powered Recommendations
					</h2>
					<button className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
						View All <ChevronRight className="w-4 h-4" />
					</button>
				</div>
				<div className="grid grid-cols-3 gap-4">
					<RecommendationCard
						type="success"
						title="High-Potential Athlete Alert"
						description="Sarah Johnson shows exceptional improvement in speed metrics. Consider advanced training protocols."
						action="high priority"
					/>
					<RecommendationCard
						type="info"
						title="Program Optimization"
						description="AI suggests adjusting recovery periods for 3 athletes based on performance data."
						action="medium priority"
					/>
					<RecommendationCard
						type="warning"
						title="New Talent Match"
						description="5 new athletes match your coaching criteria and are seeking mentorship."
						action="low priority"
					/>
				</div>
			</div>

			{/* Player Management */}
			<div className="mb-8">
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-xl font-semibold text-white">
						Player Management
					</h2>
					<div className="flex gap-2">
						<button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-gray-300 flex items-center gap-2">
							<Search className="w-4 h-4" />
							Scout Players
						</button>
						<button className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
							View All Players <ChevronRight className="w-4 h-4" />
						</button>
					</div>
				</div>
				<div className="space-y-3">
					{players.map((player, index) => (
						<PlayerCard key={index} {...player} />
					))}
				</div>
			</div>

			{/* Performance Analytics */}
			<div>
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-xl font-semibold text-white">
						Performance Analytics
					</h2>
					<button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-gray-300">
						Full Report
					</button>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div className="bg-slate-800/50 rounded-lg p-4">
						<h3 className="text-gray-300 mb-4 flex items-center gap-2">
							<Activity className="w-5 h-5 text-blue-400" />
							Key Metrics
						</h3>
						<div className="space-y-4">
							<MetricItem
								label="Player Retention"
								value="94%"
								trend="+5%"
								positive
							/>
							<MetricItem
								label="Avg Performance Gain"
								value="18%"
								trend="+3%"
								positive
							/>
							<MetricItem
								label="Session Completion"
								value="89%"
								trend="+7%"
								positive
							/>
							<MetricItem
								label="Injury Prevention"
								value="96%"
								trend="+2%"
								positive
							/>
						</div>
					</div>
					<div className="bg-slate-800/50 rounded-lg p-4">
						<h3 className="text-gray-300 mb-4 flex items-center gap-2">
							<Clock className="w-5 h-5 text-blue-400" />
							Recent Activity
						</h3>
						<div className="space-y-3">
							<ActivityItem
								title="Training session with Alex Thompson"
								time="2 hours ago"
								type="success"
							/>
							<ActivityItem
								title="Performance review completed"
								time="4 hours ago"
								type="info"
							/>
							<ActivityItem
								title="New athlete Maria Garcia joined"
								time="1 day ago"
								type="success"
							/>
							<ActivityItem
								title="Weekly report generated"
								time="2 days ago"
								type="default"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const StatCard = ({ icon, label, value, subtext, bgColor }) => (
	<div
		className={`${bgColor} backdrop-blur-sm border border-gray-700/50 rounded-lg p-4`}
	>
		<div className="flex items-center justify-between mb-2">
			{icon}
			<span className="text-xs text-blue-400 font-medium">{label}</span>
		</div>
		<div className="text-2xl font-bold text-white mb-1">{value}</div>
		<div className="text-sm text-gray-400">{subtext}</div>
	</div>
);

const RecommendationCard = ({ type, title, description, action }) => {
	const typeStyles = {
		success: "border-green-500/50 bg-green-500/5",
		info: "border-blue-500/50 bg-blue-500/5",
		warning: "border-yellow-500/50 bg-yellow-500/5",
	};

	const iconStyles = {
		success: "bg-green-500/20 text-green-400",
		info: "bg-blue-500/20 text-blue-400",
		warning: "bg-yellow-500/20 text-yellow-400",
	};

	return (
		<div
			className={`border ${typeStyles[type]} rounded-lg p-4 backdrop-blur-sm`}
		>
			<div
				className={`w-10 h-10 ${iconStyles[type]} rounded-full flex items-center justify-center mb-3`}
			>
				{type === "success" && "✓"}
				{type === "info" && "i"}
				{type === "warning" && "!"}
			</div>
			<h3 className="text-white font-medium mb-2">{title}</h3>
			<p className="text-gray-400 text-sm mb-3">{description}</p>
			<button
				className={`px-3 py-1 rounded-md text-xs font-medium ${
					type === "success"
						? "bg-green-500/20 text-green-400"
						: type === "info"
						? "bg-blue-500/20 text-blue-400"
						: "bg-yellow-500/20 text-yellow-400"
				}`}
			>
				{action}
			</button>
		</div>
	);
};

const PlayerCard = ({
	name,
	role,
	performance,
	improvement,
	lastSession,
	potential,
}) => (
	<div className="bg-slate-800/50 border border-gray-700/50 rounded-lg p-4 flex items-center justify-between hover:bg-slate-800/70 transition-colors">
		<div className="flex items-center gap-4">
			<div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
				<Users className="w-6 h-6 text-green-400" />
			</div>
			<div>
				<h3 className="text-white font-medium">{name}</h3>
				<p className="text-gray-400 text-sm">{role}</p>
			</div>
		</div>
		<div className="flex items-center gap-8">
			<div className="text-center">
				<p className="text-gray-400 text-xs">Performance</p>
				<p className="text-white font-medium">{performance}%</p>
			</div>
			<div className="text-center">
				<p className="text-gray-400 text-xs">Improvement</p>
				<p className="text-green-400 font-medium">{improvement}</p>
			</div>
			<div className="text-center">
				<p className="text-gray-400 text-xs">Last Session</p>
				<p className="text-white font-medium">{lastSession}</p>
			</div>
			<div className="text-center">
				<p className="text-gray-400 text-xs">Potential</p>
				<span
					className={`px-2 py-1 rounded-full text-xs font-medium ${
						potential === "High"
							? "bg-green-500/20 text-green-400"
							: "bg-yellow-500/20 text-yellow-400"
					}`}
				>
					{potential}
				</span>
			</div>
			<div className="flex gap-2">
				<button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm">
					View Details
				</button>
				<button className="p-1 hover:bg-slate-700 rounded">
					<Eye className="w-4 h-4 text-gray-400" />
				</button>
			</div>
		</div>
	</div>
);

const MetricItem = ({ label, value, trend, positive }) => (
	<div className="flex items-center justify-between">
		<span className="text-gray-400">{label}</span>
		<div className="flex items-center gap-3">
			<span className="text-xl font-bold text-white">{value}</span>
			<span
				className={`text-sm ${positive ? "text-green-400" : "text-red-400"}`}
			>
				{trend}
			</span>
		</div>
	</div>
);

const ActivityItem = ({ title, time, type }) => {
	const typeStyles = {
		success: "bg-green-500",
		info: "bg-blue-500",
		default: "bg-gray-500",
	};

	return (
		<div className="flex items-start gap-3">
			<div className={`w-2 h-2 ${typeStyles[type]} rounded-full mt-2`}></div>
			<div className="flex-1">
				<p className="text-white text-sm">{title}</p>
				<p className="text-gray-500 text-xs">{time}</p>
			</div>
		</div>
	);
};

export default SoccerCoachingDashboard;

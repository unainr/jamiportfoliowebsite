import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
	const data = [
		{
			title: "EXPERIENCE",
			content: (
				<div className="w-full ">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
							{/* Team Building Card */}
							<div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 hover:bg-gray-800/40 transition-all duration-300 border border-gray-700/30 hover:border-purple-500/50">
								<div className="flex flex-col sm:flex-row items-start gap-4">
									<div className="p-3 bg-purple-600/20 rounded-lg shrink-0">
										<svg
											className="w-6 h-6 text-purple-500"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
											/>
										</svg>
									</div>
									<div className="space-y-2">
										<h3 className="text-lg sm:text-xl font-bold text-white">
											Team Building Excellence
										</h3>
										<p className="text-sm sm:text-base text-gray-300 leading-relaxed">
											Facilitated team-building exercises, strengthening
											interdepartmental relationships and improving
											collaboration.
										</p>
									</div>
								</div>
							</div>

							{/* Project Delivery Card */}
							<div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 hover:bg-gray-800/40 transition-all duration-300 border border-gray-700/30 hover:border-purple-500/50">
								<div className="flex flex-col sm:flex-row items-start gap-4">
									<div className="p-3 bg-purple-600/20 rounded-lg shrink-0">
										<svg
											className="w-6 h-6 text-purple-500"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
									<div className="space-y-2">
										<h3 className="text-lg sm:text-xl font-bold text-white">
											Project Delivery
										</h3>
										<p className="text-sm sm:text-base text-gray-300 leading-relaxed">
											Successfully completed numerous client projects,
											delivering high-quality solutions that exceed
											expectations.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			),
		},
		{
			title: "EDUCATION ",
			content: (
				<div className="w-full">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
							{/* Advanced Diploma Card */}
							<div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 hover:bg-gray-800/40 transition-all duration-300 border border-gray-700/30 hover:border-purple-500/50">
								<div className="flex flex-col sm:flex-row items-start gap-4">
									<div className="p-3 bg-purple-600/20 rounded-lg shrink-0">
										<svg
											className="w-6 h-6 text-purple-500"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M12 14l9-5-9-5-9 5 9 5m0 0l9-5-9-5-9 5 9 5m0 0v6"
											/>
										</svg>
									</div>
									<div className="space-y-2">
										<h3 className="text-lg sm:text-xl font-bold text-white">
											Advanced Diploma in Software Engineering
										</h3>
										<p className="text-purple-400 font-medium">
											Aptech Education Pakistan
										</p>
										<p className="text-sm sm:text-base text-gray-300 leading-relaxed">
											Comprehensive software engineering program covering
											full-stack development, software architecture, and modern
											development practices.
										</p>
									</div>
								</div>
							</div>

							{/* Commerce Card */}
							<div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 hover:bg-gray-800/40 transition-all duration-300 border border-gray-700/30 hover:border-purple-500/50">
								<div className="flex flex-col sm:flex-row items-start gap-4">
									<div className="p-3 bg-purple-600/20 rounded-lg shrink-0">
										<svg
											className="w-6 h-6 text-purple-500"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
											/>
										</svg>
									</div>
									<div className="space-y-2">
										<h3 className="text-lg sm:text-xl font-bold text-white">
											Intermediate in Commerce
										</h3>
										<p className="text-purple-400 font-medium">
											Commerce Institute
										</p>
										<p className="text-sm sm:text-base text-gray-300 leading-relaxed">
											Strong foundation in business principles, accounting, and
											commercial practices, providing valuable business context
											for technical solutions.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			),
		},
		{
			title: "HIGHTLIGHTS",
			content: (
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
						{/* Card 1 */}
						<div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 hover:bg-gray-800/40 transition-all duration-300 border border-gray-700/30 hover:border-purple-500/50">
							<div className="flex items-start gap-4">
								<div className="p-2 sm:p-3 bg-purple-600/20 rounded-lg">
									<svg
										className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<div className="space-y-2">
									<h3 className="text-lg sm:text-xl font-bold text-white">
										Hospital Management System
									</h3>
									<p className="text-purple-400 font-medium">
										Laravel PHP Development
									</p>
									<p className="text-gray-300 text-sm sm:text-base leading-relaxed">
										Built a comprehensive hospital management system with
										patient records, appointment scheduling, and billing
										management using Laravel and MySQL.
									</p>
									<div className="flex flex-wrap gap-2 pt-3">
										<span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
											Laravel
										</span>
										<span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
											PHP
										</span>
										<span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
											MySQL
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* Card 2 */}
						<div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 hover:bg-gray-800/40 transition-all duration-300 border border-gray-700/30 hover:border-purple-500/50">
							<div className="flex items-start gap-4">
								<div className="p-2 sm:p-3 bg-purple-600/20 rounded-lg">
									<svg
										className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
										/>
									</svg>
								</div>
								<div className="space-y-2">
									<h3 className="text-lg sm:text-xl font-bold text-white">
										Inventory Management System
									</h3>
									<p className="text-purple-400 font-medium">
										.NET Development
									</p>
									<p className="text-gray-300 text-sm sm:text-base leading-relaxed">
										Developed a robust inventory management system with
										real-time tracking, automated reordering, and detailed
										reporting using .NET and SQL Server.
									</p>
									<div className="flex flex-wrap gap-2 pt-3">
										<span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
											.NET
										</span>
										<span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
											C#
										</span>
										<span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
											SQL Server
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* Card 3 */}
						<div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 hover:bg-gray-800/40 transition-all duration-300 border border-gray-700/30 hover:border-purple-500/50">
							<div className="flex items-start gap-4">
								<div className="p-2 sm:p-3 bg-purple-600/20 rounded-lg">
									<svg
										className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 6v6m0 0v6m0-6h6m-6 0H6"
										/>
									</svg>
								</div>
								<div className="space-y-2">
									<h3 className="text-lg sm:text-xl font-bold text-white">
										School Management Portal
									</h3>
									<p className="text-purple-400 font-medium">
										Laravel PHP Development
									</p>
									<p className="text-gray-300 text-sm sm:text-base leading-relaxed">
										Created a comprehensive school management system featuring
										attendance tracking, grade management, and parent
										communication portal.
									</p>
									<div className="flex flex-wrap gap-2 pt-3">
										<span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
											Laravel
										</span>
										<span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
											jQuery
										</span>
										<span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
											Bootstrap
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* Card 4 */}
						<div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 hover:bg-gray-800/40 transition-all duration-300 border border-gray-700/30 hover:border-purple-500/50">
							<div className="flex items-start gap-4">
								<div className="p-2 sm:p-3 bg-purple-600/20 rounded-lg">
									<svg
										className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
										/>
									</svg>
								</div>
								<div className="space-y-2">
									<h3 className="text-lg sm:text-xl font-bold text-white">
										HR Management System
									</h3>
									<p className="text-purple-400 font-medium">
										.NET Core Development
									</p>
									<p className="text-gray-300 text-sm sm:text-base leading-relaxed">
										Built an HR management system with employee tracking, leave
										management, and performance evaluation modules using .NET
										Core.
									</p>
									<div className="flex flex-wrap gap-2 pt-3">
										<span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
											.NET Core
										</span>
										<span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
											Entity Framework
										</span>
										<span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
											Azure
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			),
		},
	];
	return (
		<div className="w-full">
			<Timeline data={data} />
		</div>
	);
}

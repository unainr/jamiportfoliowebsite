"use client";
import { sendForm } from "@/lib/actions/form";
import React, { useState } from "react";
import { toast } from "sonner";

export function ContactForm() {
	const [form, setform] = useState({name: "",email: "",message: "",});

	const handelChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setform({...form,[e.target.name]: e.target.value,});
	};
  
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
		const formData = new FormData(e.currentTarget);
		try {
			await sendForm(formData);
			toast.success("Message sent successfully!");
			setform({
				name: "",
				email: "",
				message: "",
			});
		} catch (error) {
			toast.error("Something went wrong!");
		}
	};

	return (
		<div id="contact" className="max-w-7xl mx-auto px-4 my-16">
			<div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* Contact Info */}
					<div className="space-y-8">
						<div>
							<h2 className="text-3xl font-bold text-white mb-6">
								Let's Connect
							</h2>
							<p className="text-gray-300">
								Ready to start a project or just want to chat? Drop me a
								message!
							</p>
						</div>

						<div className="space-y-6">
							<div className="flex items-center gap-4">
								<div className="p-3 bg-purple-600/20 rounded-lg">
									<svg
										className="w-6 h-6 text-purple-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<div>
									<p className="text-purple-400 font-medium">Email</p>
									<p className="text-gray-300">jamiraza359@gmail.com</p>
								</div>
							</div>

							<div className="flex items-center gap-4">
								<div className="p-3 bg-purple-600/20 rounded-lg">
									<svg
										className="w-6 h-6 text-purple-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
								</div>
								<div>
									<p className="text-purple-400 font-medium">Location</p>
									<p className="text-gray-300">Karachi, Pakistan</p>
								</div>
							</div>

							<div className="flex gap-4 pt-4">
								<a
									href="#"
									className="p-3 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition-colors">
									<svg
										className="w-6 h-6 text-purple-500"
										fill="currentColor"
										viewBox="0 0 24 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
								</a>
								<a
									href="#"
									className="p-3 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition-colors">
									<svg
										className="w-6 h-6 text-purple-500"
										fill="currentColor"
										viewBox="0 0 24 24">
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
									</svg>
								</a>
								<a
									href="#"
									className="p-3 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition-colors">
									<svg
										className="w-6 h-6 text-purple-500"
										fill="currentColor"
										viewBox="0 0 24 24">
										<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
									</svg>
								</a>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label className="block text-purple-400 font-medium mb-2">
								Name
							</label>
							<input
								type="text"
								name="name"
								className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700/50 text-white focus:outline-none focus:border-purple-500"
								placeholder="Your name"
								required
								onChange={handelChange}
								value={form.name}
							/>
						</div>

						<div>
							<label className="block text-purple-400 font-medium mb-2">
								Email
							</label>
							<input
								type="email"
								name="email"
								className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700/50 text-white focus:outline-none focus:border-purple-500"
								placeholder="your@email.com"
								required
								onChange={handelChange}
								value={form.email}
							/>
						</div>

						<div>
							<label className="block text-purple-400 font-medium mb-2">
								Message
							</label>
							<textarea
								className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700/50 text-white focus:outline-none focus:border-purple-500 h-32"
								placeholder="Your message..."
								name="message"
								required
								onChange={handelChange}
								value={form.message}></textarea>
						</div>

						<button
							type="submit"
							className="w-full py-3 px-6 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

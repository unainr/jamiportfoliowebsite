import { About } from "@/components/AboutComponents";
import { TextGenerateEffectDemo } from "@/components/GenerativeText";
import { Projects } from "@/components/Projects";
import { PROJECT_FETCH_QUERY } from "@/sanity/lib/queries";
import { TimelineDemo } from "@/components/TimeLine";
import { ContactForm } from "@/components/ContactForm";
import { createClient } from "next-sanity";
import { MainRobort } from "@/components/main-robort";

const sanityClient = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
	apiVersion: "2023-01-01",
	useCdn: true,
});

export const revalidate = 10; // Revalidate every 10 seconds

export default async function Home() {
	const projects = await sanityClient.fetch(PROJECT_FETCH_QUERY);
	return (
		<>
			<div className="absolute inset-0 dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1]">
				<div className="absolute inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			</div>

			{/* Main content container */}
			<div className="relative z-10">
				<MainRobort/>
				{/* <TextGenerateEffectDemo /> */}
				<About />

				<section className="py-5 bg-gradient-to-b">
					<div className="container mx-auto px-4 max-w-7xl">
						{/* 📝 Heading Displayed ONCE */}
						<h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">
							My <span className="text-purple-600">Projects</span>
						</h2>

						{projects?.length > 0 ? (
							<div
								id="portfolio"
								className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-6">
								{projects.map((project: any) => (
									<Projects key={project._id} project={project} />
								))}
							</div>
						) : (
							<p className="no-results text-center text-gray-400">
								No Projects Found
							</p>
						)}
					</div>
				</section>
			</div>

			<TimelineDemo />
			<ContactForm />
		</>
	);
}

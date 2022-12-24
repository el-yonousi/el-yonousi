import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const client = serverSupabaseClient(event)
	const { data } = await client.from("experiences").select("id, title, employment_type, company_name, company_url, date_start, date_end, description, profile").eq('display', true).order('order', { ascending: true })
	return data;
});

// export default defineEventHandler(() => [
// 	{
// 		title: "Web Developer",
// 		employment_type: "Full-Time",
// 		company_name: "Redimpact",
// 		date_start: "Mar 2022",
// 		date_end: "current",
// 		description: `- Maintenance of old projects.<br/>
// 		- Upgrade some projects with new technology.<br/>
// 		- Create new projects with updated technologies.`,
// 	},
// 	{
// 		title: "Full-stack Developer",
// 		employment_type: "inetrnship",
// 		company_name: "Berger-Levrault",
// 		date_start: "Jan 2021",
// 		date_end: "Jun 2021 (6 months)",
// 		description: `I participated with a team of five, in the City'ZEN Challenge organized by the French company BergerLevrault an international innovation competition, between schools and students from around the world in
// 		the field of information technology to develop digital solutions that meet societal challenges. today and
// 		tomorrow.<br/>
// 		We get second place in this competition, which was not easy, especially in the period of the COVID-19,
// 		and took the prize, whose value is approximately $1,500.<br/>
// 		My tasks on the team were to organize the project, create a prototype and turn the prototype into a
// 		website.`,
// 	},
// ]);
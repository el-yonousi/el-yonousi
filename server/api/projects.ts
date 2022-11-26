import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)
    const { data } = await client.from("projects").select("name, date, description, topics, clone_url, homepage, preview, order").order('order', { ascending: true });
    return data;
});

// export default defineEventHandler(() => [
//     {
//         name: "youtube",
//         date: "November 2021",
//         description: "YTBDN is a website that let you download youtube videos and playlists for free.",
//         tools: ["handlebars", "js", "node", "scss"],
//         github: "https://github.com/el-yonousi/youtube.git",
//         homepage: "https://ytbdn.herokuapp.com/"
//     },
//     {
//         name: "dikri",
//         date: "October 2021",
//         description: "Dikri is a mobile application that enables the user to read the daily supplications of a Muslim, designed to facilitate the reading process and simplify the idea.",
//         tools: ["java", "xml"],
//         github: "https://github.com/el-yonousi/dikri.git",
//         homepage: "https://play.google.com/store/apps/details?id=net.casetrue.dikri"
//     },
//     {
//         name: "doing",
//         date: "October 2021",
//         description: "Doing is a mobile application that enables users to add daily tasks, designed to facilitate the process of managing tasks and simplify the idea.",
//         tools: ["java", "sqlite", "xml"],
//         github: "https://github.com/el-yonousi/doing.git"
//     },
//     {
//         name: "el-yonousi",
//         date: "August 2022",
//         description: "I built this project to show who is me, my projects, skills, and career...",
//         tools: ["git", "nuxt", "tailwind", "typescript-official", "yarn"],
//         github: "https://github.com/el-yonousi/el-yonousi.git"
//     }
// ]);
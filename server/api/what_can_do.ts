import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)
    const { data } = await client.from("what_can_do").select("icon, title, description");
    return { what_can_do: data };
});

// [{
//     icon: "system-uicons:code",
//     title: "Coding",
//     description: "Writing clear, understandable, and reusable code, I always try to take into account the aspect of speed and performance.",
// },
// {
//     icon: "fluent:bug-prohibited-20-regular",
//     title: "Fixing Bugs",
//     description: "Finding and solving problems in projects, upgrading old versions to new versions.",
// },
// {
//     icon: "game-icons:smart",
//     title: "Work Smart",
//     description: "Keeping pace with market development, using the latest technologies in projects.",
// }]
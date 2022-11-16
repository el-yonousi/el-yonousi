import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)
    const { data } = await client.from("projects").select("name, date, description, topics, clone_url, homepage");
    return { projects: data };
});
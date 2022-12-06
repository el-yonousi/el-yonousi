import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const client = serverSupabaseClient(event)
	const { id } = event.context.params
	const { data } = await client.from("testimonials").select("id, profile, fullName, recommendation, relationship, status, linkedin").order('order', { ascending: true }).match({ 'id': id }).single()
	return data;
});
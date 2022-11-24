import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const client = serverSupabaseClient(event)
	const { id } = event.context.params
	const { data } = await client.from("experiences").select("id, title, employment_type, company_name, company_url, date_start, date_end, description, profile").order('order', { ascending: true }).match({ 'id': id }).single()
	return data;
});
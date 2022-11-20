import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const client = serverSupabaseClient(event)
	const { data } = await client.storage
		.from('images')
		.getPublicUrl('site/banner.webp')

	return { banner: data.publicUrl };
});
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const client = serverSupabaseClient(event)
	const { data } = await client.storage
		.from('images')
		.getPublicUrl('site/img-banner.webp')

	return { img_banner: data.publicUrl };
});
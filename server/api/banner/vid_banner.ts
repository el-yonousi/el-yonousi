import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const client = serverSupabaseClient(event)
	const { data } = await client.storage
		.from('images')
		.getPublicUrl('site/vid-banner.mp4')

	return { vid_banner: data.publicUrl };
});
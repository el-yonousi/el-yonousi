export default defineEventHandler(async () => {
	const { githubApi, accessTokens } = useRuntimeConfig()
	const repos = ['el-yonousi', 'youtube', 'aiche_bois', 'dikri', 'doing', 'nuxt3_demo_project', 'movie-nuxt']

	return await Promise.all(repos.map(name =>
		fetch(`${githubApi}${name}`, {
			headers: {
				// 'Authorization': accessTokens,
				'Content-Type': 'application/json'
			}
		}).then(resp => resp.json())
	)).then((response) => response);
})
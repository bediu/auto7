module.exports = {
	siteName: 'Auto7',
	siteUrl: 'https://auto7.online',
	siteDescription: 'Në Hap Me Botën e Automobilave',
	titleTemplate: `%s`,
	pathPrefix: `/`,

	plugins: [{
			use: 'gridsome-plugin-rss',
			options: {
				contentTypeName: 'Post',
				feedOptions: {
					title: 'AUTO7 RSS',
					feed_url: 'https://auto7.online/feed.xml',
					site_url: 'https://auto7.online'
				},
				feedItemOptions: node => ({
					title: node.title,
					description: node.content,
					url: 'https://auto7.online/' + node.slug,
					author: node.author,
					date: node.date,
					categories: node.tags
				}),
				output: {
					dir: './static',
					name: 'feed.xml'
				}
			}
		},
		{
			use: '@gridsome/plugin-google-analytics',
			options: {
				id: 'UA-XXXXXXXXX-X'
			}
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'blog/*.md',
				typeName: 'Post',
				route: '/:slug',
				refs: {
					author: 'Author',
					tags: {
						typeName: 'Tag',
						route: '/tag/:title',
						create: true
					}
				}
			}
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				// TODO Use yaml file as data source
				path: 'data/author/*.md',
				typeName: 'Author',
				route: '/author/:id'
			}
		}
	]
}
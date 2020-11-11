<template>
  <div class="py-16">
    <h1 class="text-3xl text-center">eureka! Articles</h1>
     <div class="py-10">
     	<div class="grid grid-cols-1 gap-10">
     		<div v-for="post in posts" :key="post.slug">
     		
     			<!-- card -->
     			<div class="flex flex-wrap w-full justify-between border border-gray-600 cursor-pointer hover:shadow-xl">
     				<div class="md:w-2/6">
     					<img :src="post.image" class="h-64 w-full object-cover object-center"/>
     				</div>
     				<div class="p-5 overflow-hidden space-y-3 md:w-3/6">
     					<nuxt-link :to="`/articles/${post.slug}`"><h1 class="text-2xl font-semibold cursor-pointer hover:underline">{{ post.title }}</h1></nuxt-link>
     					<p class="text-gray-700">{{ post.author }} - {{ post.published }}</p>
     					<nuxt-content :document="post" class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto h-20 overflow-hidden text-gray-700" />
     					<nuxt-link :to="`/articles/${post.slug}`" class="cursor-pointer hover:underline">Read more...</nuxt-link>
     				</div>
     				<div class="flex md:flex-col w-full md:w-1/12 items-center justify-center bg-gray-800 md:space-y-3 space-x-5 md:space-x-0 py-3">
     					<ShareNetwork
									network="facebook"
									url="https://specialeureka.netlify.app/"
									:title="post.title"
									class="text-white cursor-pointer hover:text-gray-500"
								>
									<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
										<path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
									</svg>
							</ShareNetwork>
							<ShareNetwork
									network="twitter"
									url="https://specialeureka.netlify.app/"
									:title="post.title"
									class="text-white cursor-pointer hover:text-gray-500"
								>
									<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
										<path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
									</svg>
							</ShareNetwork>
							<ShareNetwork
									network="WhatsApp"
									url="https://specialeureka.netlify.app/"
									:title="post.title"
									class="text-white cursor-pointer hover:text-gray-500"
								>
									<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
										<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
										<path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
									</svg>
							</ShareNetwork>
     				</div>
     			</div>
     			<!-- endcard -->
     			
     		</div>
     	</div>
     </div>
  </div>
</template>

<script>
export default {
	layout: 'main',
	async asyncData({ $content }) {
		const posts = await $content("posts").fetch();
		
		return { posts };
	}
}
</script>


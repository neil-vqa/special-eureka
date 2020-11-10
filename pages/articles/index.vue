<template>
  <div class="py-16">
    <h1 class="text-2xl">eureka! Articles</h1>
     <div class="py-10">
     	<div class="grid grid-cols-1 gap-10">
     		<div v-for="post in posts" :key="post.slug">
     			<div class="flex w-full border border-gray-600 hover:shadow-xl">
     				<div class="w-1/2">
     					<img :src="post.image" class="h-64 w-full object-cover object-center"/>
     				</div>
     				<div class="px-10 py-5 overflow-hidden w-1/2">
     					<h1 class="text-2xl font-semibold">{{ post.title }}</h1>
     					<p class="text-gray-700">{{ post.author }} - {{ post.published }}</p>
     					<p class="h-32 overflow-hidden">{{ post.body }}</p>
     				</div>
     			</div>
     		</div>
     	</div>
     </div>
  </div>
</template>

<script>
export default {
	async asyncData({ $content }) {
		const posts = await $content("posts").fetch();
		
		return { posts };
	}
}
</script>


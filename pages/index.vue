<template>
  <div class="">
    <div class="py-16 space-y-16">
    
    	<!-- article -->
    	<div>
		  	<h1 class="text-2xl">eureka! Articles</h1>
		  	<div class="py-5">
		  		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
		  			<div v-for="post in posts" :key="post.slug">
		  				<div class="cursor-pointer">
								<div class="relative overflow-hidden">
									<img :src="post.image" class="h-64 w-full object-cover object-center"/>
									<div 
										class="absolute top-0 left-0 z-20 flex flex-col justify-center items-start w-full h-full p-5
														bg-white bg-opacity-50 opacity-100 lg:bg-opacity-0 lg:opacity-0 hover:opacity-100 hover:bg-opacity-75">
										<h1 class="text-xl text-gray-800 font-semibold border-b-2 border-gray-700">{{ post.title }}</h1>
										<p class="text-gray-700">{{ post.author }}</p>
									</div>
								</div>
							</div>
		  			</div>
		  		</div>
		  	</div>
    	</div>
    	
    	<!-- products -->
    	<div>
		  	<h1 class="text-2xl">eureka! Articles</h1>
		  	<div class="py-5">
		  		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
		  			<div v-for="product in products" :key="product.slug">
		  				<div class="cursor-pointer">
								<div class="relative overflow-hidden">
									<img :src="product.image" class="h-64 w-full object-cover object-center"/>
									<div 
										class="absolute top-0 left-0 z-20 flex flex-col justify-center items-start w-full h-full p-5
														bg-white bg-opacity-50 opacity-100 lg:bg-opacity-0 lg:opacity-0 hover:opacity-100 hover:bg-opacity-75">
										<h1 class="text-xl text-gray-800 font-semibold border-b-2 border-gray-700">{{ product.name }}</h1>
										<p class="text-gray-700">$ {{ product.price }}</p>
									</div>
								</div>
							</div>
		  			</div>
		  		</div>
		  	</div>
    	</div>
    	
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
	head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  async asyncData({ $content }) {
		const posts = await $content("posts").fetch();
		const products = await $content("products").fetch();
		
		return { posts, products };
	}
  
}
</script>


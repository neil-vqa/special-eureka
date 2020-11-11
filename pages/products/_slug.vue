<template>
  <div class="py-16">
  	<div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
  		
  		<!-- appear on mobile only -->
  		<div class="lg:hidden">
  			<div class="border border-gray-600 p-10 space-y-4">
  				<p class="text-xl font-semibold">{{ product.name }}</p>
  				<p class="text-lg">$ {{ product.price }}</p>
  				<div>
  					<div class="px-5 py-3 bg-gray-500 text-white text-sm text-center font-semibold uppercase cursor-pointer hover:bg-gray-700">Add to cart</div>
  				</div>
  			</div>  			
  		</div>
  		
  		<!-- always visible -->
  		<div class="lg:col-span-2">
  			<h1 class="text-3xl">{{ product.name }}</h1>
  			<div class="my-10">
  				<img :src="product.image" class="w-full object-cover object-center"/>
  			</div>
  			<div>
  				<p class="text-lg">{{ product.description }}</p>
  			</div>
  		</div>
  		
  		<!-- appear on desktops only -->
  		<div class="hidden lg:block lg:col-span-1">
  			<div class="border border-gray-600 p-10 space-y-4">
  				<p class="text-xl font-semibold">{{ product.name }}</p>
  				<p class="text-lg">$ {{ product.price }}</p>
  				<div>
  					<div class="px-5 py-3 bg-gray-500 text-white text-sm text-center font-semibold uppercase cursor-pointer hover:bg-gray-700">Add to cart</div>
  				</div>
  			</div>  			
  		</div>
  		
  	</div>
  </div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const product = await $content("products", params.slug).fetch();
		
		return { product };
	},
	
	
	
	
	
	
	
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/


</style>

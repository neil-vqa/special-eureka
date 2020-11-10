<template>
  <div>
  	<!-- top -->
    <div class="sticky top-0 bg-white bg-opacity-75 w-full h-16 border-b border-gray-400">
    	<div class="flex justify-between items-center h-full max-w-screen-2xl mx-auto px-2 md:px-20">
    		<div>
		  		<NuxtLink to="/" class="logo text-3xl font-head font-semibold">eureka</NuxtLink>
		  	</div>
		  	<div>
		  		<a href="/admin" class="font-bold px-5 py-3 bg-black text-white hover:bg-gray-600">Admin</a>
		  	</div>
    	</div>
    </div>
    
    <!-- middle -->
    <div class="w-full h-48">
    	<div class="flex items-center justify-center h-full px-3 md:px-20">
    		<div class="text-center">
    			<h1 class="font-bold text-3xl sm:text-4xl">Today's brilliant matters</h1>
    			<h2 class="text-base lg:text-lg">See recently added brilliant articles and treasures curated by the Eureka Team.</h2>
    		</div>
    	</div>
    </div>

  </div>
</template>

<script>
export default {
	
}
</script>

<style>
.nuxt-link-exact-active {
	border-bottom: #000 2px solid;
	color: #000;
}

.logo {
	border-bottom: none;
}


</style>

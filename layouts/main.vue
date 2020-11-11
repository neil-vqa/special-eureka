<template>
  <div class="font-base">
  	<TopHeader />
  	<MidHeader />
  	
  	<!-- nav -->
    <div class="sticky top-0 z-50 bg-white w-full h-16 border-b border-gray-400">
    	<div class="flex items-center justify-center h-full space-x-3 sm:space-x-4 text-gray-500">
    		<NuxtLink to="/" class="h-full" exact><div class="nav-link sm:text-base hover:text-black">Home</div></NuxtLink>
    		<NuxtLink to="/articles" class="h-full"><div class="nav-link sm:text-base hover:text-black">Articles</div></NuxtLink>
    		<NuxtLink to="/products" class="h-full"><div class="nav-link sm:text-base hover:text-black">Products</div></NuxtLink>
    		<NuxtLink to="/team" class="h-full"><div class="nav-link sm:text-base hover:text-black">Team</div></NuxtLink>
    		<NuxtLink to="/contact" class="h-full"><div class="nav-link sm:text-base hover:text-black">Contact</div></NuxtLink>
    	</div>
    </div>
    
    <div class="max-w-screen-2xl mx-auto px-2 md:px-20">
    	<Nuxt />
    </div>
    
  </div>
</template>


<style>
.nuxt-link-active {
	border-bottom: #000 2px solid;
	color: #000;
}


</style>



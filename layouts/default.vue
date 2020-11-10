<template>
  <div class="font-base">
  	<Header />
  	
  	<!-- nav -->
    <div class="sticky top-0 bg-white w-full h-16 border-b border-gray-400">
    	<div class="flex items-center justify-center h-full space-x-3 sm:space-x-4 text-gray-500">
    		<NuxtLink to="/" class="h-full"><div class="nav-link sm:text-base">Home</div></NuxtLink>
    		<NuxtLink to="/articles" class="h-full"><div class="nav-link sm:text-base">Articles</div></NuxtLink>
    		<NuxtLink to="/products" class="h-full"><div class="nav-link sm:text-base">Products</div></NuxtLink>
    		<NuxtLink to="/team" class="h-full"><div class="nav-link sm:text-base">Team</div></NuxtLink>
    		<NuxtLink to="/contact" class="h-full"><div class="nav-link sm:text-base">Contact</div></NuxtLink>
    	</div>
    </div>
    
    <div class="max-w-screen-2xl mx-auto px-2 md:px-20">
    	<Nuxt />
    </div>
    
  </div>
</template>


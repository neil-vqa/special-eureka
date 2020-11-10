<template>
  <div>
    <div class="h-screen w-full flex flex-col justify-center items-center">
			<div class="welcome w-11/12 sm:w-auto text-center px-6 sm:px-10 py-20 flex flex-col justify-center items-center space-y-5">
				<div class="flex space-x-2 items-center">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-news" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
						<path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
						<line x1="8" y1="8" x2="12" y2="8" />
						<line x1="8" y1="12" x2="12" y2="12" />
						<line x1="8" y1="16" x2="12" y2="16" />
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
						<line x1="12" y1="5" x2="12" y2="19" />
						<line x1="5" y1="12" x2="19" y2="12" />
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-store" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
						<line x1="3" y1="21" x2="21" y2="21" />
						<path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
						<line x1="5" y1="21" x2="5" y2="10.85" />
						<line x1="19" y1="21" x2="19" y2="10.85" />
						<path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
					</svg>
				</div>
				<h1 class="text-4xl sm:text-6xl font-semibold">Welcome!</h1>
				<p class="text-base sm:text-lg font-semibold">For Integrated B2 systems:<br />Blogging + Ecommerce</p>
				<p class="text-xs sm:text-base pb-10">Powered by Netlify CMS</p>
				<NuxtLink to="/" class="admin text-base p-5">Proceed to Home</NuxtLink>
			</div>
		</div>
  </div>
</template>

<script>
export default {
	layout: 'welcome',
	
}
</script>

<style>
.welcome {
	height: 80%;
	border-radius: 50px;
	background: #68d391;
	box-shadow:  20px 20px 60px #58b37b, 
		           -20px -20px 60px #78f3a7;
}

.admin {
	border-radius: 50px;
	background: linear-gradient(145deg, #6fe29b, #5ebe83);
	box-shadow:  16px 16px 43px #51a571, 
		           -16px -16px 43px #7fffb1;
}

.admin:hover {
	color: #000;
	border-radius: 50px;
	background: #68d391;
	box-shadow:  16px 16px 43px #51a571, 
		           -16px -16px 43px #7fffb1;
}
















</style>





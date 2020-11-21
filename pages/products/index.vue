<template>
  <div class="py-16">
  	<Cart />
    <h1 class="text-3xl text-center">eureka! Products</h1>
    <div class="py-10">
    	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    		<div v-for="product in products" :key="product.slug">
    		
    			<!-- card -->
		  		<div class="border border-gray-600 hover:shadow-xl cursor-pointer">
		  			<div class="overflow-hidden">
		  				<img :src="product.image" class="h-64 w-full object-cover object-center"/>
		  			</div>
		  			<div class="p-10 space-y-3">
		  				<nuxt-link :to="`/products/${product.slug}`">
		  					<p class="h-16 text-lg font-semibold hover:underline">{{ product.name }}</p>
		  				</nuxt-link>
							<p class="text-gray-700 clamp-3">{{ product.description }}</p>
							<div class="flex justify-between items-center pt-5">
								<p class="text-lg">$ {{ product.price }}</p>
								<div>
									<nuxt-link :to="`/products/${product.slug}`" class="px-5 py-3 bg-gray-500 text-white text-sm uppercase cursor-pointer hover:bg-gray-700">
										View Product
									</nuxt-link>
								</div>
							</div>
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
	scrollToTop: false,
	head() {
		return {
			title: 'Products | Eureka!',
			meta: [
				{ hid: 'description', name: 'description', content: 'Explore and support the brilliant products made by the Eureka Community.' },
				{ hid: 'og:title', name: 'og:title', content: 'Products | Eureka!' },
				{ hid: 'og:description', name: 'og:description', content: 'Explore and support the brilliant products made by the Eureka Community.' },
				{ hid: 'og:image', name: 'og:image', content: '/brainstorm.png' },
			]
		}
	},
	async asyncData({ $content }) {
		const products = await $content("products").fetch();
		
		return { products };
	},
	data() {
  	return {
  		orders: [],
  	}
  },
  methods: {
  	sendMail() {
  		axios.post('.netlify/functions/sendmail')
  			.then( response => {
  				console.log('serverless fx done!');
  				console.log(response.body);
  			});
  	},
  	sendOrder() {
  		let ordered = '';
  		const line = this.orders.map((item,index) => {
				return `${index+1}) Item: ${item.name}, Price: ${item.price}`;
			}).join("\n");
		
		ordered = line;
  	
  		axios.post('.netlify/functions/sendorder', {
  			"name": "Jihyo",
  			"date": "Nov 8, 2020",
  			"address": "Seoul, South Korea",
  			"phone": "09452542203",
  			"order": ordered
  		})
  			.then( response => {
  				console.log('serverless fx done!');
  				console.log(response.body);
  			});
  	}
  },
}
</script>

<style>








</style>



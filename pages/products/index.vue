<template>
  <div class="py-16">
    <h1 class="text-2xl">eureka! Products</h1>
    <div class="py-10">
    	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    		<div v-for="product in products" :key="product.slug">
		  		<div class="border border-gray-600 hover:shadow-xl">
		  			<div class="overflow-hidden">
		  				<img :src="product.image" class="h-64 w-full object-cover object-center"/>
		  			</div>
		  			<div class="py-5 px-10 space-y-3">
		  				<p class="h-16 text-lg font-semibold">{{ product.name }}</p>
							<p class="text-gray-700">{{ product.description }}</p>
							<div class="flex justify-between items-center">
								<p class="text-lg">$ {{ product.price }}</p>
								<div>
									<div class="px-4 py-2 bg-gray-500 text-white uppercase cursor-pointer">
										add
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
export default {
	async asyncData({ $content }) {
		const products = await $content("products").fetch();
		
		return { products };
	},
	data() {
  	return {
  		orders: [{name: 'ramyun', price: 450}, {name: 'samgyup', price: 800}, {name: 'bibimbap', price: 750}],
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



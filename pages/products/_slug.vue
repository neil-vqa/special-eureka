<template>
  <div class="py-16">
  	<Cart />
  
  	<div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
  		
  		<!-- appear on mobile only -->
  		<div class="lg:hidden">
  			<div class="border border-gray-600 p-10 space-y-4">
  				<p class="text-xl font-semibold">{{ product.name }}</p>
  				<p class="text-lg">$ {{ product.price }}</p>
  				<div>
  					<div @click="addItem({'slug':product.slug, 'name':product.name, 'price':product.price, 'quantity': 1})"
  								class="add-cart hover:bg-gray-700"
  								v-show="!added.includes(product.slug)">
  									Add to cart
  					</div>
  					<!-- added/remove box -->
  					<div class="flex items-center justify-between border border-gray-600 h-10"
  								v-show="added.includes(product.slug)">
  						<div class="w-2/3 text-center">
  							<p class="font-semibold text-xl tracking-wide">In cart: {{ count(added, product.slug) }}</p>
  						</div>
  						<div class="flex w-1/3 h-full">
								<div class="add-btn hover:bg-gray-700"
											@click="addItem({'slug':product.slug, 'name':product.name, 'price':product.price, 'quantity': 1})">
									+
								</div>
								<div class="remove-btn hover:bg-red-500"
											@click="removeItem({'slug':product.slug})">
									-
								</div>
							</div>
  					</div>
  					<div class="checkout-btn hover:bg-gray-900 w-full text-center mt-5" v-show="added.includes(product.slug)">Proceed to Checkout</div>
  					<!-- endadded box -->
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
  					<div @click="addItem({'slug':product.slug, 'name':product.name, 'price':product.price, 'quantity': 1})"
  								class="add-cart hover:bg-gray-700"
  								v-show="!added.includes(product.slug)">
  									Add to cart
  					</div>
  					<!-- added/remove box -->
  					<div class="flex items-center justify-between border border-gray-600 h-10"
  								v-show="added.includes(product.slug)">
  						<div class="w-2/3 text-center">
  							<p class="font-semibold text-xl tracking-wide">In cart: {{ count(added, product.slug) }}</p>
  						</div>
  						<div class="flex w-1/3 h-full">
								<div class="add-btn hover:bg-gray-700"
											@click="addItem({'slug':product.slug, 'name':product.name, 'price':product.price, 'quantity': 1})">
									+
								</div>
								<div class="remove-btn hover:bg-red-500"
											@click="removeItem({'slug':product.slug})">
									-
								</div>
							</div>
  					</div>
  					<div class="checkout-btn hover:bg-gray-900 w-full text-center mt-5" v-show="added.includes(product.slug)">Proceed to Checkout</div>
  					<!-- endadded box -->  					
  				</div>
  			</div>  			
  		</div>
  		
  	</div>
  </div>
</template>

<script>

export default {
	head() {
		return {
			title: `${this.product.name} | Eureka!`,
			meta: [
				{ hid: 'description', name: 'description', content: this.product.description },
				{ hid: 'og:title', name: 'og:title', content: `${this.product.name} | Eureka!` },
				{ hid: 'og:description', name: 'og:description', content: this.product.description },
				{ hid: 'og:image', name: 'og:image', content: this.product.image },
			]
		}
	},
	async asyncData({ $content, params }) {
		const product = await $content("products", params.slug).fetch();
		
		return { product };
	},
	data() {
		return {
			name: '',
		}
	},
	methods: {
		addItem(product) {
			this.$store.commit("addOneToCart", product);
			this.$store.commit("inCart", product.slug);
		},
		removeItem(product) {
			this.$store.commit("removeOneFromCart", product);
			this.$store.commit("notInCart", product.slug);
		},
	},
	computed: {
		added() {
			return this.$store.getters.added
		},
		count(added, slug) {
			if (added == null) {
				return 0
			} else {
				let count = (added, slug) => this.added.reduce((a, v) => (v === slug ? a + 1 : a), 0);
				return count
			}
		}
	},
	
	
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.add-cart {
	@apply px-5 py-3 bg-gray-500 text-white text-sm text-center font-semibold uppercase cursor-pointer;
}

.add-btn {
	@apply bg-gray-500 text-white text-center font-bold text-2xl cursor-pointer w-1/2;
}

.remove-btn {
	@apply bg-red-300 text-white text-center font-bold text-2xl cursor-pointer w-1/2;
}

.checkout-btn {
	@apply px-5 py-3 bg-gray-700 text-white text-sm text-center font-semibold uppercase cursor-pointer;
}

</style>

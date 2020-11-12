<template>
  <div class="cart-panel border-2 border-gray-700">
  	<div class="bg-gray-700 w-full flex justify-between p-3 text-white">
  		<h1 class="text-2xl">Cart</h1>
  		<p class="cursor-pointer hover:text-gray-500" @click="closeThis">Close ></p>
  	</div>
  	<div class="p-3 bg-white h-full">
  		<div class="items-list overflow-y-auto">
  			<div v-if="currentCount.length == 0" class="text-xl">No items yet.</div>
  			<div v-for="item in items">
  			
  				<!-- items list -->
  				<div v-if="item.quantity != 0" class="grid grid-cols-2 border-b space-y-2 py-2">
  					<div class="col-span-2">
  						<div class="truncate">{{ item.name }}</div>
  					</div>
						<div class="counter-btn bg-gray-100 flex justify-between items-center w-full h-10">
							<div class="text-xl hover:bg-gray-300"
										@click="addItem({'slug':item.slug, 'name':item.name, 'price':item.price, 'quantity': 1})">
									+
							</div>
							<div>{{ item.quantity }}</div>
							<div class="text-xl hover:bg-red-300"
										@click="removeItem({'slug':item.slug})">
									-
							</div>
						</div>
						<div class="text-right font-bold text-xl tracking-wide">$ {{ item.quantity * item.price }}</div>
  				</div>
  				<!-- end items list -->
  				
  			</div>
  		</div>
  		<div class="flex justify-between mt-2 border-t-4">
  			<div class="text-lg">Total</div>
  			<div class="font-bold text-xl tracking-wide">$ {{ cartTotal }}</div>
  		</div>
  		<div class="checkout-btn hover:bg-gray-900 mt-2">Checkout</div>
			<p class="text-center text-sm mt-1">Risk-free, secure checkout ✔</p>
  	</div>
  </div>
</template>

<script>
export default {
	methods: {
		closeThis() {
			this.$emit('close-panel');
		},
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
		items() {
			return this.$store.state.cart
		},
		currentCount() {
			return this.$store.getters.added
		},
		cartTotal() {
			return this.$store.getters.cartTotal
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

.cart-panel {
	position: fixed;
	top: 0;
	right: 0;
	height: 100%;
	width: 320px;
	z-index: 100;
}

.items-list {
	height: 70%;
}

.counter-btn div {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	cursor: pointer;
}


</style>

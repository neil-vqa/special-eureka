<template>
  <div class="cart-panel border-2 border-gray-700">
  	<div class="bg-gray-700 w-full flex justify-between p-3 text-white">
  		<h1 class="text-2xl">Cart</h1>
  		<p class="cursor-pointer" @click="closeThis">Close ></p>
  	</div>
  	<div class="p-3 bg-white h-full">
  		<div class="items-list">
  			<p>No no...we disabled adding and checkout.</p>
  			<hr class="border-2 mt-2">
  			<p class="text-xl">Build your E-commerce website with us now!</p>
  			<p class="">Contact Neil Van Alino</p>
  			<p>nvqa.business@gmail.com</p>
  			<a href="https://www.neilvqa.host">www.neilvqa.host</a>
  		</div>
  		<div class="checkout-btn hover:bg-gray-900">
				Checkout
			</div>
  	</div>
  </div>
</template>

<script>
export default {
	methods: {
		closeThis() {
			this.$emit('close-panel');
		},
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
	height: 80%;
	overflow: auto;
}

.items-list p {
	margin-top: 15px;
}


</style>

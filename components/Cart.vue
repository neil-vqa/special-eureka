<template>
  <div class="">
  	<!-- cart btn -->
    <div class="cart-btn cart-btn-style hover:bg-gray-900" @click="openCart">
    	<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="40" height="40" 
    				viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
				<circle cx="9" cy="19" r="2" />
				<circle cx="17" cy="19" r="2" />
				<path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
			</svg>
			<p class="text-white text-center">View</p>
    </div>
    
    <!-- cart panel -->
    <CartPanel v-show="showCart" @close-panel="openCart" />
    
    
  </div>
</template>

<script>
export default {
	data() {
		return {
			showCart: false
		}
	},
	methods: {
		openCart() {
			this.showCart = !this.showCart;
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

.cart-btn {
	position: fixed;
	top: 70%;
	right: 0;
	z-index: 90;
}

.cart-btn-style {
	@apply bg-gray-700 text-white px-3 pt-5 pb-2 cursor-pointer;
}

@media screen and (min-width: 768px) {
	.cart-btn {
		position: fixed;
		top: 40%;
		right: 0;
		z-index: 90;
	}
}




</style>

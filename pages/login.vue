<template>
  <div class="container">
    <h1>Products</h1>
    <div>
    	<div v-for="product in products" :key="product.slug">
    		<p>{{ product.name }}</p>
    		<p>{{ product.description }}</p>
    		<p>{{ product.price }}</p>
    		<img :src="product.image"/>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
	async asyncData({ $content }) {
		const posts = await $content("products").fetch();
		
		return { products };
	}
}
</script>


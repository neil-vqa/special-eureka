<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        eureka
      </h1>
      <div class="links">
        <div class="button--green" @click="sendMail">Send Mail</div>
        <div class="button--grey" @click="sendOrder">Send Data</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
	head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
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
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

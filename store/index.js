import axios from "axios";


export const state = () => ({
		cart: [],
		added: [],
});


export const getters = {
	added: (state) => state.added,
	cartTotal: (state) => {
		if (!state.cart.length) return 0;
		return state.cart.reduce((ac, next) => ac + next.quantity * next.price, 0);
	},
};


export const actions = {
	
};


export const mutations = {
	addOneToCart: (state, payload) => {
		let itemfound = state.cart.find(el => el.slug === payload.slug)
		itemfound ? itemfound.quantity++ : state.cart.push(payload)
	},
	removeOneFromCart: (state, payload) => {
		let index = state.cart.findIndex(el => el.slug === payload.slug)
		state.cart[index].quantity
			? state.cart[index].quantity--
			: state.cart.splice(index, 1)
	},
	inCart: (state, payload) => {
		state.added.push(payload)
	},
	notInCart: (state, payload) => {
		state.added.splice(state.added.indexOf(payload), 1)
	},
};









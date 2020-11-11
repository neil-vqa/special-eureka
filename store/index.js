import axios from "axios";


export const state = () => ({
		cart: [],
		added: [],
});


export const getters = {
	added: (state) => state.added,
};


export const actions = {
	
};


export const mutations = {
	addOneToCart: (state, payload) => {
		let itemfound = state.cart.find(el => el.id === payload.id)
		itemfound ? itemfound.quantity++ : state.cart.push(payload)
	},
	removeOneFromCart: (state, payload) => {
		let index = state.cart.findIndex(el => el.id === payload.id)
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









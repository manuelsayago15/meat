import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	articlesURL: 'https://5eed24da4cbc340016330f0d.mockapi.io/api/articles',
  	articles: [],
  	productsURL: 'https://5eed24da4cbc340016330f0d.mockapi.io/api/articles?filter=Productos',
  	products: [],
  	recipesURL: 'https://5eed24da4cbc340016330f0d.mockapi.io/api/articles?filter=Recetas',
  	recipes: [],
  	adviceURL: 'https://5eed24da4cbc340016330f0d.mockapi.io/api/articles?filter=Consejos',
  	advice: [],
  	display1: 'display',
  	display2: 'hide',
  	display3: 'hide',
  	display4: 'hide'
  },
  mutations: {
  	loadArticles(state, articles) {
  		state.articles = articles;
  	},

  	loadProducts(state, products) {
  		state.products = products;
  	},

  	loadRecipes(state, recipes) {
  		state.recipes = recipes;
  	},

  	loadAdvice(state, advice) {
  		state.advice = advice;
  	},

  	setDisplay(state, display) {
  		state.display1 = 'display';
  		state.display2 = 'hide';
  		state.display3 = 'hide';
  		state.display4 = 'hide';
  		console.log(state.display1);
  	},

  	setDisplay2(state, display) {
  		state.display1 = 'hide';
  		state.display2 = 'display';
  		state.display3 = 'hide';
  		state.display4 = 'hide';
  		console.log(state.display2);
  	},

  	setDisplay3(state, display) {
  		state.display1 = 'hide';
  		state.display2 = 'hide';
  		state.display3 = 'display';
  		state.display4 = 'hide';
  		console.log(state.display3);
  	},

  	setDisplay4(state, display) {
  		state.display1 = 'hide';
  		state.display2 = 'hide';
  		state.display3 = 'hide';
  		state.display4 = 'display';
  		console.log(state.display4);
  	},
  },
  actions: {
  	
  	getArticles: async function({commit, state}) {
		try {
          const response = await fetch(state.articlesURL);
          const data = await response.json();
          console.log(data);
          commit('loadArticles', data);
        } catch (error) {
          console.log(error);
        }
	},

	getProducts: async function({commit, state}) {
		try {
          const response = await fetch(state.productsURL);
          const data = await response.json();
          console.log(data);
          commit('loadProducts', data);
        } catch (error) {
          console.log(error);
        }
	},

	getRecipes: async function({commit, state}) {
		try {
          const response = await fetch(state.recipesURL);
          const data = await response.json();
          console.log(data);
          commit('loadRecipes', data);
        } catch (error) {
          console.log(error);
        }
	},

	getAdvice: async function({commit, state}) {
		try {
          const response = await fetch(state.adviceURL);
          const data = await response.json();
          console.log(data);
          commit('loadAdvice', data);
        } catch (error) {
          console.log(error);
        }
	},
  },
  modules: {
  }
})

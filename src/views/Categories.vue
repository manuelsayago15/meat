<template>

	<!-- <div class="container">
		<div class="row">
		  	<div class="about col-md-2">
			    <ul class="list-group">
				  <li class="list-group-item">Todos</li>
				  <li class="list-group-item">Productos</li>
				  <li class="list-group-item">Recetas</li>
				  <li class="list-group-item">Consejos</li>
				</ul>
			</div>
	  </div> -->

	<div class="container">
		<ul class="nav nav-tabs" id="myTab" role="tablist">
			<li class="nav-item d-flex">
			    <a class="nav-link active" :class="categoryColor" data-toggle="tab" href="#all" @click="setDisplay" role="tab" aria-controls="all">Todos</a>
			    <img class="mt-3 vertical-tab" :class="display1" src="../assets/arrow.svg" alt="arrow">
			</li>
			<li class="nav-item d-flex">
				<a class="nav-link" :class="categoryColor2" data-toggle="tab" href="#products" @click="setDisplay2" role="tab" aria-controls="products">Productos</a>
				<img class="mt-3 vertical-tab" :class="display2" src="../assets/arrow.svg" alt="arrow">
			</li>
			<li class="nav-item d-flex">
				<a class="nav-link" :class="categoryColor3" data-toggle="tab" href="#recipes" @click="setDisplay3" role="tab" aria-controls="recipes">Recetas</a>
				<img class="mt-3 vertical-tab" :class="display3" src="../assets/arrow.svg" alt="arrow">
			</li>
			<li class="nav-item d-flex">
				<a class="nav-link" :class="categoryColor4" data-toggle="tab" href="#advice" @click="setDisplay4" role="tab" aria-controls="advice">Consejos</a>
				<img class="mt-3 vertical-tab" :class="display4" src="../assets/arrow.svg" alt="arrow">
			</li>
		</ul>

		<div class="tab-content">
			<div class="tab-pane active" id="all" role="tabpanel">
		  		<div class="row">
			  		<div class="card-group col-md-4 card-style" v-for="(article, index) in articles" :key="index">
				 		<div class="card">
					    	<img class="card-img-top article-image img-fluid" :src="article.image" alt="Card Image">
					    	<div class="card-body">
					      		<h5 class="card-title">{{article.title}}</h5>
					      		<p class="card-text">{{article.content}}.</p>
					      		<!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
					    	</div>
						</div>
					</div>
		  		</div>
		  	</div>

			<div class="tab-pane" id="products" role="tabpanel">
				<div class="row">
			  		<div class="card-group col-md-4" v-for="(product, index) in products" :key="index">
				 		<div class="card">
					    	<img class="card-img-top img-fluid" :src="product.image" alt="Card Image">
					    	<div class="card-body">
					      		<h5 class="card-title">{{product.title}}</h5>
					      		<p class="card-text">{{product.content}}.</p>
					      		<!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
					    	</div>
						</div>
					</div>
		  		</div>
			</div>
			<div class="tab-pane" id="recipes" role="tabpanel">
				<div class="row">
			  		<div class="card-group col-md-4" v-for="(recipe, index) in recipes" :key="index">
				 		<div class="card">
					    	<img class="card-img-top img-fluid" :src="recipe.image" alt="Card Image">
					    	<div class="card-body">
					      		<h5 class="card-title">{{recipe.title}}</h5>
					      		<p class="card-text">{{recipe.content}}.</p>
					      		<!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
					    	</div>
						</div>
					</div>
		  		</div>
			</div>
			<div class="tab-pane" id="advice" role="tabpanel">
				<div class="row">
			  		<div class="card-group col-md-4" v-for="(advice, index) in advice" :key="index">
				 		<div class="card">
					    	<img class="card-img-top img-fluid" :src="advice.image" alt="Card Image">
					    	<div class="card-body">
					      		<h5 class="card-title">{{advice.title}}</h5>
					      		<p class="card-text">{{advice.content}}.</p>
					      		<!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
					    	</div>
						</div>
					</div>
		  		</div>
			</div>
		</div>
	</div>
	<!-- </div> -->
</template>

<script>
	import { mapState, mapMutations, mapActions } from "vuex";
	export default {
	  	name: 'Products',

		methods: {
			...mapMutations(['setDisplay', 'setDisplay2', 'setDisplay3', 'setDisplay4']),
			...mapActions(['getArticles', 'getProducts', 'getRecipes', 'getAdvice']),
		},

		computed: {
			...mapState(['articles', 'products', 'recipes', 'advice', 'display1', 'display2', 'display3', 'display4', 'categoryColor', 'categoryColor2', 'categoryColor3', 'categoryColor4']),
		},

		created() {
			this.getArticles();
			this.getProducts();
			this.getRecipes();
			this.getAdvice();
		}
	}

</script>

<style>
	.heading-shape {
		font-family: 'Caveat', cursive;
	}

	.display {
		display: inline-block;
	}

	.hide {
		display: none;
	}
	.vertical-tab {
		margin-left: 100px !important;
		height: 15px;
	}

	li {
		justify-content: space-between;
	}
	.nav.nav-tabs {
	    float: left;
	    display: block;
	    margin-right: 20px;
	    border-bottom:0;
	    border-right: 1px solid #ddd;
	    padding-right: 15px;
	}
	.nav-tabs .nav-link {
	    border: 1px solid transparent;
	    border-top-left-radius: .25rem;
	    border-top-right-radius: .25rem;
	}

	.nav-tabs .nav-link.active {
	    border-color: transparent !important;
	}
	.nav-tabs .nav-link {
	    border: 1px solid transparent;
	    border-top-left-radius: 0rem!important;
	    border-top-right-radius: 0rem!important;
	}
	.tab-content>.active {
	    display: block;
	    min-height: 165px;
	}
	.nav.nav-tabs {
	    float: left;
	    display: block;
	    margin-right: 20px;
	    border-bottom: 0;
	    border-right: 1px solid transparent;
	    padding-right: 15px;
	}

	.card-style {
		margin-top: 35px;
	}

	.category-color {
		color: #D8AD3D !important;
	}

	.no-color-text {
		color: #3F3356;
	}
</style>
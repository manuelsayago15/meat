<template>
  <div class="home">
    <Header/>
    <div class="container">
    	<h1 class="text-center">Nuestros Artículos</h1>
    	
    </div>
    <div class="container-heading text-center">
    	<img src="../assets/heading-shape.png" alt="heading-shape">
    </div>
    <Categories></Categories>
    <Form></Form>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Categories from '@/views/Categories.vue'
import Form from '@/components/Form.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Categories,
    Form
  }
}
</script>

<style>
	h1 {
		font-size: 80px !important;
		font-family: 'Caveat', cursive;
	}

	.container-heading {
		margin-top: -63px;
		margin-bottom: 80px;
	}
</style>

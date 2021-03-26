<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="mb-4 col-md-12">
				    <h1 class="font-weight-bold text-center my-4">Contáctanos</h1>
				    <div class="container-heading text-center">
				    	<img src="../assets/heading-shape.png" alt="heading-shape">
				    </div>
				    <form class="form-margin">
					    <div class="form-group row">
					        <!-- <label for="inputEmail" class="col-md-2 col-form-label">Nombre</label> -->
					        <div class="col-md-4">
					        	<label for="name">Nombre</label>
					            <input class="form-control" v-model="name" id="name">
					        </div>
					        <div class="col-md-4">
					        	<label for="lastname">Apellido</label>
					            <input class="form-control" v-model="lastname" id="lastname">
					        </div>
					    </div>
					    <div class="form-group row">
					        <div class="col-md-4">
					        	<label for="mail">Mail</label>
					            <input type="email" v-model="email" class="form-control" id="mail">
					        </div>
					        <div class="col-md-4">
					        	<label for="phone">Teléfono</label>
					            <input class="form-control" v-model="phone" id="phone">
					        </div>
					    </div>

					    <div class="form-group row">
					        <div class="ml-auto button">
					            <button type="button" @click="sendFormData" :disabled="this.disabled" class="rounded-pill">Enviar</button>
					        </div>
					    </div>
					</form>

				</div>
				
			</div>
			
		</div>
	</div>
	
</template>

<script>
	import { mapState, mapMutations, mapActions } from "vuex";
	export default {
	  	name: 'Products',
	  	data() {
	  		return {
	  			post: 'https://5eed24da4cbc340016330f0d.mockapi.io/api/subscribe',
	  			name: '',
	  			lastname: '',
	  			email: '',
	  			phone: '',
	  			disabled: true
	  		}
	  	},
		methods: {
			sendFormData() {
				const requestOptions = {
				    method: 'POST',
				    headers: { 'Content-Type': 'application/json' },
				    body: JSON.stringify({ firstname: this.name, lastname: this.lastname, mail: this.email, phone: this.phone })
				};
				fetch(this.post, requestOptions)
				.then(async response => {

					const data = await response.json();
					// check for error response
					if (!response.ok) {
					    // get error message from body or default to response status
					    const error = (data && data.message) || response.status;
					    return Promise.reject(error);
					}
				})
				.catch(error => {
				  this.errorMessage = error;
				  console.error('There was an error!', error);
				});
			},
		},

		computed: {
		},

		created() {
			
		}
	}

</script>

<style>
	.form-margin {
		margin-left: 20%;
	}

	label {
		font-weight: bold;
	}

	h1 {
		font-family: 'Caveat', cursive;
		font-size: 80px !important;
	}

	.container-heading {
		margin-top: -63px;
		margin-bottom: 80px;
	}

	.button {
		margin-right: 41%;
	}

	button {
		width: 203%;
    	height: 150%;
    	background-color: #D8AD3D;
    	border: none;
    	color: #fff;
    	font-family: 'Open Sans', sans-serif;
	}

	/*button:disabled {
		background-color: #CFCFCF;
	}*/

	button:hover {
		background-color: #009CD9;
	}
</style>
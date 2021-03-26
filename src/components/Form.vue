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
					            <input class="form-control" ref="name" required v-model="name" @blur="formValidation(), nameValidation($refs.name)" id="name">
					            <div v-if="this.isNameValid === false">
					            	<p class="error">Ingrese su nombre</p>
					            </div>
					        </div>
					        <div class="col-md-4">
					        	<label for="lastname">Apellido</label>
					            <input class="form-control" ref="lastname" v-model="lastname" @blur="lastnameValidation($refs.lastname), formValidation()" id="lastname">
					            <div v-if="this.isLastNameValid === false">
					           		<p class="error">Ingrese su apellido</p>
					            </div>
					        </div>
					    </div>
					    <div class="form-group row">
					        <div class="col-md-4" :class="isEmailValid()" ref="email">
					        	<label for="mail">Mail</label>
					            <input type="email" v-model="email" ref="mail" @blur="emailValidation($refs.email.className), formValidation()" class="form-control" id="mail">
					            <div v-if="emailIsValid === false">
					            	<p class="error">Ingrese su email</p>
					            </div>
					        </div>
					        <div class="col-md-4">
					        	<label for="phone">Teléfono</label>
					            <input class="form-control" ref="phone" v-model="phone" @blur="phoneValidation($refs.phone), formValidation()" id="phone">
					            <div v-if="isPhoneValid === false">
					            	<p class="error">Ingrese su teléfono</p>
					            </div>
					        </div>
					    </div>

					    <div class="form-group row">
					        <div class="ml-auto button">
					            <button type="button" @click="sendFormData" :class="noDisabled" :disabled="this.disabled" class="rounded-pill disabled-button">Enviar</button>
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
	import VueSweetalert2 from 'vue-sweetalert2';
  	import Swal from 'sweetalert2'
	export default {
	  	name: 'Products',
	  	data() {
	  		return {
	  			post: 'https://5eed24da4cbc340016330f0d.mockapi.io/api/subscribe',
	  			name: '',
	  			isNameValid: '',
	  			isLastNameValid: '',
	  			lastname: '',
	  			email: '',
	  			phone: '',
	  			isPhoneValid: '',
	  			emailIsValid: '',
	  			disabled: true,
	  			reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
	  		}
	  	},
		methods: {
			...mapMutations(['setDisabled']),
			formValidation() {
				if (this.name === '' || this.lastname === '' || this.email === '' || this.phone === ''
					|| this.isNameValid === false || this.isLastNameValid === false || this.emailIsValid === false
					|| this.isPhoneValid === false) {
					this.disabled = true;
					this.setDisabled(false);		
				} else {
					this.disabled = false;
					this.setDisabled(true);
				}
			},

			nameValidation(name) {
				if(this.name === '') {
					this.isNameValid = false;
				} else {
					this.isNameValid = true;
				}
				
			},

			lastnameValidation() {
				if(this.lastname === '') {
					this.isLastNameValid = false;
				} else {
					this.isLastNameValid = true;
				}
				
			},

			emailValidation(mail){
				console.log(mail);
				if (mail === 'col-md-4 has-error') {
					this.emailIsValid = false;
				} else {
					this.emailIsValid = true;
				}
			},

			isEmailValid: function() {
		      return (this.email == "")? "" : (this.reg.test(this.email)) ? 'has-success' : 'has-error';
		    },

			phoneValidation() {
				if(this.phone === '') {
					this.isPhoneValid = false;
				} else {
					this.isPhoneValid = true;
				}
			},

			sendFormData() {
				
				const requestOptions = {
				    method: 'POST',
				    headers: { 'Content-Type': 'application/json' },
				    body: JSON.stringify({ firstname: this.name, lastname: this.lastname, mail: this.email, phone: this.phone })
				};
				fetch(this.post, requestOptions)
				.then(async response => {



					const data = await response.json();
					Swal.fire({
					  icon: 'success',
					  title: 'Datos enviados satisfactioramente',
					  showConfirmButton: false,
					  timer: 1500
					})
					if (!response.ok) {
					    const error = (data && data.message) || response.status;
					    return Promise.reject(error);
					}
				})
				.catch(error => {
				  this.errorMessage = error;
				  console.error('There was an error!', error);
				  Swal.fire({
					  icon: 'error',
					  title: 'Oops...',
					  text: 'Ocurrió un error al enviar los datos' + ' ' + '(error: ' + this.errorMessage + ')',
					})
				});
			},
		},

		computed: {
			...mapState(['noDisabled'])
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

	a {
		color: #3F3356 !important;
		border: none !important;
		text-transform: uppercase;
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

	input:focus {
		border-color: #D8AD3D !important;
	}

	.error {
		color: #B72C2C;
		font-size: 14px;

	}

	.disabled-button {
		background-color: #CFCFCF;
	}

	.no-disabled-button {
		background-color: #D8AD3D!important;
	}
</style>
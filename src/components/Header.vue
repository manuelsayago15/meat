<template>
  <div>
    <!-- Navigation -->
    <header class="heading-styles">
      <div class="container">
        <div class="row">
          <div class="mt-5 col-md-2">
            <img src="../assets/logo.svg" alt="logo">
          </div>
          
          <div class="mt-5 ml-auto">
            <img class="facebook" src="../assets/facebook-icon.svg" alt="facebook">
            <img class="instagram" src="../assets/instagram-icon.svg" alt="instagram">
            <img class="youtube" src="../assets/youtube-icon.svg" alt="youtube">
          </div>
        </div>
        <div class="row">
          <div class="head-text col-md-5">
            <div class="container-shape">
              <img class="shape-img" src="../assets/hero-shape.png" alt="hero-shape">
            </div>
            <div class="container-text">
              <h1 class="logo-text">El secreto de tu cocina</h1>
            </div>
          </div>
        </div>
      </div>
    </header>

    


  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}*/

.heading-styles {
  background-position: center;
  background-image: url('../assets/hero-background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  /*min-height: 500px;*/
  height: 800px;
}

.logo-text {
  font-family: 'Caveat', cursive;
}

.head-text {
  margin-top: 100px !important;
}

h1 {
  font-size: 100px !important;
      text-indent: 22px;
}

.container-shape {
    margin-top: 166px;
    position: absolute;
    margin-left: -111%;
}

.shape-img {
  width: 1100px;
}

.container-text {
  position: absolute;
}

.facebook {
  border-radius: 50%;
  border: 3px solid #009CD9;
  padding: 13px 20px;
  margin-right: 20px;
}

.instagram {
  border-radius: 50%;
  border: 3px solid #B72C2C;
  padding: 15px 16px;
  margin-right: 20px;
}

.youtube {
  border-radius: 50%;
  border: 3px solid #D8AD3D;
  padding: 17px 15px;
}
</style>

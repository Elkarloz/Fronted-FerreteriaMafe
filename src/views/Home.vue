<template>
  <div class="home col-md-12">
    <div class="row" style="padding-top: 4%">
      <div class="ml-auto mr-auto my-auto pannel-login" >
        <h3>FERRETERIA MAFE</h3>
        
        <h2>C&N</h2>
        <h3>CONTROL DE INVENTARIO</h3>
        <br>
         <img src="../resources/silueta.png" height="90px"  width="100px">
         <br>
        <br>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">*</span>
          </div>
          <input type="text" class="form-control" placeholder="Usuario" aria-label="Username" aria-describedby="basic-addon1" id="user">
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">*</span>
          </div>
          <input type="password" class="form-control" placeholder="Contraseña" aria-label="Username" aria-describedby="basic-addon1" id="password">
        </div>
        <button type="button" class="btn btn-dark" @click="login()">Ingresar</button>
      </div>
    </div>
  </div>  
</template>

<style>
  .home{
     
    padding: 0;
    margin: 0;
    background-image: url("../resources/titi.jpg");

    background-repeat: no-repeat;
    background-size: 100%;
    height: 100vh;


    
    
    
  }
  .pannel-login{
    width: 600px;
	  height: 500px;
    background: orangered;
    border-radius: 5px;
    padding: 4%;
   color:rgb(8, 8, 8);
   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
   
  
	 
  }
</style>

<script>
export default {
  data(){
    return{
      
      };
    },
    methods:{
      login(){
        const user = document.getElementById('user').value;
        const password = document.getElementById('password').value;

        if (user === "admin123" && password === "123") {
          window.location.href = '#/dashboard'

        }else if(user === "" || password === ""){
          alert("Debe llenar los dos campos")
        }else{
          alert("El usuario o contraseña son incorrecto")
        }
      }
    }
}
</script>
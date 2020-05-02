<template>
  <div class="home col-md-12">
    <div class="row" style="padding-top: 10%">
      <div class="ml-auto mr-auto my-auto pannel-login" >
        <h1>FERRETERIA MAFE</h1>
        <h3>C&N</h3>
        <br>
        <h2>CONTROL DE INVENTARIO</h2>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">#</span>
          </div>
          <input type="text" class="form-control" placeholder="Usuario" aria-label="Username" aria-describedby="basic-addon1" id="user">
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">#</span>
          </div>
          <input type="password" class="form-control" placeholder="Contraseña" aria-label="Username" aria-describedby="basic-addon1" id="password">
        </div>
        <button type="button" class="btn btn-outline-success" @click="login()">Ingresar</button>
      </div>
    </div>
  </div>  
</template>

<style>
  .home{
    padding: 0;
    margin: 0;
    background-image: url("../resources/251.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100vh;
  }
  .pannel-login{
    background: white;
    border-radius: 10px;
    padding: 5%;
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
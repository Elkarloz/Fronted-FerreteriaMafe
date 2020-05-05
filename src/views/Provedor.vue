<template>
  <div class="row col-md-12" id="card">
    <div class="col-md-8" style="padding-top: 5%">
      <form class="form-inline my-2 my-lg-0 text-center" id="search-mobile"><!-- Btn input -->
        <input class="form-control mr-sm-2 ml-auto mr-auto" type="search" placeholder="Search" aria-label="Search" id="formulario" @keyup="buscar()">
        <button class="btn btn-outline-success my-2 my-sm-0 ml-auto mr-auto" type="submit" id="btn" >Search</button>
      </form>
      <div style="padding-top: 5%;"></div><!-- Tabla -->
      <div class="ml-auto mr-auto" id="table-mod" style="overflow-y: scroll">
        <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
            <th class="text-center">Nit</th>
            <th class="text-center">Teléfono</th>
            <th class="text-center">Nombre</th>
            <th class="text-center">Apellido</th>
            <th class="text-center">Sexo</th>
            <th class="text-center">Estado</th>
            <th class="text-center">Accion</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in proveedores" :key="index">
              <th class="text-center">{{item.ProvNit}}</th>
              <td class="text-center">{{item.ProvTelefono}}</td>
              <td class="text-center">{{item.ProvEmail}}</td>
              <td class="text-center">{{item.ProvNEmpresa}}</td>
              <td class="text-center">{{item.ProvTipProducto}}</td>
              <td class="text-center">{{item.ProvCiudad}}</td>
              <td class="text-center">{{item.ProvDireccion}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-md-4 my-auto"> <!-- inputs -->
        <div class="input-group">
          <span class="my-auto" style="padding-right: 5px;">Nit:</span>
          <input type="text" aria-label="First name" class="form-control" v-model="datos.ProvNit">
        </div>                       
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px;">Teléfono:</span>
          <input type="text" aria-label="First name" class="form-control" v-model="datos.ProvTelefono">
        </div>                       
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px;">Email:</span>
          <input type="text" aria-label="First name" class="form-control" v-model="datos.ProvEmail">
        </div>                       
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px;">N.Empresa: </span>
          <input type="text" aria-label="First name" class="form-control" v-model="datos.ProvNEmpresa">
        </div>                                         
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px;">Tipo Producto: </span>
          <input type="text" aria-label="First name" class="form-control" v-model="datos.ProvTipProducto">
        </div>                       
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px;">Cuidad: </span>
          <input type="text" aria-label="First name" class="form-control" v-model="datos.ProvCiudad">
        </div>                       
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px;">Dirección: </span>
          <input type="text" aria-label="First name" class="form-control" v-model="datos.ProvDireccion">
        </div>                       
        <div class="separacion row"><!-- Btns -->
              <div class="col-md-6">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" id="btn" @click.prevent="agregarProv()">Agregar</button> 
              </div>
              <div class="col-md-6">
                <button class="btn btn-outline-warning my-2 my-sm-0" type="submit" id="btn" >Actualizar</button> 
              </div>
        </div>                       
        <div class="separacion">
            <button class="btn btn-outline-danger my-2 my-sm-0" type="submit" id="btn" >Eliminar</button> 
        </div>                       
    </div>
  </div>
</template>
<style>

#table-mod{
  height: 500px;
}

#separacion{
  padding: 0;
  margin: 0;
  
}
</style>

<script>
export default {
  data(){
    return{
      ruta: 'http://localhost:4000/api/proveedor',
      datos: {ProvNit: '', ProvTelefono: '', ProvEmail: '', ProvNEmpresa: '', ProvTipProducto: '', ProvCiudad: '', ProvDireccion: ''},
      proveedores: []
    };
  },
  created(){
    this.consultarProv()
  },
  methods:{
    agregarProv(){
      fetch(this.ruta,{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json'
        },
        body:JSON.stringify(this.datos)
      })
      .then( res => res.json())
      .then(data=> { 
            console.log(data);
            this.consultarProv()
        })
        .catch(e =>{
            console.log(e);
        })
    },
    consultarProv(){
      fetch(this.ruta,{
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json'
        },
      })
      .then( res => res.json())
      .then(data=> {
            this.proveedores = data;
            console.log(this.proveedores);
        })
        .catch(e =>{
            console.log(e);
        })
    }
  }
}
</script>
<template>
  <div class="row col-md-12" id="card">
    <div class="col-md-8" style="padding-top: 5%">
      <form class="form-inline my-2 my-lg-0 text-center" id="search-mobile"><!-- Btn input consultar -->
        <input class="form-control mr-sm-2 ml-auto mr-auto" type="search" placeholder="Search" aria-label="Search" id="formulario" @keyup="buscar()" autocomplete=off>
        <button class="btn btn-outline-success my-2 my-sm-0 ml-auto mr-auto" type="submit" id="btn" >Search</button>
      </form>
      <div style="padding-top: 5%;"></div><!-- Tabla -->
      <div class="ml-auto mr-auto" id="table-mod" style="overflow-y: scroll;">
        <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
            <th class="text-center">Nit</th>
            <th class="text-center">Teléfono</th>
            <th class="text-center">Email</th>
            <th class="text-center">N Empresa</th>
            <th class="text-center">Tipo Producto</th>
            <th class="text-center">Cuidad</th>
            <th class="text-center">Direccion</th>
            <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in proveedores" :key="index">
              <th class="text-center">{{item.ProvNit}}</th>
              <th class="text-center">{{item.ProvTelefono}}</th>
              <th class="text-center">{{item.ProvEmail}}</th>
              <th class="text-center">{{item.ProvNEmpresa}}</th>
              <th class="text-center">{{item.ProvTipProducto}}</th>
              <th class="text-center">{{item.ProvCiudad}}</th>
              <th class="text-center">{{item.ProvDireccion}}</th>
              <th>
                <input type="radio" name="radio" @click="consultarProvID(item.ProvId)" data-toggle="modal" data-target="#exampleModal">
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-md-4 my-auto" v-if="this.editar === true">
        <div class="input-group">
          <span class="my-auto" style="padding-right: 5px;">Nit: editar</span>
          <input type="text" aria-label="First name" class="form-control" v-model="proveedoresID.ProvNit">
        </div>                       
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px;">Teléfono:</span>
          <input type="text" aria-label="First name" class="form-control" v-model="proveedoresID.ProvTelefono">
        </div>                       
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px;">Email:</span>
          <input type="text" aria-label="First name" class="form-control" v-model="proveedoresID.ProvEmail">
        </div>                       
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px;">N.Empresa: </span>
          <input type="text" aria-label="First name" class="form-control" v-model="proveedoresID.ProvNEmpresa">
        </div>                                         
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px;">Tipo Producto: </span>
          <input type="text" aria-label="First name" class="form-control" v-model="proveedoresID.ProvTipProducto">
        </div>                       
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px;">Cuidad: </span>
          <input type="text" aria-label="First name" class="form-control" v-model="proveedoresID.ProvCiudad">
        </div>                       
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px;">Dirección: </span>
          <input type="text" aria-label="First name" class="form-control" v-model="proveedoresID.ProvDireccion">
        </div>           
        <div class="separacion row"><!-- Btns -->
              <div class="col-md-6">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" id="btn" disabled>Agregar</button>   
              </div>
              <div class="col-md-6">
                <button class="btn btn-outline-warning my-2 my-sm-0" type="submit" id="btn" @click="ActualizarProv()">Actualizar</button> 
              </div>
        </div>                       
        <div class="separacion">
            <button class="btn btn-outline-danger my-2 my-sm-0" type="submit" id="btn" @click="EliminarProv(proveedoresID.ProvId)">Eliminar</button> 
        </div>             
    </div>  
    <div class="col-md-4 my-auto" v-else> <!-- inputs default -->
        <div class="input-group">
          <span class="my-auto" style="padding-right: 5px;">Nit:</span>
          <input type="text" aria-label="First name" class="form-control" v-model="datos.ProvNit">
        </div>                       
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px;">Teléfono:</span>
          <input type="text" aria-label="First name" class="form-control" v-model="datos.ProvTelefono"  >
        </div>                       
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px;">Email:</span>
          <input type="text" aria-label="First name" class="form-control" v-model="datos.ProvEmail"  >
        </div>                       
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px;">N.Empresa: </span>
          <input type="text" aria-label="First name" class="form-control" v-model="datos.ProvNEmpresa"  >
        </div>                                         
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px;">Tipo Producto: </span>
          <input type="text" aria-label="First name" class="form-control" v-model="datos.ProvTipProducto"  >
        </div>                       
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px;">Cuidad: </span>
          <input type="text" aria-label="First name" class="form-control" v-model="datos.ProvCiudad"  >
        </div>                       
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px;">Dirección: </span>
          <input type="text" aria-label="First name" class="form-control" v-model="datos.ProvDireccion"  >
        </div>           
        <div class="separacion row"><!-- Btns -->
              <div class="col-md-6">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" id="btn" @click.prevent="agregarProv()">Agregar</button>   
              </div>
              <div class="col-md-6">
                <button class="btn btn-outline-warning my-2 my-sm-0" type="submit" id="btn" >Actualizar</button> 
              </div>
        </div>                       
        <div class="separacion row"><!-- Btns -->
              <div class="col-md-6">
                <button class="btn btn-outline-danger my-2 my-sm-0" type="submit" id="btn" >Eliminar</button>   
              </div>
              <div class="col-md-6">
                <a href="#/dashboard"><button class="btn btn-outline-info my-2 my-sm-0" type="submit" id="btn">Atrás</button></a>
              </div>
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
      ruta: 'http://localhost:4000/api/proveedor/',
      datos: {ProvNit: '', ProvTelefono: '', ProvEmail: '', ProvNEmpresa: '', ProvTipProducto: '', ProvCiudad: '', ProvDireccion: ''},
      proveedores: [],
      proveedoresID: {ProvNit: '', ProvTelefono: '', ProvEmail: '', ProvNEmpresa: '', ProvTipProducto: '', ProvCiudad: '', ProvDireccion: ''}, // actualizar y consulta por ID
      editar: false
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
            this.consultarProv();
            this.limpiar();
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
        })
        .catch(e =>{
            console.log(e);
        })
    },
    consultarProvID(codigo){
      fetch(this.ruta + `/${codigo}`,{
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json'
        },
      })
      .then( res => res.json())
      .then( data=> {
          this.proveedoresID = data[0];
          this.editar = true
        })
        .catch(e =>{
            console.log(e);
        })
    },
    ActualizarProv(){
      fetch(this.ruta,{
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Accept':'application/json',
          'Content-type': 'application/json'
        },
        body:JSON.stringify(this.proveedoresID)
      })
      .then( res => res.json())
      .then( data=> {
          this.consultarProv();
          this.limpiar();
          this.editar = false
        })
        .catch(e =>{
            console.log(e);
        })
    },
    EliminarProv(codigo){
      fetch(this.ruta + `${codigo}`,{
        method: 'DElETE',
        mode: 'cors',
        headers: {
          'Accept':'application/json',
          'Content-type': 'application/json'
        },
      })
      .then( res => res.json())
      .then( data=> {
          this.consultarProv();
          this.limpiar();
          this.editar = false
        })
        .catch(e =>{
            console.log(e);
        })
    },
    limpiar(){
      this.datos = {ProvNit: '', ProvTelefono: '', ProvEmail: '', ProvNEmpresa: '', ProvTipProducto: '', ProvCiudad: '', ProvDireccion: ''}
      this.proveedoresID = {ProvNit: '', ProvTelefono: '', ProvEmail: '', ProvNEmpresa: '', ProvTipProducto: '', ProvCiudad: '', ProvDireccion: ''}
    }

  }
}
</script>

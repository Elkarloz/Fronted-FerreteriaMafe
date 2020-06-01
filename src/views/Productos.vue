<template>
  <div id="card"> <!-- inputs -->
    <h1 style="padding-top: 5%">PRODUCTOS</h1>
    <form @submit.prevent="agregarProd()">
        <div class="col-md-12 my-auto row">
            <div class="input-group col-md-4">
                <span class="my-auto" style="padding-right: 5px;">N.Producto: </span>
                <input type="text" aria-label="First name" class="form-control" required v-model="producto.ProdNombre">
            </div> 
            <div class="input-group col-md-4">
                <span class="my-auto" style="padding-right: 5px;">Marca: </span>
                <input type="text" aria-label="First name" class="form-control" required v-model="producto.ProdMarca">
            </div> 
            <div class="input-group col-md-4">
                <span class="my-auto" style="padding-right: 5px;">Categoria: </span>
                <input type="text" aria-label="First name" class="form-control" required v-model="producto.ProdCategoria">
            </div> 
        </div>
        <div class="col-md-12 my-auto separacion row">
            <div class="input-group col-md-4" style="padding-top: 1%">
                <span class="my-auto" style="padding-right: 5px;">Precio: </span>
                <input type="text" aria-label="First name" class="form-control" required v-model="producto.ProdPrecio">
            </div> 
            <div class="input-group col-md-4" style="padding-top: 1%">
                <span class="my-auto" style="padding-right: 5px;">Iva:</span>
                <input type="text" aria-label="First name" class="form-control" required v-model="producto.ProdIva">
            </div> 
            <div class="input-group col-md-4" style="padding-top: 1%">
            
            </div> 
        </div>
        <div class="col-md-12 row" style="padding-top: 1%"><!-- btn -->
            <div class="col-md-8">
                <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" id="formulario" v-model="nombre">
            </div>
            <div class="col-md-4"> 
                <div class="col-md-12 row">
                    <button class="btn btn-outline-success ml-auto mr-auto" type="button" @click="consultarProdParam(nombre)">Buscar</button>
                    <button class="btn btn-outline-success ml-auto mr-auto" type="submit" >Agregar</button>
                    <button class="btn btn-outline-success ml-auto mr-auto" type="button" @click="consultarAgotado()">Productos agotados</button> 
                </div>
            </div>
        </div>
    </form>
    <!-- Tabla -->
    <div class="col-md-12 row" style="padding-top: 5%">
        <div class="col-md-1"></div>
        <div class="col-md-10">
            <div class="ml-auto mr-auto" id="table-mod" style="overflow-y: scroll;">
                <table class="table table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th class="text-center">Código</th>
                        <th class="text-center">Nombre</th>
                        <th class="text-center">Marca</th>
                        <th class="text-center">Precio</th>
                        <th class="text-center">Stock</th>
                    </tr>
                </thead>
                <tbody>
                           
                    <tr tr v-for="(item, index) in datos" :key="index">
                        <th>{{item.ProdId}}</th>
                        <th>{{item.ProdNombre}}</th>
                        <th>{{item.ProdMarca}}</th>
                        <th>{{item.ProdPrecio}}</th>
                        <th>{{item.ProdStock}}</th>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="col-md-12 row" style="padding: 5% 0">
        <div class="col-md-10">
        </div>
        <div class="col-md-2">
            <a href="#/dashboard"><button class="btn btn-outline-success ml-auto mr-auto" type="button" >Atrás</button></a>
        </div>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return{
      ruta: 'http://localhost:4000/api/producto',
      datos: '',
      nombre: '',
      producto: {ProdNombre: '',ProdMarca: '',ProdCategoria: '',ProdPrecio: '',ProdIva: '',ProdStock: ''}
    };
  },
  created(){
    this.consultarProv();
  },
  methods:{
    consultarProv(){
      fetch(this.ruta + "/",{
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json'
        },
      })
      .then( res => res.json())
      .then(data=> { 
            this.datos = data
        })
        .catch(e =>{
            console.log(e);
        })
    },
    consultarAgotado(){
      fetch(this.ruta + "/agotado",{
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json'
        },
      })
      .then( res => res.json())
      .then(data=> { 
            this.datos = data
        })
        .catch(e =>{
            console.log(e);
        })
    },
    agregarProd(){
      fetch(this.ruta + "/",{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json'
        },
        body:JSON.stringify(this.producto)
      })
      .then( res => res.json())
      .then(data=> { 
            this.consultarProv();
            this.limpiar()
        })
        .catch(e =>{
            console.log(e);
        })
    },
    consultarProdParam(nombre){
      fetch(this.ruta + "/param"+ `/${nombre}`,{
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json'
        },
      })
      .then( res => res.json())
      .then( data=> {
          this.datos = data
        })
        .catch(e =>{
            console.log(e);
        })
    },
    limpiar(){
      this.producto = {ProdNombre: '',ProdMarca: '',ProdCategoria: '',ProdPrecio: '',ProdIva: '',ProdStock: ''}
    }
  }
}
</script>

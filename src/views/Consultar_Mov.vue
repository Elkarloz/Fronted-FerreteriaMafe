<template>
    <div> 
        <div id="card">
            <h1 style="padding-top: 2%" id="negro">BUSCAR MOVIMIENTOS</h1>
                <div class="col-md-4 mx-auto" style="padding-top: 3%">
                    <div class="input-group my-2">
                        <span class="my-auto" style="padding-right: 5px;" id="negro">Ingresar fecha: </span>
                        <input type="date" aria-label="First name" class="form-control" required v-model="fecha">
                    </div>               
                </div>
                <div class="col-md-4 mx-auto row" style="padding-top: 3%" >
                    <button class="btn btn-dark ml-auto mr-auto" type="button" @click="consultarfechaE()">Buscar Ingreso</button>              
                    <button class="btn btn-dark ml-auto mr-auto" type="button" @click="consultarfechaS()">Buscar Salida</button>              
                </div>
            <div class="col-md-8 mx-auto" id="box">
                <div class="col-md-6 mx-auto">
                    <div class="input-group my-2">
                        <span class="my-auto" style="padding-right: 5px;" id="negro">Ingresar fecha inicio: </span>
                        <input type="date" aria-label="First name" class="form-control" v-model="fecha1">
                    </div>               
                </div>
                <div class="col-md-6 mx-auto">
                    <div class="input-group my-2">
                        <span class="my-auto" style="padding-right: 5px;" id="negro">Ingresar fecha final : </span>
                        <input type="date" aria-label="First name" class="form-control" v-model="fecha2">
                    </div>               
                </div>
                <div class="col-md-8 mx-auto row" style="padding-top: 3%" >
                    <button class="btn btn-dark ml-auto mr-auto" type="button" @click="consultarrangoE()">Buscar Ingreso</button>              
                    <button class="btn btn-dark ml-auto mr-auto" type="button" @click="consultarrangoS()">Buscar Salida</button>              
                </div>
            </div>
        </div>
        <!-- Modal Consulta -->
        <div class="modal fade " id="Consulta" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content mx-auto">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Consulta</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div style="padding-top: 5%;"></div><!-- Tabla -->
                            <div class="ml-auto mr-auto" id="table-mod" style="overflow: scroll;">
                                <table class="table table-hover">
                                <thead class="thead-dark">
                                    <tr>
                                        <th class="text-center">Nombre del producto</th>
                                        <th class="text-center">Descripcion</th>
                                        <th class="text-center">Marca</th>
                                        <th class="text-center">Cantidad</th>
                                        <th class="text-center">Total</th>
                                        <th class="text-center">Fecha</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in datos" :key="index">
                                        <th class="text-center">{{item.ProdNombre}}</th>
                                        <th class="text-center">{{item.ProdDescripcion}}</th>
                                        <th class="text-center">{{item.ProdMarca}}</th>
                                        <th class="text-center">{{item.MovCantidad}}</th>
                                        <th class="text-center">{{item.MovTotal}}</th>
                                        <th class="text-center">{{item.MovFecha.split('T')[0]}}</th>
                                    </tr>
                                </tbody>
                                </table>
                            </div> 
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
        </div>
        <!-- Modal no busqueda -->
        <div class="modal fade " id="NoConsulta" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content mx-auto">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Consulta</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h3>No se encontraron resultados</h3>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
#box{
    border: 3px solid #0000003b;
    margin: 5%;
    padding: 5%;
    width: 85%;
    height: 45%;
    
}
#negro{
    color:rgb(8, 8, 8);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>

<script>
export default {
  data(){
    return{
      ruta: 'http://localhost:4000/api/buscar_mov',
      datos: {},
      fecha: '',
      fecha1: '',
      fecha2: '',
      estado: ''
    };
  },
  created(){
    this.Consulta()
  },
  methods:{
    consultarfechaE(){ 
        this.estado = 'Entrada'
        fetch(this.ruta+"/entrada/"+`${this.fecha}`+"/"+`${this.estado}`,{
            method: 'GET',
            mode: 'cors',
            headers: {
            'Accept':'application/json',
            'Content-type':'application/json'
            },
        })
        .then( res => res.json())
        .then(data=> {
            console.log(data[0]);
                if (data[0] !== undefined) {
                    this.datos = data
                    this.Consulta()     
                }else{
                    this.NoConsulta()
                }
            })
            .catch(e =>{
                console.log(e);
            })
    },
    consultarfechaS(){ 
        this.estado = 'Salida'
        fetch(this.ruta+"/entrada/"+`${this.fecha}`+"/"+`${this.estado}`,{
            method: 'GET',
            mode: 'cors',
            headers: {
            'Accept':'application/json',
            'Content-type':'application/json'
            },
        })
        .then( res => res.json())
        .then(data=> {
            console.log(data[0]);
                if (data[0] !== undefined) {
                    this.datos = data
                    this.Consulta()     
                }else{
                    this.NoConsulta()
                }
            })
            .catch(e =>{
                console.log(e);
            })
    },
    consultarrangoE(){ 
        this.estado = 'Entrada'
        fetch(this.ruta+"/r/"+`${this.fecha1}`+"/"+`${this.fecha2}`+"/"+`${this.estado}`,{
            method: 'GET',
            mode: 'cors',
            headers: {
            'Accept':'application/json',
            'Content-type':'application/json'
            },
        })
        .then( res => res.json())
        .then(data=> {
            console.log(data[0]);
                if (data[0] !== undefined) {
                    this.datos = data
                    this.Consulta()     
                }else{
                    this.NoConsulta()
                }
            })
            .catch(e =>{
                console.log(e);
            })
    },
    consultarrangoS(){ 
        this.estado = 'Salida'
        fetch(this.ruta+"/r/"+`${this.fecha1}`+"/"+`${this.fecha2}`+"/"+`${this.estado}`,{
            method: 'GET',
            mode: 'cors',
            headers: {
            'Accept':'application/json',
            'Content-type':'application/json'
            },
        })
        .then( res => res.json())
        .then(data=> {
            console.log(data[0]);
                if (data[0] !== undefined) {
                    this.datos = data
                    this.Consulta()     
                }else{
                    this.NoConsulta()
                }
            })
            .catch(e =>{
                console.log(e);
            })
    },
    Consulta(){
        $('#Consulta').modal('show')
    },
    NoConsulta(){
        $('#NoConsulta').modal('show')
    }
  },
    
}

</script>


<template>
    <div>
        <div class="col-md-12 row" id="card">
            <div class="col-md-8" :style="{ backgroundImage: 'url('  + require('../resources/tutu.jpg') + ')' }">
            </div>
            <div class="col-md-4 my-auto">
                 <img src="../resources/icono2.png" height="90px"  width="100px">
                <div class="col-md-12 separacion">
                    <a href="#/provedor"><button type="button" class="btn btn-dark btn-block">PROVEEDORES</button></a>
                </div>       
                <div class="col-md-12 separacion">
                    <a href="#/producto"><button type="button" class="btn btn-dark btn-block ">PRODUCTOS</button></a>
                </div>       
                <div class="col-md-12 separacion">
                    <a href="#/salida_entrada"><button type="button" class="btn btn-dark btn-block">ENTRADA/SALIDA</button></a>
                </div>       
                <div class="col-md-12 separacion">
                    <a href="#/consultar_mov"><button type="button" class="btn btn-dark  btn-block">CONSULTAR MOVIMIENTOS</button></a>
                </div>       
            </div>
        </div>
    </div>
</template>

<style>
#card{
    padding: 0; 
    margin: 0;
    width: 100%;
    height: 100vh;
    background: orangered;
}

.separacion{
    margin-top: 5%;
   
}


</style>
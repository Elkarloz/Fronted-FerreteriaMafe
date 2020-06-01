<template>
    <div>
        <div class="col-md-12 row" id="card">
            <div class="col-md-8" :style="{ backgroundImage: 'url('  + require('../resources/251.jpg') + ')' }">
            </div>
            <div class="col-md-4 my-auto">
                <div class="col-md-12 separacion">
                    <a href="#/provedor"><button type="button" class="btn btn-outline-success">Provedores</button></a>
                </div>       
                <div class="col-md-12 separacion">
                    <a href="#/producto"><button type="button" class="btn btn-outline-success">Productos</button></a>
                </div>       
                <div class="col-md-12 separacion">
                    <a href="#/salida_entrada"><button type="button" class="btn btn-outline-success">Entrada/Salida</button></a>
                </div>       
                <div class="col-md-12 separacion">
                    <a href="#/consultar_mov"><button type="button" class="btn btn-outline-success">Consultar movimientos</button></a>
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
}

.separacion{
    margin-top: 5%;
}


</style>
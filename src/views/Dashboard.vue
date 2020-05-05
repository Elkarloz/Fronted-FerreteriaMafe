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
                    <button type="button" class="btn btn-outline-success">Productos</button>
                </div>       
                <div class="col-md-12 separacion">
                    <button type="button" class="btn btn-outline-success">Salida / Entrada</button>
                </div>       
                <div class="col-md-12 separacion">
                    <button type="button" class="btn btn-outline-success">Movimientos</button>
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
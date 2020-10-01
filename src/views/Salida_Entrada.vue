<template>
  <div id="card">
    <h1 style="padding-top: 3%" id="dar">ENTRADA/SALIDA</h1>
    <form @submit.prevent="agregar()">
      <div class="col-md-12 row">
        <div class="col-md-4 mx-auto">
          <label id="dar">Seleciona Entrada/Salida</label>
          <select class="form-control my-2" required v-model="datos.Estado">
            <option id="dar">Entrada</option>
            <option id="dar">Salida</option>
          </select>
        </div>
        <div class="col-md-4 mx-auto"></div>
      </div>
      <div class="col-md-12 row" style="padding-top: 1%">
        <div class="col-md-4 mx-auto">
          <label id="dar">Seleciona un producto</label>
          <select class="form-control my-2" required v-model="datos.NProducto">
            <option v-for="(item, index) in productos" :key="index">
              {{ item.ProdNombre }}
            </option>
          </select>
        </div>
        <div class="col-md-4 mx-auto">
          <label id="dar">Seleciona un proveedor</label>
          <select class="form-control my-2" required v-model="datos.NEmpresa">
            <option v-for="(item, index) in proveedores" :key="index">
              {{ item.ProvNEmpresa }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-md-12 row" style="padding-top: 1%">
        <div class="col-md-4 mx-auto">
          <div class="input-group my-2">
            <span class="my-auto" style="padding-right: 5px" id="dar"
              >Descripcion:
            </span>
            <input
              type="text"
              aria-label="First name"
              class="form-control"
              required
              v-model="datos.Descripcion"
            />
          </div>
        </div>
        <div class="col-md-4 mx-auto">
          <div class="input-group my-2">
            <span class="my-auto" style="padding-right: 5px" id="dar"
              >Cantidad:
            </span>
            <input
              type="text"
              aria-label="First name"
              class="form-control"
              required
              v-model="datos.Cantidad"
            />
          </div>
        </div>
      </div>
      <div class="col-md-12 row" style="padding-top: 1%">
        <div class="col-md-4 mx-auto">
          <div class="input-group my-2">
            <span class="my-auto" style="padding-right: 5px" id="dar"
              >Valor total:
            </span>
            <input
              type="text"
              aria-label="First name"
              class="form-control"
              required
              v-model="datos.Total"
            />
          </div>
        </div>
        <div class="col-md-4 mx-auto">
          <div class="input-group my-2">
            <input
              class="form-control"
              type="date"
              required
              v-model="datos.Fecha"
            />
          </div>
        </div>
      </div>
      <div class="col-md-12 row" style="padding-top: 5%">
        <div class="col-md-8"></div>
        <div class="col-md-4 row">
          <button class="btn btn-dark ml-auto mr-auto" type="submit">
            Agregar
          </button>
          <a href="#/dashboard" class="ml-auto mr-auto"
            ><button class="btn btn-dark" type="button">Atrás</button></a
          >
        </div>
      </div>
    </form>
    <div class="col-md-12 row" style="padding-top: 5%">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <!-- Tabla -->
        <div class="ml-auto mr-auto" id="table-mod" style="overflow-y: scroll">
          <table class="table table-hover">
            <thead class="thead-dark">
              <tr>
                <th class="text-center">Fecha</th>
                <th class="text-center">Proveedor</th>
                <th class="text-center">Producto</th>
                <th class="text-center">Descripción</th>
                <th class="text-center">Cantidad</th>
                <th class="text-center">Valor Total</th>
                <th class="text-center">Entrada/Salida</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in Mov" :key="index">
                <th class="text-center">{{ item.MovFecha.split("T")[0] }}</th>
                <th class="text-center">{{ item.ProvNEmpresa }}</th>
                <th class="text-center">{{ item.ProdNombre }}</th>
                <th class="text-center">{{ item.ProdDescripcion }}</th>
                <th class="text-center">{{ item.MovCantidad }}</th>
                <th class="text-center">{{ item.MovTotal }}</th>
                <th class="text-center">{{ item.MovTipo }}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="Actualizado"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Error</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">{{ this.mensaje }}</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#dar {
  color: rgb(8, 8, 8);
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>

<script>
export default {
  data() {
    return {
      ruta: "http://localhost:4000/api/salida_entrada",
      proveedores: [],
      productos: [],
      datos: {
        Estado: "",
        NProducto: "",
        NEmpresa: "",
        Descripcion: "",
        Cantidad: "",
        Total: "",
        Fecha: "",
      },
      Mov: {},
      mensaje: "",
    };
  },
  created() {
    this.consultarProv();
    this.consultarProd();
    this.consultarEntradas();
  },
  methods: {
    consultarProv() {
      fetch(this.ruta + "/prov", {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.proveedores = data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    consultarProd() {
      fetch(this.ruta + "/prod", {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.productos = data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    agregar() {
      fetch(this.ruta + "/", {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(this.datos),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data[0]);
          if (data[0] !== undefined) {
            this.mensaje = "No se permite un salida menor que 0";
            this.actualizado();
            this.consultarEntradas();
          } else {
            this.consultarEntradas();
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    consultarEntradas() {
      fetch(this.ruta + "/", {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.Mov = data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    actualizado() {
      $("#Actualizado").modal("show");
    },
  },
};
</script>


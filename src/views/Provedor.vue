<template>
  <div class="row col-md-12" id="card">
    <div class="col-md-8" style="padding-top: 3%">
      <h1 id="dark">PROVEEDORES</h1>
      <br />

      <form
        class="form-inline my-2 my-lg-0 text-center"
        @submit.prevent="consultarProvParam(nombre)"
      >
        <!-- Btn input consultar -->
        <input
          class="form-control mr-sm-2 ml-auto mr-auto"
          type="search"
          size="70px"
          placeholder="Buscar"
          aria-label="Search"
          id="formulario"
          required
          v-model="nombre"
        />

        <button class="btn btn-dark my-2 my-sm-0 ml-auto mr-auto" type="submit">
          Buscar
        </button>
      </form>
      <div style="padding-top: 5%"></div>
      <!-- Tabla -->
      <div class="ml-auto mr-auto" id="table-mod" style="overflow-y: scroll">
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
              <th class="text-center">{{ item.ProvNit }}</th>
              <th class="text-center">{{ item.ProvTelefono }}</th>
              <th class="text-center">{{ item.ProvEmail }}</th>
              <th class="text-center">{{ item.ProvNEmpresa }}</th>
              <th class="text-center">{{ item.ProvTipProducto }}</th>
              <th class="text-center">{{ item.ProvCiudad }}</th>
              <th class="text-center">{{ item.ProvDireccion }}</th>
              <th>
                <input
                  type="radio"
                  name="radio"
                  @click="consultarProvID(item.ProvId)"
                  data-toggle="modal"
                  data-target="#exampleModal"
                />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-md-4 my-auto" v-if="this.editar === true">
      <div class="input-group">
        <span class="my-auto" style="padding-right: 5px">Nit: editar</span>
        <input
          type="text"
          aria-label="First name"
          class="form-control"
          v-model="proveedoresID.ProvNit"
        />
      </div>
      <div class="input-group separacion">
        <span class="my-auto" style="padding-right: 5px">Teléfono:</span>
        <input
          type="text"
          size="13px"
          aria-label="First name"
          class="form-control"
          v-model="proveedoresID.ProvTelefono"
        />
      </div>
      <div class="input-group separacion">
        <span class="my-auto" style="padding-right: 5px">Email:</span>
        <input
          type="text"
          size="13px"
          aria-label="First name"
          class="form-control"
          v-model="proveedoresID.ProvEmail"
        />
      </div>
      <div class="input-group separacion">
        <span class="my-auto" style="padding-right: 5px">N.Empresa: </span>
        <input
          type="text"
          aria-label="First name"
          class="form-control"
          v-model="proveedoresID.ProvNEmpresa"
        />
      </div>
      <div class="input-group separacion">
        <span class="my-auto" style="padding-right: 5px">Tipo Producto: </span>
        <input
          type="text"
          aria-label="First name"
          class="form-control"
          v-model="proveedoresID.ProvTipProducto"
        />
      </div>
      <div class="input-group separacion">
        <span class="my-auto" style="padding-right: 5px">Cuidad: </span>
        <input
          type="text"
          aria-label="First name"
          class="form-control"
          v-model="proveedoresID.ProvCiudad"
        />
      </div>
      <div class="input-group separacion">
        <span class="my-auto" style="padding-right: 5px">Dirección: </span>
        <input
          type="text"
          aria-label="First name"
          class="form-control"
          v-model="proveedoresID.ProvDireccion"
        />
      </div>
      <div class="separacion row">
        <!-- Btns -->
        <div class="col-md-6">
          <button class="btn btn-dark my-2 my-sm-0" type="submit" disabled>
            Agregar
          </button>
        </div>
        <div class="col-md-6">
          <button
            class="btn btn-dark my-2 my-sm-0"
            type="submit"
            @click="ActualizarProv()"
          >
            Actualizar
          </button>
        </div>
      </div>
      <div class="separacion row">
        <div class="col-md-6">
          <button
            class="btn btn-dark my-2 my-sm-0"
            type="submit"
            @click="EliminarProv(proveedoresID.ProvId)"
          >
            Eliminar
          </button>
        </div>
        <div class="col-md-6">
          <a href="#/dashboard"
            ><button class="btn btn-dark my-2 my-sm-0" type="submit">
              Atrás
            </button></a
          >
        </div>
      </div>
    </div>
    <div class="col-md-4 my-auto" v-else>
      <!-- inputs default -->
      <form @submit.prevent="agregarProv()">
        <div class="input-group">
          <span class="my-auto" style="padding-right: 5px" id="dark">Nit:</span>
          <input
            type="text"
            aria-label="First name"
            class="form-control"
            required
            v-model="datos.ProvNit"
          />
        </div>
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px" id="dark"
            >Teléfono:</span
          >
          <input
            type="text"
            aria-label="First name"
            class="form-control"
            required
            v-model="datos.ProvTelefono"
          />
        </div>
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px" id="dark"
            >Email:</span
          >
          <input
            type="text"
            aria-label="First name"
            class="form-control"
            required
            v-model="datos.ProvEmail"
          />
        </div>
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px" id="dark"
            >N.Empresa:
          </span>
          <input
            type="text"
            aria-label="First name"
            class="form-control"
            required
            v-model="datos.ProvNEmpresa"
          />
        </div>
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px" id="dark"
            >Tipo Producto:
          </span>
          <input
            type="text"
            aria-label="First name"
            class="form-control"
            required
            v-model="datos.ProvTipProducto"
          />
        </div>
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px" id="dark"
            >Cuidad:
          </span>
          <input
            type="text"
            aria-label="First name"
            class="form-control"
            required
            v-model="datos.ProvCiudad"
          />
        </div>
        <div class="input-group separacion">
          <span class="my-auto" style="padding-right: 5px" id="dark"
            >Dirección:
          </span>
          <input
            type="text"
            aria-label="First name"
            class="form-control"
            required
            v-model="datos.ProvDireccion"
          />
        </div>
        <div class="separacion row">
          <!-- Btns -->
          <div class="col-md-6">
            <button class="btn btn-dark my-2 my-sm-0" type="submit">
              Agregar
            </button>
          </div>
          <div class="col-md-6">
            <button class="btn btn-dark my-2 my-sm-0" disabled type="submit">
              Actualizar
            </button>
          </div>
        </div>
      </form>
      <div class="separacion row">
        <!-- Btns -->
        <div class="col-md-6">
          <button class="btn btn-dark my-2 my-sm-0" type="submit" disabled>
            Eliminar
          </button>
        </div>
        <div class="col-md-6">
          <a href="#/dashboard"
            ><button class="btn btn-dark my-2 my-sm-0" type="submit">
              Atrás
            </button></a
          >
        </div>
      </div>
    </div>
    <!-- Modal agregado -->
    <div
      class="modal fade"
      id="Agregado"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Validado</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {{ this.mensaje }}
          </div>
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
    <!-- Modal actualizar -->
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
            <h5 class="modal-title" id="exampleModalLabel">Validado</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {{ this.mensaje }}
          </div>
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
    <div
      class="modal fade"
      id="Eliminado"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Validado</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {{ this.mensaje }}
          </div>
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
#table-mod {
  height: 290px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
#dark {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: rgb(8, 8, 8);
}
</style>

<script>
export default {
  data() {
    return {
      ruta: "http://localhost:4000/api/proveedor",
      datos: {
        ProvNit: "",
        ProvTelefono: "",
        ProvEmail: "",
        ProvNEmpresa: "",
        ProvTipProducto: "",
        ProvCiudad: "",
        ProvDireccion: "",
      },
      proveedores: [],
      proveedoresID: {
        ProvNit: "",
        ProvTelefono: "",
        ProvEmail: "",
        ProvNEmpresa: "",
        ProvTipProducto: "",
        ProvCiudad: "",
        ProvDireccion: "",
      }, // actualizar y consulta por ID
      nombre: "",
      editar: false,
      mensaje: "",
      Codigo: { id: "" },
    };
  },
  created() {
    this.consultarProv();
  },
  methods: {
    agregarProv() {
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
          this.consultarProv();
          this.limpiar();
          this.agregado();
          this.mensaje = data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    consultarProv() {
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
          this.proveedores = data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    consultarProvID(codigo) {
      fetch(this.ruta + `/${codigo}`, {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.proveedoresID = data[0];
          this.editar = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    ActualizarProv() {
      fetch(this.ruta, {
        method: "PUT",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(this.proveedoresID),
      })
        .then((res) => res.json())
        .then((data) => {
          this.mensaje = data.message;
          this.consultarProv();
          this.limpiar();
          this.editar = false;
          this.actualizado();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    EliminarProv(Cod) {
      this.Codigo.id = Cod;
      fetch(this.ruta + "/eliminar", {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(this.Codigo),
      })
        .then((res) => res.json())
        .then((data) => {
          this.consultarProv();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    limpiar() {
      this.datos = {
        ProvNit: "",
        ProvTelefono: "",
        ProvEmail: "",
        ProvNEmpresa: "",
        ProvTipProducto: "",
        ProvCiudad: "",
        ProvDireccion: "",
      };
      this.proveedoresID = {
        ProvNit: "",
        ProvTelefono: "",
        ProvEmail: "",
        ProvNEmpresa: "",
        ProvTipProducto: "",
        ProvCiudad: "",
        ProvDireccion: "",
      };
    },
    consultarProvParam(nombre) {
      console.log(nombre);
      fetch(this.ruta + "/params" + `/${nombre}`, {
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
          console.log(this.proveedores);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    agregado() {
      $("#Agregado").modal("show");
    },
    actualizado() {
      $("#Actualizado").modal("show");
    },
    eliminado() {
      $("#Eliminado").modal("show");
    },
  },
};
</script>

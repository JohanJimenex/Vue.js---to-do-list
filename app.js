let app = new Vue({
  el: "#app",
  data: {
    nombreTarea: "",
    tareas: []
  },
  methods: {

    agregarTarea: function () {
      this.tareas.push({
        titulo: this.nombreTarea,
        estado: false
      });

      this.nombreTarea = "";
    },

    eliminarTarea: function (item) {
      this.tareas.splice(this.tareas.indexOf(item), 1);
    }
  }
})
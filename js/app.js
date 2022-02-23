const app = new Vue({
  el: '#app',
  data: {
    message: 'Soy hacker',
    cantidad: 0,
    text: 'Clase 2',
    items: '<li>Mis servicios</li>',
    photo: 'https://www.placecage.com/200/300',
    alt: 'Nicolas Cage',
    key: 'title',
    myStyle: 'color: green',
    firstName: 'Niki',
    lastName: 'Nudes',
  },
  methods: {
    saludar() {
      alert('Hola');
    },
    saludarDos(event) {
      alert('Coordenadas del botón: ' + event.screenX + ' ' + event.screenY);
    },
    showName() {
      return this.firstName + ' ' + this.lastName;
    },
  },
});

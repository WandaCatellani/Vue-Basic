Vue.component('componente3', {
  template:
    /* html */
    `
   <div>
    <h3>Componente 3</h3>

    <table :style="estilo">
      <tbody>
            <tr v-for="item of lista" >
                <td>{{item}}</td> 
            </tr>
      </tbody>
    </table>
   </div>
  `,
  props: {
    lista: Array,
    estilo: String,
    booleano: Boolean
  },
});
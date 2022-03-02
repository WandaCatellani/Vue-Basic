Vue.component('componente1'),
  {
    /* html */
    template: `
    <h2>Componente 1</h2>
    
  <table :style="style">
    <tr>
      <th class="array">{{array[0]}}</th>
      <th class="boolean">{{boolean}}</th>
      <th ></th>
    </tr>
</table>
  `,
    props: ['array', 'style', 'boolean'],
  };

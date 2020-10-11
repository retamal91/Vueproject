<template>
  <div>
    <div class="productos">
        <v-card>   
    <v-card-title>
      Productos
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
            <v-data-table dense 
            :headers="headers" 
            :items="allProductos"
            :search="search"> 
                
        
            </v-data-table>  

            <!--<v-simple-table dense>
                    <template v-slot:default>

                    
                    <thead>
                        <tr>
                            <th class="text-left"> Codigo Producto</th>
                            <th class="text-left"> Modelo</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr v-for="producto in allProductos" :key="producto.codigo" @click="productoDetalle(producto.codigo)">
                                <td>{{ producto.codigo}}</td>
                                <td>{{ producto.nombre}}</td>
                        </tr>    vue
                       
                    </tbody>
                </template>
            </v-simple-table>-->
        <!--    <div v-for="orden in allOrdenes" :key="orden.numero" class="orden">{{ orden.numero }}</div>-->
        </v-card>


    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name:"Productos",
    methods: {
        ...mapActions(['fetchProductos'],
        ),
        productoDetalle() {
    this.$router.push({ name: 'Home' } );
  }
    },
    computed: mapGetters(['allProductos']),    

    created() {
        this.fetchProductos();
    },
    data () {
        return {
            search: '',
            headers :[
                {
                    text: 'Codigo Producto',
                    align: 'start',
                    sortable: false,
                    value: 'codigo',
                },
                { text: 'Proveedor', value: 'proveedor' },
                { text: 'Modelo', value: 'nombre' },
                { text: 'Talla', value: 'talla' },
                { text: 'CODIGO EAN', value: 'ean' },                
                { text: 'Precio', value: 'precio' },
            ],

            
            }
    }

};
</script>


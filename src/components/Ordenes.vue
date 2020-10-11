<template>
  <div>
      <h3>Ordenes de Compra</h3>
    <div class="ordenes">
        <v-card>
            <v-simple-table >
                    <template v-slot:default>

                    
                    <thead>
                        <tr>
                            <th class="text-left"> Numero Orden</th>
                            <th class="text-left"> Fecha</th>
                            <th class="text-left"> Detalle/Exportar datos</th>

                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr v-for="orden in allOrdenes" :key="orden.numero">
                                <td>{{ orden.numero}}</td>
                                <td>{{ orden.fecha}}</td>
                                <td>
                                    <v-dialog v-model="dialog" >
                                        <template v-slot:activator="{ on, attrs}">
                                    <v-btn 
                                    class="ma-2" 
                                    outlined color="white"
                                    v-bind="attrs"
                                    v-on="on"
                                    @click="setOrdenActiva(orden.numero)"
                                    >
                                        <v-icon>mdi-magnify</v-icon>
                                    </v-btn>
                                        </template>
                                        
                                        <v-card>
                                            <v-card-title class="headline justify-left">Orden de compra {{orden.numero}}</v-card-title>
                                            <v-divider></v-divider>
                                            <v-container>
                                                <v-row>
                                                    <v-col><v-card-text> Contrato <br> {{orden.contrato}}</v-card-text></v-col>
                                                    <v-col><v-card-text> Fecha <br> {{orden.fecha}} {{orden.centro}}</v-card-text></v-col>
                                                </v-row>
                                                <v-row>
                                                    <v-col><v-card-text>  <br>  </v-card-text></v-col>
                                                </v-row>
                                            <v-divider></v-divider>
                                            </v-container>
                                            <v-card>
                                                <v-simple-table dense>
                                                    <template v-slot:default>

                                                    
                                                    <thead>
                                                        <tr>
                                                            <th class="text-left"> Producto</th>
                                                            <th class="text-left"> Talla</th>
                                                            <th class="text-left"> Cantidad</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="producto in orden.producto" :key="producto.codigo">
                                                            <td>{{ producto.producto.nombre}}</td>
                                                            <td>{{ producto.producto.talla}}</td>
                                                            <td>{{ producto.cantidad}}</td>
                                                        </tr>
                                                    </tbody>
                                                        
                                                    </template>
                                                </v-simple-table>
                                            </v-card>
                                    <v-btn small
                                    class="ma-6" 
                                    outlined color="white"
                                    @click="exportarCSV()"
                                    >
                                        Exportar .csv
                                    </v-btn>
                                        </v-card>

                                    </v-dialog>
                                </td>

                        </tr>    
                       
                    </tbody>

                
                </template>
            </v-simple-table>
            <!--  
            <v-data-table :headers="headers" :items="allOrdenes"> 
                
        
            </v-data-table>
          <div v-for="orden in allOrdenes" :key="orden.numero" class="orden">{{ orden.numero }}</div>-->

        
        </v-card>


    </div>
  </div>
</template>

<script>

//import axios from 'axios';


import { mapGetters, mapActions } from 'vuex';
export default {
    name:"Ordenes",
    methods: {
        ...mapActions(['fetchOrdenes','fetchItems']),

        setOrdenActiva(id){
            //axios.get(`http://localhost:8000/api/orden/${id}`)
            //.then(response => this.ordenActiva = response.data)
            this.ordenActiva = this.allOrdenes.find(x => x.numero == id);
            //console.log(this.ordenActiva);

            //console.log(this.allOrdenes.find(x => x.numero == id))

        },

        exportarCSV(){
            //this.ordenActiva = this.allOrdenes.find(x => x.numero = id);
            console.log
            let contenidoCSV = "data:text/csv;charset=utf-8,";

            this.ordenActiva.producto.forEach(function(rows){
                let row = rows.producto.ean + "," + rows.producto.precio + "," + rows.cantidad ;
                contenidoCSV += row +"\r\n";
            });

            const data =encodeURI(contenidoCSV);
            const link = document.createElement("a");
            link.setAttribute("href", data);
            let nombreArchivo = "orden" + this.ordenActiva.numero + ".csv"
            link.setAttribute("download", nombreArchivo);
            link.click();

            

            console.log(contenidoCSV);
        },


        verOrdenActiva(){
            console.log(this.ordenActiva);
        },
        setOrders(){

        }
    },
    computed: mapGetters(['allOrdenes','allItems']),
    created() {
        this.fetchOrdenes();
        this.fetchItems();
    },
    data () {
        return {
            headers :[
                {
                    text: 'Numero Orden',
                    align: 'start',
                    sortable: false,
                    value: 'numero',
                },
                { text: 'Fecha', value: 'fecha' },
                
            ],
            ordenActiva:[]
            }
    }

};
</script>

<style>

</style>
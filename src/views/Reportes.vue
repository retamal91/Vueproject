<template>
  <div>
    <v-container>
    
        <v-row>
            <v-col cols="12">
            <v-card>
                <v-card-title class="headline gray lighten-6">
                    Elegir producto 
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    Seleccionar producto en la Base de datos para ver su historico de pedidos.
                </v-card-text>
                <v-card-text>
                    <v-autocomplete
                    :items="modelos"
                    :loading="isLoading"
                    placeholder="Empezar a escribir para buscar"
                    prepend-icon="mdi-database-search"
                    item-text="nombre"
                    id="modeloReporte">
                    

                    </v-autocomplete>
                </v-card-text>
                    <v-btn 
                        class="ma-2" 
                        outlined color="white"
                        v-bind="attrs"
                        v-on="on"
                                    @click="obtenerFilas()"
                                    >
                                        Obtener Reporte
                                    </v-btn>                
            </v-card>
            </v-col>
        
        

        </v-row>
        <v-row>
            <v-col>
                <v-card  v-if="this.ready">
                    <v-card-title class="justify-center">Producto</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text class="text-center font-weight-bold text-h5
">{{this.modeloActual}}</v-card-text>
                </v-card >
            </v-col>
            <v-col justify-center>
                <v-card  v-if="this.ready">
                    <v-card-title class="justify-center">Unidades Productos</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text class="text-center font-weight-bold text-h5
">{{this.cantidadTotalReporte}}</v-card-text>
                </v-card >
            </v-col>
            <v-col justify-center> 
                <v-card  v-if="this.ready">
                    <v-card-title class="justify-center">Monto Total Productos</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text class="text-center font-weight-bold text-h5
">{{this.montoTotalReporte}}</v-card-text>
                </v-card>

            </v-col>
        </v-row>
        
<v-divider></v-divider>
        <v-row>
            <v-col>
                <v-card v-if="this.ready">
                    <v-card-title>Productos por Mes</v-card-title>
                <!--<zingchart :data="myData" :series="mySeries"  v-if="this.ready"></zingchart>-->
                            <v-sparkline
                            :value="this.mySeries.values"

                            :labels="myData.scaleX.labels"

                            auto-draw
                            ></v-sparkline>
                </v-card>
              
            <v-card v-if="this.ready">
                <v-card-title>Distribución Tallas</v-card-title>
                                            <v-sparkline
                                                :value="this.cantidadTallaReporte"

                                                
                                                
                                                :labels="['XS', 'S','M', 'L', 'XL','2XL']"
                                                
                                                
                                                auto-draw
                                            ></v-sparkline>

            </v-card>  

            </v-col>
            <v-col>
                 
                <v-card  v-if="this.ready"> 
                    <v-card-title>Productos por Mes / Datos</v-card-title>
                    <v-simple-table dense>
                        <template v-slot:default>
                            <thead>
                                <th>Mes</th>
                                <th>Cantidad</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Enero</td><td>{{mySeries['values'][0]}}</td>
                                </tr>
                                <tr>
                                    <td>Febrero</td><td>{{mySeries['values'][1]}}</td>
                                </tr>
                                <tr>
                                    <td>Marzo</td><td>{{mySeries['values'][2]}}</td>
                                </tr>
                                <tr>
                                    <td>Abril</td><td>{{mySeries['values'][3]}}</td>
                                </tr>
                                <tr>
                                    <td>Mayo</td><td>{{mySeries['values'][4]}}</td>
                                </tr>
                                <tr>
                                    <td>Junio</td><td>{{mySeries['values'][5]}}</td>
                                </tr>
                                <tr>
                                    <td>Julio</td><td>{{mySeries['values'][6]}}</td>
                                </tr>
                                <tr>
                                    <td>Agosto</td><td>{{mySeries['values'][7]}}</td>
                                </tr>
                                <tr>
                                    <td>Septiembre</td><td>{{mySeries['values'][8]}}</td>
                                </tr>
                                <tr>
                                    <td>Octubre</td><td>{{mySeries['values'][9]}}</td>
                                </tr>
                                <tr>
                                    <td>Noviembre</td><td>{{mySeries['values'][10]}}</td>
                                </tr>
                                <tr>
                                    <td>Diciembre</td><td>{{mySeries['values'][11]}}</td>
                                </tr>

                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card>
            </v-col>
        </v-row>
        <v-row>

 
        </v-row>


        <v-card  v-if="this.ready">
            <v-card-title>
        <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Filtrar"
        single-line
        hide-details
      ></v-text-field>
      </v-card-title>
            <v-data-table dense 
            :headers="headers" 
            :items="datosReporte"
            :search="search"> 
                
        
            </v-data-table> 
            <v-btn small
                                    class="ma-6" 
                                    outlined color="white"
                                    @click="exportarCSV()"
                                    >
                                        Exportar .csv
                                    </v-btn>
        </v-card>

        </v-container>
    
    
  </div>
</template>

<script>



import { mapGetters, mapActions } from 'vuex';



export default {
    name:"Reportes",
    
    data(){
        return {
            search: '',
            myData: {
                type: 'line',
                title: {
                    text: 'Producto solicitado por mes',
                },
                scaleX:{ labels:["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"],
                itemsOverlap: true,
                refresh: {
                    type: "full",
                    interval: 45,
                }
                },

            },
            mySeries: [
                {values: [0,0,0,0,0,0,0,0,0,0,0,0]}
            ],
            
            datosReporte: [

            ],
            modeloActual: '',
            ready: false,
            montoTotalReporte: 0,
            cantidadTotalReporte: 0,
            cantidadTallaReporte: [],

            
            filasQuery:[

            ],
            modelos:[
                {nombre: 'LS10680', id:1},
                {nombre: 'LE10930', id:2},
                {nombre: 'LE10430', id:3},

            ],
            headers:[
                { text: 'Modelo', value: 'modelo' },
                { text: 'Talla ', value: 'talla' },
                { text: 'Cantidad', value: 'cantidad' },
                { text: 'Precio', value: 'precio' },                
                { text: 'Centro', value: 'centro' },
                { text: 'Fecha', value: 'fecha' },
                { text: 'Contrato', value: 'contrato' },
                { text: 'Monto Total', value: 'monto_total' },

            ],
            


        }
    },
    computed: mapGetters(['allFilas']),

    methods:{
        ...mapActions(['fetchFilas']),      

        async obtenerFilas(){
            this.ready= false;
            let modeloBusqueda = document.getElementById('modeloReporte').value
            console.log(modeloBusqueda)
            await this.fetchFilas(modeloBusqueda);
            console.log(this.allFilas)

            
            this.parseRows()
            console.log(this.datosReporte)
            this.calcularDatos()

            
            

        },

        parseRows(){
            let fila;
            this.datosReporte=[];
            for (fila of this.allFilas){
                this.datosReporte.push(
                    {   
                        'codigo' : fila.producto.codigo,
                        'modelo' :fila.producto.nombre,
                        'talla' : fila.producto.talla,
                        'cantidad': fila.cantidad,
                        'precio':fila.producto.precio,
                        'centro':fila.orden.centro,
                        'fecha':fila.orden.fecha,
                        'contrato' : fila.orden.contrato,
                        'monto_total' : fila.producto.precio * fila.cantidad,

                    }
                )
            }

        },
        calcularDatos() {
            let serieMensual = [0,0,0,0,0,0,0,0,0,0,0,0];
            let cantidadTotal = 0;
            let montoTotal = 0;
            let tallas = [0,0,0,0,0,0]
            let fila;
            for (fila of this.datosReporte){
                let mes = fila.fecha.slice(5,7);
                if (mes == '01'){
                    serieMensual[0]= serieMensual[0] + fila.cantidad;
                } else if(mes == '02')
                    serieMensual[1]= serieMensual[1] + fila.cantidad;
                else if(mes == '03') 
                    serieMensual[2]= serieMensual[2] + fila.cantidad;
                else if(mes == '04') 
                    serieMensual[3]= serieMensual[3] + fila.cantidad;                    
                else if(mes == '05') 
                    serieMensual[4]= serieMensual[4] + fila.cantidad;                    
                else if(mes == '06') 
                    serieMensual[5]= serieMensual[5] + fila.cantidad;            
                else if(mes == '07') 
                    serieMensual[6]= serieMensual[6] + fila.cantidad;            
                else if(mes == '08') 
                    serieMensual[7]= serieMensual[7] + fila.cantidad;                
                else if(mes == '09') 
                    serieMensual[8]= serieMensual[8] + fila.cantidad;
                else if(mes == '10') 
                    serieMensual[9]= serieMensual[9] + fila.cantidad;
                else if(mes == '11') 
                    serieMensual[10]= serieMensual[10] + fila.cantidad;
                else 
                    serieMensual[11]= serieMensual[11] + fila.cantidad; 
                    
                cantidadTotal = cantidadTotal + fila.cantidad;
                montoTotal = montoTotal + fila.monto_total;

                if (fila.talla === 'XS')
                    tallas[0] +=  fila.cantidad
                else if (fila.talla === 'S')
                    tallas[1] += fila.cantidad
                else if (fila.talla === 'M')
                    tallas[2] += fila.cantidad
                else if (fila.talla === 'L')
                    tallas[3] += fila.cantidad
                else if (fila.talla === 'XL')
                    tallas[4] +=  fila.cantidad
                else if (fila.talla === '2XL')
                    tallas[5] += fila.cantidad

                                                            
            }
            this.cantidadTallaReporte = tallas;
            this.mySeries.values = serieMensual;
            this.montoTotalReporte=montoTotal;
            this.cantidadTotalReporte = cantidadTotal;
            console.log(tallas);
            console.log(this.cantidadTallaReporte);
            this.modeloActual = this.datosReporte[0].modelo;
            console.log(this.mySeries)
            this.ready= true;

        },
        exportarCSV(){

            let contenidoCSV = "data:text/csv;charset=utf-8,";
            contenidoCSV = contenidoCSV + "\r\n" + "Modelo" + "," + "Talla" + "," + "Cantidad" + "," + "Precio" +  "," + "Centro" + "," + "Fecha" + "," + "Contrato" + "," + "Monto Total" + "\r\n";

            this.datosReporte.forEach(function(rows){
                let row = rows.modelo + "," + rows.talla + "," + rows.cantidad + "," + rows.precio + "," + rows.centro + "," + rows.fecha + "," + rows.contrato + "," + rows.monto_total ;
                contenidoCSV += row +"\r\n";
            });

            const data =encodeURI(contenidoCSV);
            const link = document.createElement("a");
            link.setAttribute("href", data);
            let nombreArchivo = this.modeloActual + "Reporte.csv"
            link.setAttribute("download", nombreArchivo);
            link.click();

            

            console.log(contenidoCSV);
        },
    
    }





}
</script>

<style>

</style>
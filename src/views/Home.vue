<template>
  <div>
  <!--
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row
          :align="center"
          :justify="end"
          
          

        >
          <v-card
          :justify=center
          :align=center

          class="ma-6 pa-4"
          outlined
          hover
          rounded
          >
              <v-card-title>  Ordenes de Compra   </v-card-title>


            
          </v-card>
          <v-card
          :justify=center
          :align=center

          class="ma-6 pa-4"
          outlined
          hover
          rounded
          >
          <v-card-title>  Productos   </v-card-title>
            
          </v-card>
          <v-card
          :justify=center
          :align=center

          class="ma-6 pa-4"
          outlined
          hover
          rounded
          >
          <v-card-title>  Reportes  </v-card-title>
           
          </v-card>

          <v-card
          :justify=center
          :align=center

          class="ma-6 pa-4"
          outlined
          hover
          rounded
          >
          <v-card-title>  Importar Datos   </v-card-title>
            
          </v-card>
          
          
        </v-row>
      </v-col>

    </v-row>
  </v-container>-->

        <v-container fluid ma-0 pa-0 fill-height>
        <v-layout row>
          <v-flex xs3>          
            <v-card
            :justify=center
            :align=center
            :height=200
            :width=200
            class="ma-6 pa-4"
            outlined
            hover
            rounded
            >
            
            <v-card-title>  Ordenes de Compra   </v-card-title>
                         <v-icon size="100"></v-icon> 

            </v-card> 
          </v-flex>
          <v-flex xs3>
            <v-card
            :justify=center
            :align=center
            :height=200
            :width=200
            class="ma-6 pa-4"
            outlined
            hover
            rounded
            >
            <v-card-title>  Productos   </v-card-title>
              
            </v-card>              
          </v-flex>
          <v-flex xs3>
            <v-card
            :justify=center
            :align=center
            :height=200
            :width=200

            class="ma-6 pa-4"
            outlined
            hover
            rounded
            >
            <v-card-title> Reportes   </v-card-title>
              
            </v-card>             
          </v-flex>
          <v-flex xs3>
            <v-card
            :justify=center
            :align=center
            :height=200
            :width=200            

            class="ma-6 pa-4"
            outlined
            hover
            rounded
            >
            <v-card-title>  Importar Datos   </v-card-title>
              
            </v-card>  
          </v-flex>

        </v-layout>
      </v-container>
  
  
  
  
  
  </div>

  
  <!--<div class="home">
    <Ordenes/>
  </div> -->
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>

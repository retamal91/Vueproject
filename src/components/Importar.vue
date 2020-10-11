<template>
  <div>
    <v-card>    
        <form enctype="multipart/form-data">
          <v-file-input label="Seleccionar Archivo" id="xml_file" name="xml_file" click:clear></v-file-input> 
          <v-btn 
          class="ma-2" 
          outlined color="white"
          @click="uploadXML()"
            >
            Cargar Archivo
          </v-btn>
        </form>
    </v-card><!--
        <FileUpload name="archivo_xml[]" url="./upload">
            <template #empty>
                <p>Arrastrar archivo aqui para Importar datos</p>
            </template>
        </FileUpload>-->


  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    uploadXML(){
    var formData = new FormData();
    var xmlfile = document.querySelector('#xml_file')
    console.log(xmlfile.files[0])
    formData.append("xml_file", xmlfile.files[0]);

    console.log(formData)

    axios.post('http://localhost:8000/api/orden/orden/uploadfile/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
});
    this.$v.$reset()




    },
  }

}
</script>

<style>

</style>
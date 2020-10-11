<template>
  <div class="ProductList">
    <Productos/>
  </div>
</template>

<script>
// @ is an alias to /src
import Productos from '@/components/Productos.vue'

export default {
  name: 'ProductList',
  components: {
    Productos
  }
}
</script>

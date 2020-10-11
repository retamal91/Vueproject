<template>
  <div class="OrderList">
    <Ordenes/>
  </div>
</template>

<script>
// @ is an alias to /src
import Ordenes from '@/components/Ordenes.vue'

export default {
  name: 'OrderList',
  components: {
    Ordenes
  }
}
</script>

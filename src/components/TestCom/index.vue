/**
* @author  sparkHou
* @date 2021-04-15 15:51
* @Description:
*/
<template>
  <div class="TestCom">
    孙组件：{{topData2}}
  </div>
</template>

<script lang="ts">
  import {defineComponent, inject, watch} from 'vue';

  export default defineComponent({
    name: 'TestCom',
    setup() {
      let topData2 = inject<any>('topData2')
      watch(topData2, (val) => {
        console.log(val, '====')
      })
      return {topData2}
    }
  });
</script>

<style lang="less">

</style>

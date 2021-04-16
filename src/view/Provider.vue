/**
* @author  sparkHou
* @date 2021-04-15 14:20
* @Description:
*/

<template>
  <div class="Provider">
    {{topData}}
    <br/>
    <input type="text" v-model="topData"/>
    <br/>
    {{topData2}}
    <br/>
    <input type="text" v-model="topData2"/>
    <br/>
    {{topData3.name}}
    <br/>
    <input type="text" v-model="topData3.name"/>
    <br/>
    <hr/>
    <TestCom/>

  </div>
</template>

<script lang="ts">
  import {defineComponent, inject, isReactive, unref} from 'vue';
  import TestCom from '@/components/TestCom/index.vue'

  export default defineComponent({
    name: 'Provider',
    components: {TestCom},
    setup() {
      let topData = unref(inject<any>('topData'))
      let topData2 = inject<any>('topData2')
      let topData3 = inject<any>('topData3')
      console.log(isReactive(topData), isReactive(topData2))
      return {
        topData,
        topData2,
        topData3,
      }
    }
  });
</script>

<style>

</style>

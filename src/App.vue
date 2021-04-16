<template>
  父级的topData{{topData}}
  <br/>
  父级的topData2{{topData2}}
  <br/>
  父级的topData3{{topData3.name}}
  <br/>
  <button @click="changTopData()">修改父级的父级的topData</button>
  <a-button type="primary">Primary</a-button>
  <router-view/>
</template>

<script lang="ts">
  import {defineComponent, provide, ref, reactive} from 'vue';

  export default defineComponent({
    name: 'App',
    setup() {
      let topData = ref<string | number>('嘿嘿')
      let topData2 = ref('嘿嘿2')
      let topData3 = reactive({name: 'hahaha'})
      provide('topData', topData)
      provide('topData2', topData2)
      provide('topData3', topData3)
      const changTopData = () => {
        topData.value = "ahahah"
        topData2.value = "ahahah2"
        topData3.name = "ahahah2"
      }
      return {
        topData,
        topData2,
        topData3,
        changTopData
      }
    }
  });
</script>

<style lang="less">

</style>

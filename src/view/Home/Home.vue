/**
* @author  sparkHou
* @date 2021-04-14 17:00
* @Description:
*/
<template>
  <div>
    <button @click="goUser">goUser</button>
    <router-link to="/provider">goProvider</router-link>
    <br/>
    <button @click="provider.getDemo({id:1,str:'asdasd'})">模拟get请求</button>
    <button @click="provider.postDemo({id:1,str:'asdasd'})">模拟post请求</button>
    <br/>
    <div class="less">less</div>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue';
  import {useRouter} from 'vue-router'
  import provider from './provider'

  export default defineComponent({
    name: 'Home',
    setup() {
      const router = useRouter()
      const goUser = () => {
        router.push({name: 'User'})
      }
      return {goUser, provider}
    }
  });
</script>

<style lang="less">
  .less {
    color: @color-red;
  }
</style>

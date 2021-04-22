/**
* @author  sparkHou
* @date 2021-04-14 17:00
* @Description:
*/
<template>
  <div>
    <img src="../../assets/img/11.png" alt=""/>
    <button @click="goUser">goUser</button>
    <router-link to="/provider">goProvider</router-link>
    <br/>
    <button @click="provider.getDemo({id:1,str:'asdasd'})">模拟get请求</button>
    <button @click="provider.postDemo({id:1,str:'asdasd'})">模拟post请求</button>
    <br/>
    <div class="less">less</div>
    <a-button type="primary" @click="changeTheme('#992777')">默认
    </a-button
    >
    <br/><br/>
    <a-button type="primary" @click="changeTheme('#F5222D')">薄暮
    </a-button
    >
    <br/><br/>
    <a-button type="primary" @click="changeTheme('#FA541C')">火山
    </a-button
    >
    <br/><br/>
    <a-button type="primary" @click="changeTheme('#FAAD14')">日暮
    </a-button
    >
    <br/><br/>
    <a-button type="primary" @click="changeTheme('#13C2C2')">明青
    </a-button
    >
    <br/><br/>
    <a-button type="primary" @click="changeTheme('#52C41A')">极光绿
    </a-button
    >
    <br/><br/>
    <a-button type="primary" @click="changeTheme('#1890FF')">拂晓蓝
    </a-button
    >
    <br/><br/>
    <a-button type="primary" @click="changeTheme('#2F54EB')">极客蓝
    </a-button
    >
    <br/><br/>
    <a-button type="primary" @click="changeTheme('#722ED1')">酱紫
    </a-button
    >
    <br/><br/>
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
      const changeTheme = (primaryColor: string) => {
        (window as any).less.modifyVars({
          "@primary-color": primaryColor
        });
      }
      return {goUser, provider, changeTheme}
    }
  });
</script>

<style lang="less">
  .less {
    color: @color-red;
  }
</style>

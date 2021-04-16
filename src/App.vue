<template>
  <div class="App">
    父级的topData{{topData}}
    <br/>
    父级的topData2{{topData2}}
    <br/>
    父级的topData3{{topData3.name}}
    <br/>
    <button @click="changTopData()">修改父级的父级的topData</button>
    <a-button @click="openNotification()" type="primary">Primary</a-button>
    <a-switch checked-children="开" un-checked-children="关" v-model:checked="checked"/>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import {defineComponent, provide, ref, reactive, watch} from 'vue';
  import {notification} from 'ant-design-vue';

  export default defineComponent({
    name: 'App',
    setup() {
      let topData = ref<string | number>('嘿嘿')
      let topData2 = ref('嘿嘿2')
      let topData3 = reactive({name: 'hahaha'})
      let checked = ref<boolean>(true)
      watch(checked, (val) => {
        if (val) {

        } else {

        }
      })
      provide('topData', topData)
      provide('topData2', topData2)
      provide('topData3', topData3)
      const openNotification = () => {
        notification.open({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      };

      const changTopData = () => {
        topData.value = "ahahah"
        topData2.value = "ahahah2"
        topData3.name = "ahahah2"
      }
      return {
        topData,
        topData2,
        topData3,
        checked,
        changTopData,
        openNotification
      }
    }
  });
</script>

<style lang="less">
  .App {
  }
</style>

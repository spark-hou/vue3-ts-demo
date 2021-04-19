<template>
  <div class="App" :class="theme">
    <div class="g-bgColor">
      父级的topData{{topData}}
      <br/>
      父级的topData2{{topData2}}
      <br/>
      父级的topData3{{topData3.name}}
      <br/>
      <button @click="changTopData()">修改父级的父级的topData</button>
      <a-button @click="openNotification()" type="primary">Primary</a-button>
      <a-switch checked-children="明" un-checked-children="暗" v-model:checked="checked"/>
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent, provide, ref, reactive, watch, computed} from 'vue';
  import {notification} from 'ant-design-vue';
  import {useStore} from '@/store'

  export default defineComponent({
    name: 'App',
    setup() {
      let topData = ref<string | number>('嘿嘿')
      let topData2 = ref('嘿嘿2')
      let topData3 = reactive({name: 'hahaha'})
      let store = useStore()
      console.log(store, '===')

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

      // 切换主题
      let checked = ref<boolean>(true)
      let theme = computed(() => store.state.theme.type)
      watch(checked, (val) => {
        if (val) {
          store.dispatch('theme/changeType', 'light')
        } else {
          store.commit('theme/CHANGE_TYPE', 'dark')
        }
      })
      return {
        topData,
        topData2,
        topData3,
        checked,
        theme,
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

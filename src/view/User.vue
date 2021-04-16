/**
* @author  sparkHou
* @date 2021-04-14 15:53
* @Description:
*/
<template>
  <div class="User">
    {{user.name}}
    <br/>
    <button @click="user.setUserName('hahaha')">修改用户名</button>
    <br/>
    {{user.getUserName()}}
    <br/>
    计算属性：姓名反转{{nameReverse}}
    <br/>
    ref:{{count}}
    <br/>
    vuex
    <br/>
    state:{{store.state.user.count}}
    <br/>
    getter:{{getCount}}
    <br/>
    <button @click="upCount()">操作vuex</button>
  </div>
</template>

<script lang="ts">
  import {defineComponent, reactive, ref, computed} from 'vue';
  import {useStore} from '@/store'

  interface User {
    userName: string,
    age: number | string,

    setUserName(name: string): void,

    getUserName(): string
  }

  export default defineComponent({
    name: 'User',
    setup() {
      //实现接口的第一种写法
      // let user: User = reactive({
      //     userName: 'hahah',
      //     age: 30,
      //     setUserName(name: string): void {
      //         this.userName = name
      //     },
      //     getUserName(): string {
      //         return this.userName
      //     }
      // })
      //第二种实现方法（泛型）
      let user = reactive<User>({
        userName: 'hahah',
        age: 30,
        setUserName(name: string): void {
          this.userName = name
        },
        getUserName(): string {
          return this.userName
        }
      })
      let count = ref<number | string>(10)
      let nameReverse = computed((): string => {
        return user.userName.split('').reverse().join('')
      })

      //vuex
      const store = useStore()
      const getCount = computed(() => store.state.user.count)
      const upCount = () => {
        store.dispatch('user/upCount', 1)
      }

      return {user, count, nameReverse, getCount, upCount, store}
    }
  });
</script>

<style lang="less">
  .User {
    button {
      color: red;
    }
  }
</style>

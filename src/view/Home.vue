/**
* @author  sparkHou
* @date 2021-04-14 17:00
* @Description:
*/
<template>
  <div>
    <button @click="goUser">goUser</button>
  </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import {useRouter} from 'vue-router'

    export default defineComponent({
        name: 'Home',
        setup() {
            const router = useRouter()
            const goUser = () => {
                router.push({name: 'User'})
            }
            return {goUser}
        }
    });
</script>

<style>

</style>

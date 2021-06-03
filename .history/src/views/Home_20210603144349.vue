<template>
  <div class="home">
    <header></header>
    <main>

    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import { Vue, Component } from "vue-property-decorator"

@Component(
  {
    components: {

    }
  }
)
export default class Home extends Vue{
  
}
</script>

<style lang="less" scoped>
main {
  width: 100%;
}
</style>

<template>
  <div class="home">
    <header></header>
    <main>
      <div class="content-item">
        <div class="list"></div>
      </div>
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
.home {
  padding: 0 40px;
}
main {
  width: 100%;
  border-top: 1px solid #eaecef;
  padding-top: 30px;
  .list {

  }
}
</style>

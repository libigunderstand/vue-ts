<template>
  <div class="home">
    <header></header>
    <main>
      <div class="content-item">
        <div class="list">
          <div class="list-item"></div>
        </div>
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
  max-width: 960px;
  margin: 0 auto;
  padding: 0 40px;

}
main {
  width: 100%;
  border-top: 1px solid #eaecef;
  padding-top: 30px;
  .list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .list-item {
      flex: 0 0 32%;
      background: #fbfbfb;
      height: 120px;
      border: 1px solid #f1f1f1;
    }
  }
}
</style>

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

<script lang="ts">
// @ is an alias to /src
import { Vue, Component } from "vue-property-decorator"

@Component(
  {
    components: {

    }
  }
)
export default class Home extends Vue{
  public cssTab: Array<Object> = [
    {
      id: 0,
      label: '布局'
    },
    {
      id: 1,
      label: '适配'
    },
    {
      id: 2,
      label: '其他'
    },
  ]
}
</script>

<style lang="less" scoped>
.home {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 4rem;

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
      cursor: pointer;
      position: relative;
      transition: all .2s ease-in-out;
      &:hover {
        box-shadow: 0 18px 32px -18px #000!important;
        transform: translateY(-3px);
      }
    }
    @media screen and (max-width: 750px){
      .list-item {
        flex: 0 0 100%;
      }
    }
  }
}
</style>

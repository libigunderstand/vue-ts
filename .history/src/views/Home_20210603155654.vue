<template>
  <div class="home">
    <header></header>
    <main>
      <div class="content-item">
        <h3>css3相关</h3>
        <div class="list">
          <div class="list-item" v-for="item in cssTab" :key="item.id">{{item.label}}</div>
        </div>
      </div>
      <div class="content-item">
        <h3>js相关</h3>
        <div class="list">
          <div class="list-item" v-for="item in jsTab" :key="item.id">{{item.label}}</div>
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
  public cssTab: any = [
    {
      id: 0,
      label: '基础'
    },
    {
      id: 1,
      label: '进阶'
    },
    {
      id: 2,
      label: '高级'
    },
  ]
  public jsTab: any = [
    {
      id: 0,
      label: '基础'
    },
    {
      id: 1,
      label: '进阶'
    },
    {
      id: 2,
      label: '高级'
    },
    {
      id: 3,
      label: '其他'
    }
  ]
  public vueTab: any = [
    {
      id: 0,
      label: '基础'
    },
    {
      id: 1,
      label: '进阶'
    },
    {
      id: 2,
      label: '高级'
    },
  ]
}
</script>

<style lang="less" scoped>
.home {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 4rem;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
}
main {
  width: 100%;
  border-top: 1px solid #eaecef;
  padding-top: 30px;
  .content-item {
    margin-bottom: 20px;
    h3 {
      border: 1px solid #f2f2f2;
      border-radius: 8px;
      line-height: 60px;
    }
  }
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
      margin: 0 2% 2% 0;
      box-sizing: border-box;
      font-size: 24px;
      line-height: 120px;
      &:nth-child(3n) {
        margin-right: 0;
      }
      &:hover {
        box-shadow: 0 18px 32px -18px #000!important;
        transform: translateY(-3px);
      }
    }
    @media screen and (max-width: 760px){
      .list-item {
        flex: 0 0 100%;
      }
    }
  }
}
</style>

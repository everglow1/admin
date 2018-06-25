<template>
  <div class="first container">
    <div class="content">
      <h3>入口 <em>|</em> 首页</h3>
      <div class="btn">
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default btn1" @click="toStudent">学生</button>
        </div>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default" @click="toAdmin">管理员</button>
        </div>
      </div>
      <p class="footer">简单而不失优雅，小巧而不乏大匠</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'First',
  data () {
    return {
    }
  },
  methods: {
    toStudent() {
      this.$router.push({path: '/studentlogin'})
    },
    toAdmin() {
      this.$router.push({path: '/adminlogin'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .first {
    /* height: 300px; */
    position: relative;
    text-align: center;
    /* background: red; */
  }
  h3{
    font-weight: bold;
  }
  .btn-group {
    margin: 30px;
  }
  .btn1 {
    padding-left: 20px;
    padding-right: 20px;
  }
  .footer {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 200px;
  }
</style>
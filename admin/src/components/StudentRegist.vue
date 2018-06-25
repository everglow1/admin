<template>
  <div class="studentregist container">
    <form v-on:submit="addCustomer" class="content">
      <div class="well">
        <h4>填写信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name">
        </div>
        <div class="form-group">
          <label>性别</label>
          <input type="text" class="form-control" placeholder="sex" v-model="customer.sex">
        </div>
        <div class="form-group">
          <label>密码</label>
          <input type="password" class="form-control" placeholder="password" v-model="customer.password">
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
        </div>
        <div class="form-group">
          <label>学号</label>
          <input type="text" class="form-control" placeholder="num" v-model="customer.num">
        </div>
        <button type="submit" class="btn btn-primary">注册</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'StudentRegist',
  data () {
    return {
      customer: []
    }
  },
  methods: {
    addCustomer(e) {
      // console.log('qq')
      if (!this.customer.name || !this.customer.password || !this.customer.sex) {
        alert('请添加对应的信息')

      } else {
        let newCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          sex: this.customer.sex,
          password: this.customer.password,
          num: this.customer.num
        }
        // 增加，发送post请求
        this.$http.post('http://localhost:3000/students', newCustomer)
          .then((response) => {
            // console.log(response)
            // query要用path来引入，params要用name来引入
            this.$router.push({path:'/StudentLogin', query:{ alert:'注册成功'}})
          })
            .catch((reject) => {
              console.log(reject)
            })
          e.preventDefault()
      }
      // 阻止冒泡事件
      e.preventDefault()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* .header {
    text-align: center;
  } */
  .content {
    margin-top: 10px;
  }
</style>
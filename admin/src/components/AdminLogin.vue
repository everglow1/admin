<template>
  <div class="adminlogin container">
    <h3 class="header">管理员登录</h3>
    <div class="input-group">
      <span class="input-group-addon" id="basic-addon1">#</span>
      <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1" v-model="customer.name">
    </div>
    <br/>
    <div class="input-group">
      <span class="input-group-addon" id="basic-addon1">#</span>
      <input type="password" class="form-control" placeholder="password" aria-describedby="basic-addon1" v-model="customer.password">
    </div>
    <div class="radio">
      <button class="btn btn-default" v-on:click="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLogin',
  data () {
    return {  
      customer: {}
    }
  },
  methods: {
    login() {
      if (!this.customer.name || !this.customer.password) {
        alert('账号和密码不能为空！')
      } else {
        this.$http.get('http://localhost:3000/admin')
         .then( (response) => {
           let res = response.data
          //  console.log(res[0].name)
          if (this.customer.name == res[0].name & this.customer.password == res[0].password) {
            this.$router.push({path: '/customer'})
          } else {
            alert('账号或密码错误')
          }
         })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    text-align: center;
  }
  .radio {
    margin-top: 20px;
    text-align: center;
  }
  .btn {
    width: 68px;
    height: 40px;
  }
</style>
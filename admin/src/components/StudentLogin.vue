<template>
  <div class="studentlogin container">
    <h3 class="header">学生登录|注册</h3>
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
      <button class="btn btn-default" v-on:click="create">注册</button>
    </div>
    <Alert v-if="alert" v-bind:message="alert" v-show="local" @click="colse"></Alert>
  </div>
</template>

<script>
import Bus from '../assets/Bus.js'
import Alert from './Alert'
export default {
  name: 'StudentLogin',
  data () {
    return {
      loguser: [],
      customer: {},
      alert: '',
      local: true,
      show: true
    }
  },
  components: {
    Alert
  },
  methods: {
    clo() {
      this.show = false;
    },
    colse() {
      this.local = false;
    },
    login() {
      // console.log(this.loguser)
      if (!this.customer.name || !this.customer.password) {
        // alert('姓名和密码不能为空')
        return false
      } else {
        let newCustomer = {
          name: this.customer.name,
          password: this.customer.password
        }
        this.$http.get('http://localhost:3000/students')
          .then( (response) => {
            var ress = response.data
            for ( let i = 0; i < ress.length; i++) {
              // console.log(ress[i])
              if (this.customer.name == ress[i].name && this.customer.password == ress[i].password) {
                this.$router.push({path: '/studentdetail'})
                this.loguser = ress[i]
                // console.log(this.loguser)
                Bus.$emit('userMsg', this.loguser)
              }
            }
          })
      }
    },
    create() {
      this.$router.push({path:'/StudentRegist'})
    }
  },
  beforeDestroy () {
    this.login()
  },
  created () {
    if(this.$route.query.alert) {
    this.alert = this.$route.query.alert
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  .input-group {
    margin: 0 30px 0 30px;
  }
  .form-control {
    /* width: 300px; */
    /* padding: 0 40px 0 40px; */
    height: 40px;
    font-size: 20px;
  }
  .radio {
    text-align: center;
    margin-top: 30px;
  }
  .btn {
    margin-left:15px;
    width: 68px;
    height: 40px;
  }
</style>
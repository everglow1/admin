<template>
  <div class="customer container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <div class="header">
      <span>学生管理</span>
      <button class="btnn btn-danger" v-on:click="retu">返回</button>
    </div>
    <input type="text" class="form-control" placeholder="通过名字搜索" v-model="filterInput">
    <br/>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>学号</th>
          <th>性别</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- 遍历一个方法，传customer值， 和filterInput -->
        <tr v-for="(customer, index) in filterBy(customers, filterInput)" :key="index">
          <td class="td">{{customer.name}}</td>
          <td class="td">{{customer.num}}</td>
          <td class="td">{{customer.sex}}</td>
          <td ><router-link class="btn btn-default" v-bind:to=" '/customer/' + customer.id">详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'Customer',
  data () {
    return {
      customers: [],
      alert: '',
      filterInput: '',
      // aa: true
    }
  },
  components: {
    Alert
  },
  methods: {
    retu() {
      this.$router.push({path: '/'})
    },
    fetchCustomers() {
      this.$http.get('http://localhost:3000/students/')
        .then((response) => {
          // console.log(response)
          this.customers = response.data
        })
    },
    // 搜索功能
    filterBy(customers, value) {
      return customers.filter( function(customer) {
        // es6 match方法
        return customer.name.match(value)
      })
    }
    // hidden() {
    //   this.aa = false
    //   console.log('1')
    // }
  },
  created () {
    if(this.$route.query.alert) {
      this.alert = this.$route.query.alert
    }
    this.fetchCustomers();
  },
  updated() {
    this.fetchCustomers()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    position: relative;
    margin-bottom: 30px;
    margin-top: 20px;
    vertical-align: middle;
  }
  span {
    font-size: 25px;
  }
  .btnn {
    position: absolute;
    right: 10px;
  }
  .td {
    vertical-align: middle;
  }
</style>
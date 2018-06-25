<template>
  <div class="add container">
    <h1 class="page-header">添加学生</h1>
    <form v-on:submit="addCustomer">
      <div class="well">
        <h4>学生信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name">
        </div>
        <div class="form-group">
          <label>性别</label>
          <input type="text" class="form-control" placeholder="sex" v-model="customer.sex">
        </div>
        <div class="form-group">
          <label>学号</label>
          <input type="text" class="form-control" placeholder="num" v-model="customer.num">
        </div>
        <div class="form-group">
          <label>phone</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
        </div>
        <button type="submit" class="btn btn-primary">添加</button>
      </div>
    </form>
  </div>
</template>

<script>
// import Alert from './Alert'
export default {
  name: 'Add',
  data () {
    return {
      customer: [],
      // alert: ''
    }
  },
  methods: {
    addCustomer(e) {
      // console.log('qq')
      if (!this.customer.name || !this.customer.num || !this.customer.sex) {
        alert('请添加对应的信息')

      } else {
        let newCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          sex: this.customer.sex,
          num: this.customer.num
        }
        // 增加，发送post请求
        this.$http.post('http://localhost:3000/students', newCustomer)
          .then((response) => {
            // console.log(response)
            // query要用path来引入，params要用name来引入
            this.$router.push({path:'/', query:{ alert:'学生信息添加成功'}})
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

</style>
<template>
  <div class="edit container">
    <h1 class="page-header">修改学生信息</h1>
    <form v-on:submit="updateCustomer">
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
          <label>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
        </div>
        <div class="form-group">
          <label>密码</label>
          <input type="text" class="form-control" placeholder="password" v-model="customer.password">
        </div>
        <button type="submit" class="btn btn-primary">修改</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Add',
  data () {
    return {
      customer: []
    }
  },
  methods: {
    // 先拿到该页面的信息，赋给当前页面
    fetchCustomer(id) {
      this.$http.get('http://localhost:3000/students/' + id)
        .then((res) => {
          // console.log(res)
          this.customer = res.data
        })
    },
    updateCustomer(e) {
      // console.log('qq')
      if (!this.customer.name || !this.customer.num || !this.customer.sex) {
        alert('请添加对应的信息')
      } else {
        let updateCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          sex: this.customer.sex,
          num: this.customer.num,
          password: this.customer.password
        }
        this.$http.put('http://localhost:3000/students/' + this.$route.params.id, updateCustomer)
          .then((response) => {
            // console.log(response)
            // query要用path来引入，params要用name来引入
            this.$router.push({path:'/customer', query:{ alert:'学生信息更新成功'}})
          })
            .catch((reject) => {
              console.log(reject)
            })
          e.preventDefault()
      }
      // 阻止冒泡事件
      e.preventDefault()
    }
  },
  created() {
    this.fetchCustomer(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
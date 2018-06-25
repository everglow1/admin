<template>
  <div class="detail container">
    <!-- <router-link to="/customer" class="btn btn-default">返回</router-link> -->
    <h1>{{customer.name}}
      <span class="pull-right">
        <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">删除</button>
        <router-link class="btn btn-primary" v-bind:to="'/edit/' + customer.id">修改</router-link>
        <button class="btn btn-danger" v-on:click="retu">返回</button>
      </span>
    </h1>
    <ul class="list-group">
    	<li class="list-group-item">
    		<span class="glyphicon glyphicon-asterisk"> 
    			学号：{{customer.num}}
    		</span>
    	</li>
    	<li class="list-group-item">
    		<span class="glyphicon glyphicon-plus"> 
    			性别：{{customer.sex}}
    		</span>
    	</li>
    	<li class="list-group-item">
    		<span class="glyphicon glyphicon-asterisk">
    			电话：{{customer.phone}}
    		</span>
    	</li>
    	<li class="list-group-item">
    		<span class="glyphicon glyphicon-plus"> 
    			学业：{{customer.study}}
    		</span>
    	</li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk"> 
          绩点：{{customer.gpa}}
        </span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-plus"> 
          智育：{{customer.wisdom}}
        </span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-plus"> 
          学分：{{customer.credit}}
        </span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-plus"> 
          补考：{{customer.test}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      customer: ''
    }
  },
  methods: {
    retu() {
      this.$router.push({path: '/customer'})
    },
    fetchCustomers(id) {
      this.$http.get('http://localhost:3000/students/' + id)
        .then((response) => {
          // console.log(response)
          this.customer = response.data
        })
    },
    deleteCustomer(id) {
      // console.log(id)
      this.$http.delete('http://localhost:3000/students/'+id)
        .then((response) => {
          this.$router.push({path: '/customer', query:{alert: '用户删除成功'}})
        })
    }
  },
  created() {
    this.fetchCustomers(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
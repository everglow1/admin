<template>
  <div class="studentdetail container">
    <div class="header">
      <span class="title">我的信息</span>
      <span><router-link to="/studentlogin" class="btn btn-default">返回</router-link></span>
    </div>
    <ul class="list-group">
    	<li class="list-group-item">
    		<span class="glyphicon glyphicon-asterisk"> 
    			学号：{{student.num}}
    		</span>
    	</li>
    	<li class="list-group-item">
    		<span class="glyphicon glyphicon-plus"> 
    			性别：{{student.sex}}
    		</span>
    	</li>
    	<li class="list-group-item">
    		<span class="glyphicon glyphicon-asterisk">
    			电话：{{student.phone}}
    		</span>
    	</li>
    	<li class="list-group-item">
    		<span class="glyphicon glyphicon-plus"> 
    			学业：{{student.study}}
    		</span>
    	</li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk"> 
          绩点：{{student.gpa}}
        </span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-plus"> 
          智育：{{student.wisdom}}
        </span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-plus"> 
          学分：{{student.credit}}
        </span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-plus"> 
          补考：{{student.test}}
        </span>
      </li>
    </ul>
    <h4>课程</h4>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>课程名</th>
          <th>课程类型</th>
          <th>课程性质</th>
          <th>还差学分</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in course" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.type}}</td>
          <td>{{item.nature}}</td>
          <td>{{item.loseCourse}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Bus from '../assets/Bus.js'
export default {
  name: 'StudentDetail',
  data () {
    return {
      student: [],
      course: []
    }
  },
  created () {
    Bus.$on('userMsg', stu => {
      this.student = stu
      this.course = stu.course
      // console.log(this.student)
    })
  },
  // 
  beforeDestroy () {
    Bus.$off('useMsg', stu)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    padding-bottom: 10px;
  }
  .title {
    /* height: 38px; */
    display: inline-block;
    vertical-align: middle;
    font-size: 20px;
    line-height: 38px;
  }
  .btn {
    float: right;
    vertical-align: middle;
  }
</style>
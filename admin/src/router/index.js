import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/components/About'
import Customer from '@/components/Customer'
import Add from '@/components/Add'
import Detail from '@/components/Detail'
import Edit from '@/components/Edit'
import First from '@/components/First'
import StudentLogin from '@/components/StudentLogin'
import StudentRegist from '@/components/StudentRegist'
import StudentDetail from '@/components/StudentDetail'
import AdminLogin from '@/components/AdminLogin'

Vue.use(VueRouter)

export default new VueRouter({
  // mode: 'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      name: 'First',
      // component(与import引入的需一致)
      component: First
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/customer',
      name: 'Customer',
      component: Customer
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/customer/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/studentlogin',
      name: 'StudentLogin',
      component: StudentLogin
    },
    {
      path: '/studentregist',
      name: 'StudentRegist',
      component: StudentRegist
    },
    {
      path: '/studentdetail',
      name: 'StudentDetail',
      component: StudentDetail
    },
    {
      path: '/adminlogin',
      name: 'AdminLogin',
      component: AdminLogin
    }
  ]
})
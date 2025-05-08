const express = require('express')
const FrontController = require('../Controllers/FrontController')
const AdminController = require('../Controllers/admin/AdminController')
const CategoryController = require('../Controllers/admin/CategoryController')
const JobController = require('../Controllers/admin/JobController')
const route =express.Router()


route.get('/', FrontController.home)
route.get('/about', FrontController.about)
route.get('/joblist', FrontController.joblist)
route.get('/course', FrontController.course)
route.get('/contact', FrontController.contact)
route.get('/login', FrontController.login)
route.get('/register', FrontController.register)

//AdminController
route.get('/dashboard', AdminController.dashboard)


//CategoryController
route.get('/category/display', CategoryController.display)

//JobController
route.get('/job/display', JobController.display)




module.exports =route
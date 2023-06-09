const express = require('express')
const routs = express.Router()
const passport = require('passport')
const plan_controller = require('../../Controller/AdminController/plan_controller')
routs.get('/add_plan',passport.checkAuthentication,plan_controller.add_plan)
routs.post('/get_mallOption',passport.checkAuthentication,plan_controller.get_mallOption)
routs.post('/insert_plan',passport.checkAuthentication,plan_controller.insert_plan)
routs.get('/view_plan',passport.checkAuthentication,plan_controller.view_plan)
routs.get('/delete_plan/:id',plan_controller.delete_plan)
routs.get('/update_plan/:id',passport.checkAuthentication,plan_controller.update_plan)
routs.post('/edit_plan',plan_controller.edit_plan)
routs.get('/Active/:id', passport.checkAuthentication, plan_controller.Active)
routs.get('/Deactive/:id', passport.checkAuthentication, plan_controller.Deactive)
module.exports = routs
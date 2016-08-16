"use strict"
const ShellService = require('./shellService.js')
const ServerService = require('./serverService.js')
const globalData = require('./globalData.js')
module.exports = class Controller {
  constructor() {
    
    
    this.globalData = new GlobalData()
    this.shellService = new ShellService(this)
    this.serverService = new ServerService(this,this.globalData)
  }
  execCommand(str) {
    this.serverService.execCommand(str,true)
    
  }
  init() {
    this.serverService.init()
  }
  stop() {
    
    
  }
  
  
}

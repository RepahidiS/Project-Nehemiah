"use strict"
const ShellService = require('./shellService.js')
const ServerService = require('./serverService.js')
module.exports = class Controller {
  constructor() {
    
    
    
    this.shellService = new ShellService(this)
    this.serverService = new ServerService(this)
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

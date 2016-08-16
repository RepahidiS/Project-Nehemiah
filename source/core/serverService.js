"use strict";
const Main = require('./main.js')
module.exports = class ServerService {
  constructor(controller,globalData) {
    this.globalData = globalData
    this.controller = controller
    var serv = new Main(true,globalData)
  }
  init() {
    
  }
  
  
}

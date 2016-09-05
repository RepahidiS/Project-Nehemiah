"use strict";
const Main = require('./main.js')
module.exports = class ServerService {
  constructor(controller,globalData) {
    this.globalData = globalData
    this.controller = controller
    
    var serv = new Main(true,0,"Main","Main",globalData)
    this.servers = [];
    this.ids = 0
    this.servers[0] = serv;
    this.selected = serv;
    serv.init()
  }
  getNextId() {
    return this.ids ++;
  }
  init() {
    serv.start();
  }
  getCommand() {
    
    
  }
  execCommand(str) {
    var cmd = str.split(" ");
    
    
    if (!this.selected) return;
    
  }
  
}

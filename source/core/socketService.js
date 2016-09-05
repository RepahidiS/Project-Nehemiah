"use strict"

module.exports = class socketService {
  constructor(globalData) {
    this.globalData = globalData;
this.io = require("socket.io")
this.server = this.io(globalData.config.port)
  }
 
}

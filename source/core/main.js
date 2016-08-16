"use strict"
const DataService = require('./dataService.js')
module.exports = class Main {
  constructor(isMain,globalData) {
    this.isMain = isMain;
    this.dataService = new DataService(this,globalData)
    
  }
  init() {
    
    
  }
  stop() {
    
  }
  pause() {
    
  }
  
  
}

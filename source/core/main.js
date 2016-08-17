"use strict"
const DataService = require('./dataService.js')
module.exports = class Main {
  constructor(isMain,id,name,scname,globalData) {
    this.isMain = isMain;
    this.id = id
    this.name = name
    this.scname = scname
    this.dataService = new DataService(this,globalData)
    
  }
  init() {
    
    
  }
  stop() {
    
  }
  pause() {
    
  }
  
  
}

"use strict";

module.exports = class Cell {
  constructor(id,position,mass,ownerid,other) {
  this.id = id
  this.position = position
  this.mass = mass;
  this.ownerid = ownerid
  this.other = other
  
  }
  onCreation(dataService) {
    
  }
  
  
}

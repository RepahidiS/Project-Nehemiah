 module.exports = class WorldModel {
 contructor(top,bottom,left,right) {
 this.nodes = new QuadMap(bottom,top,left,right)
 this.nodes.addVar("player")
 this.nodes.addVar("ejected")
 this.nodes.addVar("virus")
 this.playerNodes = this.nodes.player
 this.ejectedNodes = this.nodes.ejected
 this.virusNodes = this.nodes.virus
 }
 
 
 
 
 }

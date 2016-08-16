
module.exports = class gameData {
constructor() {
this.data = {


};
}
getData() {
return this.data;
}
addData(name,value) {
this.data[name] = value
}
removeData(name) {
this.data[name] = null
}

}


module.exports = class GlobalData {
constructor(config) {
this.data = {};
this.config = config;
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

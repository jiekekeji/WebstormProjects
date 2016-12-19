/**
 * Created by jack on 16/12/7.
 */
var module001 = (function () {
    var person = {
        name: "",
        age: 0,
        getName: function () {
            return this.name;
        },

        setName: function (name) {
            this.name = name;
        }
    }
    return person;
})();

var module002 = (function () {
    var person = {
        name: "",
        age: 0,
        getName: function () {
            return this.name;
        },

        setName: function (name) {
            this.name = name;
        }
    }
    return person;
})();

module001.setName("jack");
console.log("name=" + module001.getName());
console.log(module001.name);

module002.setName("rose");
console.log("name=" + module002.getName());
console.log(module002.name);
console.log("name="+person);
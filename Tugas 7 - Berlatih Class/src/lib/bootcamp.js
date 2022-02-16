import Kelas from "./kelas"
import Student from "./student"

export default class Bootcamp {
    constructor(_name){
        this._name = _name
        this._classes = []
    }
    getName(){
        return this._name
    }
    getClasses(){
        return this._classes
    }
    createClass(_name, _level, _instructor){
        var kelas = new Kelas(_name, _level, _instructor)
        this._classes.push(kelas)
    }
    register(_class, _name){
        let classes = this._classes
        var currentClass = Kelas
        for (var i=0; i<classes.length; i++){
            currentClass = classes[i]
            if (currentClass._name == _class){
                currentClass.register(_name)
            }
        }
    }
    runBatch(){
        var obj = {}
        for (var i = 0; i < this._classes.length; i++) {
            var current = this._classes[i]
            if (!obj[`graduate from ${current._name}`]) {
                obj[`graduate from ${current._name}`] = current.graduate()
            }
        }
        return obj
    }
}
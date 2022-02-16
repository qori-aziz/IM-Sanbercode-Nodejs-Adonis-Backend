export default class Student {
    constructor(_name){
        this._name = _name
        this._scores = []
        this._finalScore = 0
    }
    getName(){
        return this._name
    }
    getScore(){
        return this._scores
    }
    getFinalScore(){
        return this._finalScore
    }
    setName(_name){
        this._name = _name
    }
    setScore(_scores){
        this._scores = _scores
    }
    setFinalScore(_finalScore){
        this._finalScore = _finalScore
    }
}
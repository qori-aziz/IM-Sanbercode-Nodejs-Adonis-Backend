import Student from "./student"

export default class Kelas {
    constructor(_name, _level, _instructor){
        this._name = _name
        this._students = []
        this._level = _level
        this._instructor = _instructor
    }
    getName(){
        return this._name
    }
    getStudents(){
        return this._students
    }
    getLevel(){
        return this._level
    }
    getInstructor(){
        return this._instructor
    }
    setName(_name){
        this._name = _name
    }
    setInstructor(_instructor){
        this._instructor = _instructor
    }
    setlevel(_level){
        this._level = _level
    }
    assignNilai(){
        let students = this._students
        for (var i=0; i<students.length; i++){
            var sum = 0
            var currentStudent = students[i]
            for (var j=0; j < 4; j++){
                currentStudent._scores[j] = Math.floor(Math.random() * 100);
                if (currentStudent._scores[j] < 50){
                    currentStudent._scores[j] = currentStudent._scores[j] + 50
                }
                sum += currentStudent._scores[j]
            }
            currentStudent._finalScore = Math.floor(sum / 4)
        }
    }
    register(murid){
        this._students.push(murid)
    }
    graduate(){
        let participant = []
        let completed = []
        let mastered = []
        let students = this._students
        for (var i=0; i<students.length; i++){
            var currentStudent = students[i]
            if (currentStudent._finalScore < 60){
                participant.push(currentStudent)
            } else if (currentStudent._finalScore > 60 && currentStudent._finalScore <= 85){
                completed.push(currentStudent)
            } else {
                mastered.push(currentStudent)
            }
        }
        let obj = {
            participant : participant,
            completed : completed,
            mastered : mastered
        }
        return obj
    }
}
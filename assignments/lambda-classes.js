// CODE here for your Lambda Classes
class Person {
    constructor(personAttr) {
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
        this.gender = personAttr.gender;
    };

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    };
};

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.faveLanguage = instructorAttr.faveLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    };

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    };

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    };
};

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    };

    listSubjects() {
        let i = 0;
        while (i<this.favSubjects.length, i++){
            return `I like ${this.favSubjects[i]}`;
        }
    };

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    };

    sprintChallenge(subject){
        return `${this.name} has begun Sprint Challenge for ${subject}.`;
    };
};

class ProjectManager extends Instructor {
    constructor(PMAttr) {
        super(PMAttr);
        this.gradClassName = PMAttr.gradClassName;
        this.favInstructor = PMAttr.favInstructor;
    };

    standUp(channel) {
        return `${this.name} announces to ${channel}, "@channel standy times!"`;
    };

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    };
}

const keiran = new Instructor({
    name: 'Keiran',
    age: 30,
    location: 'SLC',
    gender: 'Male',
    specialty: 'Front End Development',
    faveLanguage: 'Javascript',
    catchPhrase: 'Alright, let\'s get started.'
});

const leslie = new ProjectManager({
    name: 'Leslie',
    age: 29,
    location: 'San Francisco',
    gender: 'Female',
    specialty: 'Team Lead',
    faveLanguage: 'Redux',
    catchPhrase: 'Looks good to me.',
    gradClassName: 'Full Stack Web',
    favInstructor: 'Keiran'
});

const kevin = new Student({
    name: 'Kevin',
    age: 29,
    location: 'Los Angeles',
    gender: 'Male',
    previousBackground: 'Pilot',
    className: 'WebPT8',
    favSubjects: ['Design', 'HTML', 'CSS', 'LESS']
});

console.log(keiran.name);
console.log(keiran.age);
console.log(keiran.location);
console.log(keiran.gender);
console.log(keiran.specialty);
console.log(keiran.faveLanguage);
console.log(keiran.catchPhrase);
console.log(leslie.name);
console.log(leslie.age);
console.log(leslie.location);
console.log(leslie.gender);
console.log(leslie.specialty);
console.log(leslie.faveLanguage);
console.log(leslie.catchPhrase);
console.log(leslie.gradClassName);
console.log(leslie.favInstructor);
console.log(kevin.name);
console.log(kevin.age);
console.log(kevin.location);
console.log(kevin.gender);
console.log(kevin.previousBackground);
console.log(kevin.className);
console.log(kevin.favSubjects);
console.log(keiran.speak());
console.log(leslie.speak());
console.log(kevin.speak());
console.log(keiran.demo('Javascript'));
console.log(keiran.grade(kevin, 'Javascript'));
console.log(leslie.standUp('WebPT8_Leslie'));
console.log(leslie.debugsCode(kevin, 'Javascript'));
console.log(kevin.listSubjects());
console.log(kevin.PRAssignment('Javascript'));
console.log(kevin.sprintChallenge('LESS'));
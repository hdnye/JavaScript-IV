// import name from 'name';

// CODE here for your Lambda Classes

class Person {
    constructor(attr) {
        this.name = attr.name,
        this.age = attr.age,
        this.location = attr.location,
        this.subject = attr.subject
 }

    speak() {
        return `Hello, my name is ${this.name} and I am from ${this.location}`;
    }
  };

  class Instructor extends Person {
      constructor(inst) {
          super(inst);
          this.specialty = inst.specialty,
          this.favLanguage = inst.favLanguage,
          this.catchPhrase = inst.catchPhrase          
      }
      demo() {
          return `Today we are learning about ${this.subject}`;
      }
      grade(){
          return `${this.name} receives a perfect score on ${this.subject}`;
      }
  };

  class Student extends Person {
      constructor(stu) {
          super(stu);
          this.previousBackground = stu.previousBackground,
          this.className = stu.className,
          this.faveSubjects = stu.faveSubjects  
      }
    
    
        PRAssignment() {
           return `${this.name} has submitted a PR for ${this.subject}`;
        }
        sprintChallenge() {
            return `${this.name} has begun sprint challenge of ${this.subject}`;
        }
  };

    class ProjectManager extends Instructor {
        constructor(projMgr) {
            super(projMgr);
             this.gradClassName = projMgr.gradClassName,
             this.favInstructor = projMgr.favInstructor
        }
        standUp(channel) {
            return `${this.name} announces to ${channel} @channel standy times!`;
        }
        debugsCode() {
            return `${this.name} debugs ${this.name}'\s code on ${this.subject}`;
        }
    };

    // const stu = {
    //     name: 'Steve',
    //     age: 35
    // }

    // const steve = new Student(stu);
    // steve.sprintChallenge('Logan', 'JSV');

    const logan = new Student ({
        name: 'Logan',
        age: 35,
        location: 'Albuquerque',
        previousBackground: 'Acrobat',
        className: 'Webpt10',
        faveSubjects: [
            'CSS',
            'React',
            'JavaScript'
        ]
    });

    const sharla = new Instructor ({
        name: 'Sharla',
        age: 52,
        specialty: 'Python',
        location: 'Atlanta',
        previousBackground: 'Cat Herder',
        favLanguage: 'Klingon',
        catchPhrase: 'A.B.C'
    });


    const willie = new ProjectManager ({
        name: 'Willie',
        age: 30,
        location: 'Minnetonka',
        previousBackground: 'Willy Free-er',
        gradClassName: 'Webpt10',
        favInstructor: 'Sharla'

    });

  console.log(logan.sprintChallenge('Logan', 'JavaScript'));
  console.log(sharla.speak());
  console.log(willie.debugsCode('Willie', 'Logan', 'CSS' ));
  console.log(sharla.demo('JSON'));
   

// CODE here for your Lambda Classes

class Person {
    constructor(attr) {
        this.name = attr.name,
        this.age = attr.age,
        this.location = attr.location,
        this.subject = attr.subject
 }

    speak() {
        return `Hello, my name is ${name} and I am from ${location}`;
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
          return `Today we are learning about ${subject}`;
      }
      grade(){
          return `${student.name} receives a perfect score on ${subject}`;
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
           return `${student.name} has submitted a PR for ${subject}`;
        }
        springCHallenge() {
            return `${student.name} has begun spring challenge of ${subject}`;
        }
  };

    class ProjectManager extends Instructor {
        constructor(pM) {
            super(pM);
             this.gradClassName = pM.gradClassName,
             this.favInstructor = pM.favInstructor
        }
        standUp() {
            return `${this.name} announces to ${channel}, @channel standy times!`;
        }
        debugsCode() {
            returns `${this.name} debugs ${student.name}'s code on ${subject}`;
        }
    };

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

    

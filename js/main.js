// OOP --> taer2t ketaba le al code awsf al ashya2 (object oriented programming)

// why we oop --> low errors in code , monzm , simulate reality (mentors,instructors)


// js --> prototype based OOP



// Constructor function --> to make objects (return non primitive)

// function User(userName,userAge,userSalary){
//     // properties
//     this.name = userName
//     this.age = userAge
//     this.salary = userSalary

//     // return {course:'fe}

//     // methods
//     // problem here is when make a new User 
//     // not the best place to write methods
//     // this.handleSign = function(){
//     //     console.log('hello from user');
//     // }
// }

// // best practice to write methods 
// User.prototype.handleSign = function(){
//     console.log('hello from prototype');
// }

// User.prototype.frameWork = 'Angular'


// let userGded = new User('ahmed',25,5000)
// let userGded2 = new User('route',30,4000)

// userGded.handleSign()
// console.log(userGded);
// // console.log(userGded2);


// ----------------------------------------------------------------------








// Es6 syntactic sugar to make object

// class Admin{
//     constructor(adminName,adminAge,adminSalary){
//         // properties 
//         this.name = adminName
//         this.age = adminAge
//         this.salary = adminSalary
//     }
    
//     // methods
//     handleRegister(){
//         console.log('hello from constructor');
//     }
//     handleSignin(){
//         console.log('hello from sign in');
//     }
// }




// let newAdmin = new Admin('ahmed',25,3000)

// console.log(newAdmin);
// newAdmin.handleRegister()
// newAdmin.handleSignin()




// // -----------------------------------------

// // to make inheritance in classes

// class SuperAdmin extends Admin {
//     constructor(sadminName,sadminAge,sadminSalary,sadminCourse){
//         // super(sadminName,sadminAge,sadminSalary)
//         // console.log('hello from super Admin');
//         this.course = sadminCourse
//     }
// }


// let superAdmin = new SuperAdmin('ahmed',23,5000,'front')
// console.log(superAdmin);



import { Setting } from "./setting.js";




const setting = new Setting() 
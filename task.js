"use strict";

function getResult(a,b,c){
    let discriminant = b**2-4*a*c;
    let result = [];

    if(discriminant > 0) {
      result[0] = (-b + Math.sqrt(discriminant))/(2*a);
      result[1] = (-b - Math.sqrt(discriminant))/(2*a);
    } else if(discriminant == 0) {
      result = [-b / (2 * a)];
    }

    return result;
}

function getAverageMark(marks) {
    let sum = 0;
  
    if(marks.length == 0) {
      return 0;
    } else if (marks.length > 5) {
      marks.splice(5);
    }
    for(let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    return sum / marks.length;
  }

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}
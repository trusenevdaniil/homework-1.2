"use strict";

function getResult(a,b,c){
    let discriminant = b**2-4*a*c;
    let x1, x2;

    if(discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant))/(2*a);
        x2 = (-b - Math.sqrt(discriminant))/(2*a);
        return x1, x2;
    }  else if(discriminant == 0) {
        x1 = -b/(2*a);
        return x1;
    } else if(discriminant < 0) {
        return "Корней нет";
    }
}

function getAverageMark(marks) {
    let sum = 0;
    let averageMark;
  
    if(marks.length == 0) {
      return 0;
    } else if (marks.length > 5) {
      marks.splice(5);
    }
    for(let i = 0; i < marks.length; i++) {
      sum += marks[i];
      averageMark = sum / marks.length;
    }
    return averageMark;
  }

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}
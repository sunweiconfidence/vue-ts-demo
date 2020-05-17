"use strict";
var aName = 'lisi';
var dAge = 18;
dAge = 18.13;
dAge = 17;
var isSingleDog = true;
isSingleDog = false;
var undef = undefined;
var nul = null;
//5.数组
//let arrJS = [1,'a',true,[],{}]
var arrHero = ['test1', 'test2'];
var arrHeroAge = [18, 21];
//7元组
var tup1 = ['test1', 18, true];
console.log(tup1[0]);
console.log(tup1.length);
//8 枚举
var Gender;
(function (Gender) {
    Gender[Gender["Boy"] = 1] = "Boy";
    Gender[Gender["Girl"] = 2] = "Girl";
    Gender[Gender["Unknown"] = 3] = "Unknown";
})(Gender || (Gender = {}));
console.log(Gender.Boy);
console.log(Gender.Girl);

let aName: string = 'lisi';

let dAge: number =18;
dAge = 18.13;
dAge = 17;

let isSingleDog: boolean = true;
isSingleDog = false;

let undef: undefined = undefined;
let nul: null = null;

//5.数组
//let arrJS = [1,'a',true,[],{}]
let arrHero: string[] = ['test1','test2']
let arrHeroAge: number[] = [18,21];

//7元组
let tup1:[string, number, boolean] =['test1',18, true];
console.log(tup1[0]);
console.log(tup1.length);

//8 枚举
enum Gender{
    Boy =1,
    Girl=2,
    Unknown=3
}
console.log(Gender.Boy);
console.log(Gender.Girl);

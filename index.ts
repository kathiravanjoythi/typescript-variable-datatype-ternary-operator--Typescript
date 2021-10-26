// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

var  fullname:string='karthiravan';
var mark :number = 100;
const male :boolean=true
console.log(fullname,mark,male )
let kathir : Array<string>= ['dena','nimalan','kumaran','kathir'];
console.log(kathir)
let dena:Date = new Date();
console.log(dena.getHours()) 
 let kathiravan: any = "kathiravan";
console.log(kathiravan)

// 15-42 - 'hh-mm'
// 10-10-2021 - dd-mm-yyyy
var assignment: Date = new Date();
console.log(assignment.getHours() +'-'+assignment.getMinutes())
let assignment2: Date = new Date();
console.log(assignment2.getDate()+'-'+`${assignment2.getMonth()+1}`+'-'+assignment2.getFullYear())
let name1 : {name:string,Age:number,gender:string}={name:'dena',Age:11,gender:'male'};
console.log(name1.Age+'-'+name1.name+':'+name1.gender)

let islighton:boolean=false
console.log(!islighton?'light is on' : 'light is off')

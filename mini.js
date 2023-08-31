let library=[];
function Addbooks(title,author,yearpublished,readstatus){
this.title=title;
this.author=author;
this.yearpublished=yearpublished;
this.readstatus=false;
}

function add(){
    document.getElementById("box1").style.display='none';
    document.getElementById("box2").style.display='block';
    let c=document.getElementById("box2");
    let title=prompt("ENTER BOOK TITLE ");
    let author=prompt("ENTER AUTHOR NAME");
    let yearpublished=prompt("ENTER THE YEAR");
   let user=new Addbooks(title,author,yearpublished);
   let insertat=prompt("Do you need to add  book at front or end of Rack ");
c.innerHTML="<h3>"+'CHECK YOUR BOOK DETAILS'+"</h2>";
c.innerHTML+="TITLE : "+user.title+"<br>"
c.innerHTML+="AUTHOR : "+user.author+"<br>"
c.innerHTML+="YEARPUBLISHED : "+user.yearpublished+"<br>"
c.innerHTML+="INSERTION : "+insertat+"<br>"
c.innerHTML+="<button onclick='redirect()' id='ho'>"+ 'Home'+"</button></a>";

   if(insertat=='front'){
library.unshift(user);
console.log("Your book added successfully added at front");
   }
   else{
    library.push(user);
    console.log("Your book added successfully added at end");
   }
}

function redirect(){
    document.getElementById("box2").style.display='none';
    document.getElementById("box1").style.display='grid';
}

function remove()
{
   document.getElementById("box1").style.display='none';
document.getElementById("box2").style.display='block';
let remove=prompt("Do you need to remove from front or last : ");
let c=document.getElementById("box2");
if(remove==null){
console.log("ji");
c.innerHTML="<h2>"+"PLEASE CHOOSE FRONT OR END"+"</h2>"+"<br>";
c.innerHTML+="<button onclick='redirect()' id='ho'>"+ 'Home'+"</button></a>";

}

else{

if(remove == 'front'){

    if(library.length!=0){
let s=library.shift();
console.log(s);
c.innerHTML="Your book removed at front"+"<br>";
c.innerHTML+="TITLE : "+s.title+"<br>"
c.innerHTML+="AUTHOR : "+s.author+"<br>"
c.innerHTML+="YEARPUBLISHED : "+s.yearpublished+"<br>"
c.innerHTML+="REMOVED : "+remove+"<br>"
c.innerHTML+="<button onclick='redirect()' id='ho'>"+ 'Home'+"</button></a>";

}
else{
    c.innerHTML="No Available Books So, Removal at Front is not Possible"+"<br>";
    c.innerHTML+="<button onclick='redirect()' id='ho'>"+ 'Home'+"</button></a>";
}
}
else{
    if(library.length!=0){
   let m=library.pop();
   console.log("your book removed at end");
   c.innerHTML="TITLE : "+m.title+"<br>"
c.innerHTML+="AUTHOR : "+m.author+"<br>"
c.innerHTML+="YEARPUBLISHED : "+m.yearpublished+"<br>"
c.innerHTML+="REMOVED : "+remove+"<br>"
c.innerHTML+="<button onclick='redirect()' id='ho'>"+ 'Home'+"</button></a>";
}
else{

    c.innerHTML="No Available Books So,Removal at End is not Possible"+"<br>";
    c.innerHTML+="<button onclick='redirect()' id='ho'>"+ 'Home'+"</button></a>";

}

}
}
}


function search(){

   document.getElementById("box1").style.display='none';
   document.getElementById("box2").style.display='block';
   let v=prompt("ENTER THE BOOK NAME TO BE SEARCHED : ");
  let arr= library.filter(b=> b.title == v);
  //console.log(arr);
  let c=document.getElementById("box2");
  if(arr.length==0){
   c.innerHTML="<h2>"+"Your book Not found"+"</h2>"+"<br>";
   c.innerHTML+="<button onclick='redirect()' id='ho'>"+ 'Home'+"</button></a>";
  }
  else{
c.innerHTML="<h2>"+"Your book found"+"</h2>"+"<br>";

for(let i of arr){

   c.innerHTML +="TITLE : "+i.title+"<br>"
   c.innerHTML+="AUTHOR : "+i.author+"<br>"
   c.innerHTML+="YEARPUBLISHED : "+i.yearpublished+"<br>"
   
}
c.innerHTML+="<button onclick='redirect()' id='ho'>"+ 'Home'+"</button></a>";

  }
}

function  display(){

   document.getElementById("box1").style.display='none';
   document.getElementById("box2").style.display='block';
   let c=document.getElementById("box2");

   if(library.length==0){
    c.innerHTML="<h2>"+" BOOKS NOT AVAILABLE : "+"</h2>";
    c.innerHTML+="<button onclick='redirect()' id='ho'>"+ 'Home'+"</button></a>";
   }
   else{
    c.innerHTML="<h2>"+"AVAILABLE BOOKS : "+"</h2>";
   
    for(let i of library){
 
       c.innerHTML +="TITLE : "+i.title+"<br>"
       c.innerHTML+="AUTHOR : "+i.author+"<br>"
       c.innerHTML+="YEARPUBLISHED : "+i.yearpublished+"<br>"
       c.innerHTML+='-------------------------------------------'+"<br>"
    }
    c.innerHTML+="<button onclick='redirect()' id='ho'>"+ 'Home'+"</button></a>";
   }
  
}

function displayhome(){

   document.getElementById("box1").style.display='none';
   document.getElementById("box2").style.display='block';
let c=document.getElementById("box2");
c.innerHTML="<h2 id='hi' class='ti'>"+"Let us view  a New Era of Library Management"+"</h2>";
c.innerHTML+="<span style='font-style:italic;'>"+"Welcome to the  website of Library Management System We are thrilled to introduce you to a groundbreaking solution that revolutionizes the way libraries function, creating a seamless experience for both patrons and administrators."+ "</span>"+"<br>";
c.innerHTML+="<button id='st' class='btn' style='margin-top:10px;margin-left:300px' onclick='gocontent()'>"+ 'START'+"</button>";

}
function gocontent(){
   document.getElementById("box1").style.display='grid';
   document.getElementById("box2").style.display='none';
}

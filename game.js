const dialogText = document.getElementById("dialog-text");
const nameTag = document.getElementById("name-tag");
const nextBtn = document.getElementById("next-btn");

let dialogIndex = 0;
let inChoice = false;

/* Isi dialog visual novel */
const dialog = [
 {name:"Anh Dimas", text:"Xin chào Thom 🌸"},
 {name:"Anh Dimas", text:"Anh làm game này riêng cho em đó!"},
 {name:"Thom", text:"Thiệt luôn hả? 😂"},
 {name:"Anh Dimas", text:"Giờ tới câu hỏi cuối cùng..."},
 {name:"Anh Dimas", text:"Em có muốn đi hẹn hò với anh không? 💖"}
];

/* Typing effect */
function typeText(text, element, callback){
  element.innerHTML="";
  let i=0;
  let interval=setInterval(()=>{
    if(i<text.length){
      element.innerHTML += text.charAt(i);
      i++;
    }else{
      clearInterval(interval);
      if(callback) callback();
    }
  },30);
}

/* Tampilkan dialog */
function showDialog(){
  let d = dialog[dialogIndex];
  nameTag.innerText = d.name;
  typeText(d.text, dialogText, ()=>{
    if(dialogIndex === dialog.length-1){
      showChoices();
    }
  });
}

/* Tombol pilihan ending */
function showChoices(){
  inChoice = true;
  nextBtn.style.display="none";

  const choiceBox = document.createElement("div");
  choiceBox.innerHTML = `
    <button onclick="endingYes()">Có 💖</button>
    <button onclick="endingFunny()">Không đâu 😝</button>
  `;
  dialogText.appendChild(choiceBox);
}

/* Happy ending */
function endingYes(){
  nameTag.innerText="SYSTEM";
  dialogText.innerHTML=
   "🎉 HAPPY ENDING 🎉<br>Thom đồng ý rồi!<br>Anh Dimas đỏ mặt ngoài đời 😳💖";
  showRestart();
}

/* Funny ending */
function endingFunny(){
  nameTag.innerText="SYSTEM";
  dialogText.innerHTML=
   "😂 FUNNY ENDING 😂<br>Thom từ chối!<br>Anh Dimas: 'Anh thử lại ngày mai nha!' 🤣🌸";
  showRestart();
}

/* Tombol restart */
function showRestart(){
  nextBtn.style.display="block";
  nextBtn.innerText="Chơi lại 🔁";
  nextBtn.onclick=()=>location.reload();
}

/* Next dialog */
nextBtn.addEventListener("click", ()=>{
  if(inChoice) return;
  dialogIndex++;
  if(dialogIndex < dialog.length){
    showDialog();
  }
});

showDialog();

/* Sakura jatuh terus */
function createSakura(){
  let s=document.createElement("div");
  s.classList.add("sakura");
  s.innerHTML="🌸";
  s.style.left=Math.random()*100+"vw";
  s.style.animationDuration=(5+Math.random()*5)+"s";
  document.getElementById("sakura-container").appendChild(s);
  setTimeout(()=>s.remove(),10000);
}
setInterval(createSakura,300);

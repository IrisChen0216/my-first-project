var btn=document.getElementById('enter')
var oAdd=document.getElementById('orderAdd')

function getType(){
    var getTypein=document.getElementById('typein').value;
    var newText=document.createElement('li');
    newText.innerText=getTypein;
    oAdd.append(newText); 

    var newBtn=document.createElement('button');
    newBtn.innerText="刪除" 
    newText.append(newBtn);
    newBtn.setAttribute('class','deleteText')
    document.getElementById('typein').value=""
}
btn.addEventListener('click',getType)

document.addEventListener('click', function(e) {
     if (e.target.classList=='deleteText') {
       e.target.parentElement.remove()
     }
});
  
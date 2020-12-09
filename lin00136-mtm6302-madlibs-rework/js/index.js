let p1=''
let inp=''
let word={}
const tag1=document.getElementsByClassName('list')[0]
const box=document.getElementsByClassName('p1')[0]
stories.forEach(function(item,index){
	p1+=`<li onclick="showInput(${index})">${item.title}</li>`
})
tag1.innerHTML=p1

function showInput(index){
	stories[index].words.forEach(function(miditem,i){
		console.log(miditem)
		inp+=`<input name="${miditem}" placeHolder="${miditem}" /><br/>`
	})
	inp=`<form id="form"  onsubmit="return subForm(${index})">${inp}<button>CREATE STORY</button></form>`
	box.innerHTML=inp
}
function subForm(index){
	console.log(index)
	let text=document.getElementById('form')
	stories[index].words.forEach(item=>{
		word[item]=text[item].value
		// console.log()
	})
let html=stories[index].output(word)+'<div style="text-align:center"><button onclick="location.reload()">ReCreated a story</button></div>'
	box.innerHTML=html
	return false;
}
// function subForm(index){
// 	console.log(document.getElementById('form'))
// 	// box.innerHTML=stories[index].output()
// }
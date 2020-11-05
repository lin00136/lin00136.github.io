var container=document.getElementById('container');
var list=document.getElementsByClassName('img')[0];
var ind=0;
var imgList=[
	{link:'./img/1.jpg',title:'a dog'},
	{link:'./img/2.jpg',title:'a mini cat'},
	{link:'./img/3.jpg',title:'a big cat'},
	{link:'./img/4.jpg',title:'a shy cat'},
	{link:'./img/5.jpg',title:'a cute cat'},
	{link:'./img/6.jpg',title:'nice food'},
	{link:'./img/7.jpg',title:'vegetable'},
	{link:'./img/8.jpg',title:'food'},
	{link:'./img/9.jpg',title:'sala'},
	{link:'./img/10.jpg',title:'water'},
	{link:'./img/11.jpg',title:'sun'},
	{link:'./img/12.jpg',title:'beautiful'},
	{link:'./img/13.jpg',title:'landscape'},
	{link:'./img/14.jpg',title:'cloud'},
	{link:'./img/15.jpg',title:'flower'},
]
var text='';
for(var i in imgList){
	text+='<li onclick=showLarge('+i+')><img src="'+imgList[i].link+'" title="'+imgList[i].title+'" /></li>';
}
list.innerHTML=text
	var large=document.getElementsByClassName('large')[0];
function showLarge(i){
	
	ind=i;
	large.classList.remove('hide')
	
	changeImg(ind)
	console.log(ind)
}
function changeImg(i){
	document.getElementsByClassName('cont')[0].innerHTML='<img src="'+imgList[i].link+'" ><p>'+imgList[i].title+'</p>'
}
function prev(){
	if(ind>0){
	ind=ind-1;	
	}else{
		ind=14;
	}
	changeImg(ind)
	console.log(ind)
}
function next(){
	if(ind<14){
		ind=ind+1
	}else{
		ind=0;
	}
	changeImg(ind)
}
function hideLarge(){
	console.log('aaaaa')
	large.classList.add('hide')
}
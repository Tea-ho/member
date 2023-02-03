console.log('작동')
let 특수문자=('!','^','*','~','{','}')

function login(){
	
let id_input=document.querySelector('.id_input').value;
let pw_input=document.querySelector('.pw_input').value;
let pw = pw_input.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/);
console.log(pw)

	let html=''
	if(id_input.length<6 || id_input.length>12){
		html+='아이디는 6자리 이상 12자리 이하로만 가능합니다'
		document.querySelector('#id_input').innerHTML=html
		document.querySelector('#id_input').style.display='inline-block';
		return;		
	}if(pw==-1){   
		console.log('이상하네')         
		html+='비밀번호에 특수문자를 입력해주세요'
		document.querySelector('#pw_input').innerHTML=html
		document.querySelector('#pw_input').style.display='inline-block';
	}else{
		alert('로그인성공')
		location.href = "http://www.naver.com"
		

}
	
}
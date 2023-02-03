console.log('작동')

출력()
function 출력(){
	let html=`<div ><input class="idinput"  type="text" placeholder="아이디"></div>
					<div id="id_input"></div>	
					
					<div><input class="pwinput" type="password" placeholder="비밀번호"></div>
					<div id="pw_input"></div>	`
	
	document.querySelector('.input_box').innerHTML=	html		
	
}

function login(){
	
console.log(회원명단)
let idinput=document.querySelector('.idinput').value;
let pwinput=document.querySelector('.pwinput').value;
let pw = pwinput.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/);
console.log(pw)

	
	let html=''
	if(idinput.length<6 || idinput.length>12){
		html+='아이디는 6자리 이상 12자리 이하로만 가능합니다'
		document.querySelector('#id_input').innerHTML=html
		document.querySelector('#id_input').style.display='inline-block';
		return;		
	}if(pw==-1 || pwinput.length<6){   
		html+='패스워드는 6자리이상이며 특수문자를 입력하세요'
		document.querySelector('#pw_input').innerHTML=html
		document.querySelector('#pw_input').style.display='inline-block';
		return;	
	}
	회원명단.forEach( (o)=>{
		if(o.id==idinput && o.pw==pwinput){
			alert(`${o.name}님 어서오세요!`)
			location.href='../index.html';
		}else{alert('없는정보입니다 회원가입을 해주세요!');출력()}
		
	})
		

}
	



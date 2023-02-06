console.log('작동')

let 회원명단=[{id:'장민정입니다',pw:'minjeong!',name:'장민정' }]


function id_check(){//아이디 인풋
	
let id_input=document.querySelector('.id_input').value;
	
	회원명단.forEach( (o)=>{
		if(o.id==id_input){
			alert('이미 존재하는 아이디 입니다.')
			return;
		}
	
	if(id_input.length<6 || id_input.length>12){
		alert('아이디는 6자리 이상 12자리 이하로만 가능합니다')
		
	}else{
		
		document.querySelector('.id_error').innerHTML='OK'
		document.querySelector('.id_error').style.display='inline-block';
		
	}
	})
	
}	

function pw_check(){//패스워드 인픗
	
	let pw_input=document.querySelector('.pw_input').value;
	let pw = pw_input.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/);
	
	if(pw_input.length<6 || pw==-1 ){
		alert('패스워드는 6자리이상이며 특수문자를 입력하세요')
		
	}else{
		document.querySelector('.pw_error').innerHTML='OK'
		document.querySelector('.pw_error').style.display='inline-block';
	}
		
}

function pw_check2(){//비밀번호 재확인 인풋
	
	let i=document.querySelector('.pw_input').value;
	
	let pw_input2=document.querySelector('.pw_input2').value;
	console.log('pw_input2',pw_input2)
	console.log('pw_input1',i)
	
	if(i==pw_input2){
		console.log("작동")
		document.querySelector('.pw_error2').innerHTML='OK'
		document.querySelector('.pw_error2').style.display='inline-block';
		
		
	}else{alert('비밀번호가 서로 다릅니다')		}
	
	
}







function join_btn(){// 버튼을 눌렀을때

	let 회원={
		id:document.querySelector('.id_input').value,
		pw:document.querySelector('.pw_input').value,
		name:document.querySelector('.name').value

	}

	let name=document.querySelector('.name').value;
	let m_num=document.querySelector('.m_num').value;
	let yyy=document.querySelector('.yyy').value;
	let mmm=document.querySelector('.mmm').value;
	let ddd=document.querySelector('.ddd').value;
	let email=document.querySelector('.email').value;

	let id_error=document.querySelector('.id_error').value;
	console.log('id_error',id_error)




	if(회원.id==''||회원.name==''||회원.pw==''||m_num==''||yyy==''||mmm==''||ddd==''||email==''){
		alert('빈칸을 채워주세요')
		return;
	}else if(!isNaN(name)){
		alert("이름은 한글로 써주세요")
		return;

	}else if(isNaN(m_num)){
		alert("핸드폰번호는 숫자만 써주세요")
	}else if(m_num.length<10){
		alert("핸드폰번호는 10자리 이상입니다")
	}else if(yyy.length!=4 ||mmm.length<1 ||mmm.length>2||ddd.length<1 ||ddd.length>2 ){
		alert("생년월일을 확인해주세요")
	}else{
	회원명단.push(회원)
	console.log(회원명단)

	alert('가입해주셔서 감사합니다')
	location.href='../index.html'
	
	}
		
}




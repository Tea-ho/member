
function  out(){ //탈퇴유효성
	console.log('작동')
	
	let id= prompt('아이디를 입력하세요')
	let pw= prompt('비밀번호를 입력하세요')
	
	회원명단.forEach( (회원,i)=>{
		if(id==회원.id&&pw==회원.pw){
			let 재확인=prompt('회원탈퇴를 기입해주세요')
			if(재확인=='회원탈퇴'){
				alert('회원탈퇴되었습니다.')
				회원명단.splice(i,1)
				console.log(회원명단)
			}
			location.href='../index.html'
		}else {alert( '아이디와 비밀번호를 확인하여 주세요')}
	} )
}
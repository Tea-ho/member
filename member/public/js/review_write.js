$(document).ready(function() { 
  $('#summernote').summernote({
	  
			fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New'] ,
			fontSizes: ['8','9','10','11','12','14','16','18','20','22','24','28','30','36','50','72'] ,
	height : 400 , lang: "ko-KR"});
});



let review_list = []

function review_write(){
	// 1. 입력받는 데이터를 객체화
	let name = document.querySelector('.w_name').value
	let pw = document.querySelector('.w_pw').value
	let kor_check = /([^가-힣ㄱ-ㅎㅏ-ㅣ\x20])/i;
	
	let year = new Date().getFullYear(); // 기본값 : 현재 연도
	let month = new Date().getMonth()+1; // 기본값 : 현재 월
	let day = new Date().getDate();
	
	
	if (kor_check.test(name)){
		alert('한글만 입력해주세요.')
		return false;
	}
	else if(isNaN(pw)){
		alert('비밀번호는 숫자만 입력하세요.')
		return false;
	}
	else{
		let review = {
		title : document.querySelector('.w_title').value ,
		content : document.querySelector('.w_content').value ,
		writer : document.querySelector('.w_name').value  ,
		password : document.querySelector('.w_pw').value ,
		ymd : `${year}.${month}.${day}`
		
						}
	
	review_list.push(review)
	console.log(review_list)
	
	let result = true;
	if(result){
		alert('글쓰기성공'); location.href = 'review.html';
	}
	else{alert('글쓰기실패')}
	
	}
}
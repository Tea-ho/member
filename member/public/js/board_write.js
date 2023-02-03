$(document).ready(function() { 
  $('#summernote').summernote({
	  
			fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New'] ,
			fontSizes: ['8','9','10','11','12','14','16','18','20','22','24','28','30','36','50','72'] ,
	height : 400 , lang: "ko-KR"});
});



let board_list = []

function board_write(){
	// 1. 입력받는 데이터를 객체화
	
	let pw = document.querySelector('.w_pw').value
	if(pw != /0-9/){
		alert('숫자만 입력해주세요.')
	}
	else{
	let board = {
		title : document.querySelector('.w_title').value ,
		content : document.querySelector('.w_content').value ,
		writer : document.querySelector('.w_name').value  ,
		password : document.querySelector('.w_pw').value
	}
	board_list.push(board)
	console.log(board_list)
	}
	/*let result = true;
	if(result){
		alert('글쓰기성공'); location.href = 'board.html';
	}else{alert('글쓰기실패')}*/
}
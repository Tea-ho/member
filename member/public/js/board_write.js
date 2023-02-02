$(document).ready(function() { 
  $('#summernote').summernote({
	height : 400 , lang: "ko-KR"});
});



let board_list = []

function board_write(){
	// 1. 입력받는 데이터를 객체화
	let board = {
		title : document.querySelector('.w_title').value ,
		content : document.querySelector('.w_content').value ,
		writer : document.querySelector('.w_name').value  ,
		password : document.querySelector('.w_pw').value
	}
	board_list.push(board)
	console.log(board_list)
	
	let result = true;
	if(result){
		alert('글쓰기성공'); location.href = 'board.html';
	}else{alert('글쓰기실패')}
}
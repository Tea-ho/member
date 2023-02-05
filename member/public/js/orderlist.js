
출력();

let	quantity=''
function 출력(){
	
	console.log('작동')
	let html=''
	
	html+=	`<img alt="" src="../img/it1.gif">
	 		<table class="info">
				<tr><th>제품명:</th><th>LIN퓨어 슬림배기핏 팬츠</th> </tr>
				<tr><th>가격:</th><th>${43000}원</th> </tr>
				<tr><th>사이즈:</th><th>free</th></tr>
				<tr><th>수량:</th><th><input class="quantity" type="number" min="1" max="100" onclick="test()">개</th> </tr>
				<tr><th>총 금액:</th><th>${ 43000 }원</th> </tr>
			</table>`
		
		

	document.querySelector('.orderInfo').innerHTML=html;
	}
	


function test(){
	
quantity=document.querySelector('.quantity').value;
		console.log('quantity',quantity)
		
}





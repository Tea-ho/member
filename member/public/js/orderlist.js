let productList=[
	{ img: 'it1.gif', title: 'LIN퓨어 슬림배기핏 팬츠', size: '[ FREE ]' , price: 49000, discount: 0.25},
	{ img: 'it2.gif', title: '러브레스 블라우스', size: '[ FREE ]' , price: 40000, discount: 0.30},
	{ img: 'it3.gif', title: '뉴케이블 꽃버튼 가디건', size: '[ S , M , L ]' , price: 60000, discount: 0.30},
	{ img: 'it4.gif', title: '오브더베이 배색카라 맨투맨', size: '[ S , M , L ]' , price: 32500, discount: 0.25},
	{ img: 'it5.gif', title: '밀키그린 배색카라 맨투맨', size: '[ S , M , L ]' , price: 32500, discount: 0.30},
	{ img: 'it6.gif', title: '밀라노 골드버튼 클래식 자켓', size: '[ FREE ]' , price: 75000, discount: 0.25},
	{ img: 'it7.gif', title: '마그레츠 슈포켓 자켓', size: '[ FREE ]' , price: 75000, discount: 0.25},
	{ img: 'it8.gif', title: '로렌 로맨틱 스커트', size: '[ FREE ]' , price: 40000, discount: 0.25}
]

출력()
function 출력(){
	console.log('작동')
	let html=''
	
	html+=	`<img alt="" src="../img/it1.gif">
	 		<table class="info">
				<tr><th>제품명:</th><th>LIN퓨어 슬림배기핏 팬츠</th> </tr>
				<tr><th>가격:</th><th>43000원</th> </tr>
				<tr><th>수량:</th><th><input type="number" min="1" max="100">개</th> </tr>
				<tr><th>총 금액:</th><th>43000원</th> </tr>
			</table>`
		
		
	document.querySelector('.orderInfo').innerHTML=html;
	}
console.log('실행')
let productList=[
	{ img: 'it1.gif', tittle: 'LIN퓨어 슬림배기핏 팬츠', size: '[ FREE ]' , price: 49000, discount: 0.25, like: 540, review: 1412 },
	{ img: 'it2.gif', tittle: '러브레스 블라우스', size: '[ FREE ]' , price: 40000, discount: 0.30, like: 154, review: 410 },
	{ img: 'it3.gif', tittle: '뉴케이블 꽃버튼 가디건', size: '[ S , M , L ]' , price: 60000, discount: 0.30, like: 514, review: 1421 },
	{ img: 'it4.gif', tittle: '오브더베이 배색카라 맨투맨', size: '[ S , M , L ]' , price: 32500, discount: 0.25, like: 54, review: 124 },
	{ img: 'it5.gif', tittle: '밀키그린 배색카라 맨투맨', size: '[ S , M , L ]' , price: 32500, discount: 0.30, like: 541, review: 4112 },
	{ img: 'it6.gif', tittle: '밀라노 골드버튼 클래식 자켓', size: '[ FREE ]' , price: 75000, discount: 0.25, like: 504, review: 2412 },
	{ img: 'it7.gif', tittle: '마그레츠 슈포켓 자켓', size: '[ FREE ]' , price: 75000, discount: 0.25, like: 504, review: 2412 },
	{ img: 'it8.gif', tittle: '로렌 로맨틱 스커트', size: '[ FREE ]' , price: 40000, discount: 0.25, like: 504, review: 2412 }
]


cart_print();
function cart_print(){
	
	let html=''
	
	
	
	for(let i=0; i<productList.length; i++){                                    
		
		html+=`<tr>
					<td widtd=5%><input type="checkbox"></td> 
					<td widtd=40%><img src="${productList[i].img}"> </td>
					 <td widtd=30%>${productList[i].tittle}</td>
					 <td widtd=5%>${productList[i].size}</td>
					 <td widtd=10%>${productList[i].price.toLocaleString()} 원 </td>
					 <td widtd=10%><button class="form-control" onclick="onDelete(${i})"type="button"> 삭제 </button></td>
					
				</tr>`
	}	
		
	
	 document.querySelector('.table_content').innerHTML=html;
}
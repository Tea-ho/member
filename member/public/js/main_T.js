console.log('연결확인') //--- 확인 완료

let productList=[
	{ img: 'it1.gif', title: 'LIN퓨어 슬림배기핏 팬츠', size: '[ FREE ]' , price: 49000, discount: 0.25},
	{ img: 'it2.gif', title: '러브레스 블라우스', size: '[ FREE ]' , price: 40000, discount: 0.30},
	{ img: 'it3.gif', title: '뉴케이블 꽃버튼 가디건', size: '[ S , M , L ]' , price: 60000, discount: 0.30},
	{ img: 'it4.gif', title: '오브더베이 배색카라 맨투맨', size: '[ S , M , L ]' , price: 30000, discount: 0.25},
	{ img: 'it5.gif', title: '밀키그린 배색카라 맨투맨', size: '[ S , M , L ]' , price: 30000, discount: 0.30},
	{ img: 'it6.gif', title: '밀라노 골드버튼 클래식 자켓', size: '[ FREE ]' , price: 80000, discount: 0.25},
	{ img: 'it7.gif', title: '마그레츠 슈포켓 자켓', size: '[ FREE ]' , price: 80000, discount: 0.25},
	{ img: 'it8.gif', title: '로렌 로맨틱 스커트', size: '[ FREE ]' , price: 40000, discount: 0.25}
]

productPrint()

// 제품출력 함수
function productPrint(){
	
	let html = ''
	for(let i = 0; i < productList.length; i++){
		
		let basicPrice = productList[i].price.toLocaleString()
		let salePrice = (productList[i].price -(productList[i].price * productList[i].discount)).toLocaleString()
		
		html += `<div class="itemBox" onclick="clickImg(i)">
					<a href="html/product_T${i}.html"><img src="img/${ productList[i].img}"></a>
				</div>`
	}
	
	document.querySelector('.conetentBox').innerHTML = html;
}

function clickImg(clickIndex){
	
		console.log(clickIndex);
	
	let searchStore = [];
}


// 검색창 함수
/*
document.querySelector('.seaBtn').addEventListener('click' , (e) =>{
	let searchStore = [];
		// console.log('작동확인') //--- type: submit이면 작동 안됨
	let keyword = document.querySelector('.searchKey').value;
		// console.log(keyword) //--- 작동 확인
	
	
	productList.forEach( o  => { 
		if( o.title.includes(keyword) ){
			searchStore.push( o )
		}
	})
	
	console.log(searchStore)
	
	let html = ''
	for(let i = 0; i < searchStore.length; i++){
		
		let basicPrice = searchStore[i].price.toLocaleString()
		let salePrice = (searchStore[i].price-(searchStore[i].price * searchStore[i].discount)).toLocaleString()
		
		html += `<div class="itemBox">
					<a href="#"><img src="img/${ searchStore[i].img}"></a>
					<div class="itemInfo">
						<div class="itemTitle">
							${ searchStore[i].title }
						</div>
						<div class="itemSize">
							${ searchStore[i].size }
						</div>
						<div class="itemPrice">
							${ basicPrice }원
						</div>
						<div class="itemSalePrice">
							${ salePrice  }원
						</div>
						<div class="itemCart">
							<button class="btn btn-dark" type="submit">바로주문</button>
							<button class="btn btn-light" type="submit">장바구니</button>
						</div>
					</div>
				</div>`
	}
	
	document.querySelector('.conetentBox').innerHTML = html;

})
*/
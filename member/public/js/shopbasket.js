console.log('실행')


let cartlist=[]




// 제품출력 함수



cart_print();
function cart_print(){
	
	let total = 0;
	for( let j = 0 ; j<productList.length ; j++ ){ total += productList[j].price * productList[j].discount } 
	document.querySelector('.total').innerHTML = total.toLocaleString()+'원';
	
	let html=''
	
	for(let i=0; i<productList.length; i++){                                    
		
		html+=`<tr class="박스">
					<td widtd=5%><input class="ckck" type="checkbox"></td> 
					<td widtd=40%><img src="../img/${productList[i].img}" width="20%" height="20%"> </td>
					 <td widtd=30% class="item_t">${productList[i].title}</td>
					 <td widtd=5% class="item_s">${productList[i].size}</td>
					 
					 <td widtd=10%><span  class="item_p">${productList[i].price.toLocaleString()} 원 </span>
					 <div widtd=10% class="item_disp">${(productList[i].price * productList[i].discount).toLocaleString()} 원 </div></td> 
					 
					
					 <td widtd=10%><button class="X"onclick="onDelete(${i})"type="button"> <img src="../img/삭제버튼.png" width="20%" height="20%"></button></td>
					
				</tr>`
	}	
		
	
	 document.querySelector('.table_content').innerHTML=html;
}

function onDelete(i){
	productList.splice(0,1);
	cart_print();
}

function totalDel(){
	productList.splice(0);
	cart_print();
}

	
function order(){
	
	document.querySelector('.message_wrap').style.display='flex'
	
	alert('상품을 주문합니다');
	productList.splice(0);
	cart_print();
}

function message_colse(){
	
document.querySelector('.message_wrap').style.display='none'
}



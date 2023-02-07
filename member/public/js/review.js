let contents=[
	{no : 1 , img : '../img/it1.gif' , title : 'LIN퓨어 슬림배기핏 팬츠' , name : '재석' , ymd : '2023.02.04' , read : 213},
	{no : 2 , img : '../img/it2.gif' ,  title : '후기입니다' , name : '호동' , ymd : '2023.02.01' , read : 432},
	{no : 3 , img : '../img/it3.gif' ,  title : '선물용으로 구입했어요' , name : '석진' , ymd : '2023.01.31' , read : 643},
	{no : 4 , img : '../img/it4.gif' ,  title : '만족합니다' , name : '철수' , ymd : '2023.01.24' , read : 543},
	{no : 5 , img : '../img/it5.gif' ,  title : '추천합니다~' , name : '영희' , ymd : '2023.01.22' , read : 876},
	{no : 6 , img : '../img/it6.gif' ,  title : '너무 좋아요~~' , name : '희동' , ymd : '2023.01.22' , read : 1112},
	{no : 7 , img : '../img/it7.gif' ,  title : '구매 후기입니다' , name : '병점' , ymd : '2023.01.22' , read : 1323},
	{no : 8 , img : '../img/it8.gif' ,  title : '배송도 빠르고 제품도 이뻐요' , name : '수리' , ymd : '2023.01.22' , read : 839}
]


review();
function review(){
	
	let html = `<div class="row re_header">
					<div class="col-md-2">제품</div>
					<div class="col-md-6">제목</div>
					<div class="col-md-1">작성자</div>
					<div class="col-md-2">날짜</div>
					<div class="col-md-1" onclick="list_up()"><a href="#">조회수</a></div>
				</div>`
		
	
		contents.forEach((o , i)=> {
		
		html += `<div class="row re_header re_list">
					<div class="col-md-2"><a href="product_T${i}.html"><img src="${o.img}" width="50%;"></a></div>
					<div class="col-md-6"><a>${o.title}</a></div>
					<div class="col-md-1">${o.name}</div>
					<div class="col-md-2">${o.ymd}</div>
					<div class="col-md-1">${o.read}</div>
				</div>`
	})
	document.querySelector('.re_contants').innerHTML=html;
}

function list_up(){
	contents.sort((a, b) => b.read - a.read);
	review();
}


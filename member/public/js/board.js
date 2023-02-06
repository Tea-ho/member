
let contents=[
	{no : 1 , title : '안녕하세요~' , name : '재석' , ymd : '20230204' , read : 213},
	{no : 2 , title : 'ㄹㄹㄹㄹㄹㄹ' , name : '호동' , ymd : '20230201' , read : 432},
	{no : 3 , title : '문의사항입니다' , name : '석진' , ymd : '20230131' , read : 643},
	{no : 4 , title : '여긴뭐냐' , name : '철수' , ymd : '20230124' , read : 543},
	{no : 5 , title : '안녕안녕' , name : '영희' , ymd : '20230122' , read : 876},
	{no : 6 , title : '상품문의입니다' , name : '희동' , ymd : '20230122' , read : 1112},
	{no : 7 , title : '토스결제 가능한가요' , name : '병점' , ymd : '20230122' , read : 1323},
	{no : 8 , title : '안녕하십니까' , name : '수리' , ymd : '20230122' , read : 839}
]


content_print();

function content_print(){
	let html =`<tr>
					<th width="10%">순번</th>
					<th width="50%">제목</th>
					<th width="10%">이름</th>
					<th width="20%">등록일</th>
					<th width="10%">조회수</th>
				</tr>`;
				
	contents.forEach((o , i)=> {
		
		html += `<tr>
					<td>${o.no}</td>
					<td><a href="#">${o.title}</a></td>
					<td>${o.name}</td>
					<td>${o.ymd}</td>
					<td>${o.read}</td>
				</tr>`
	})
	document.querySelector('.table').innerHTML=html;
}




let contents=[
	
	{no : 1 , title : '관리자 사칭문제에 대해 알려드립니다.' , name : '관리자' , ymd : '20230115' , read : 543},
	{no : 2 , title : '2023년도 잘 부탁드립니다.' , name : '관리자' , ymd : '20230101' , read : 876},
	{no : 3 , title : '배송관련하여 알려드립니다.' , name : '관리자' , ymd : '20221221' , read : 1112},
	{no : 4 , title : '카드사별 점검시간입니다.' , name : '관리자' , ymd : '20221215' , read : 1323},
	{no : 5 , title : '안녕하세요. 멤버입니다.' , name : '관리자' , ymd : '20221201' , read : 839}
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

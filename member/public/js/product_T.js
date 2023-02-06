let categoryList = [
	{ category: 'INFO', url: '#'},
	{ category: 'CODI ITEMS', url: '#'},
	{ category: 'REVIEW', url: 'review.html'},
	{ category: 'Q&A', url: '#'}
];

categoryPrint()
function categoryPrint(){
	html = `<ul>`
	for(let i = 0; i < categoryList.length; i++){
		
		html += `<li class="CategoryBar" onclick="categorySelect( ${i} )"> <a href="${ categoryList[i].url }"> ${categoryList[i].category } </a> </li>`
		
	}
	
	html += `</ul>`
	
	document.querySelector('.mainbarwrap').innerHTML = html;
	
}

function categorySelect( index ){
	// console.log(index); //---확인 완료
	
	let selectCategory = document.querySelectorAll('.CategoryBar')
	
	for( let i = 0; i < categoryList.length; i++){
		if( i == index){
			selectCategory[i].classList.add( 'categoryselect' );
		}
		else{selectCategory[i].classList.remove( 'categoryselect' );}
	}
}
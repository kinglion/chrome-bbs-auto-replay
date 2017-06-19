'use strict';

window.addEventListener('load', function() {
	// load

	let currentLevel = 0; // 当前楼层
	const tables = document.querySelectorAll('.plhin');
	const lastTable = tables[tables.length - 1];

	currentLevel = parseInt(lastTable.querySelector('.pi em').innerHTML);

	if ((currentLevel - (Math.floor(currentLevel / 10) * 10)) == 5) {
		// 输入框
		const inputText = document.querySelector('textarea');
		inputText.value = '展位占位......';
		document.querySelector('button[value=replysubmit]').click();
	} else {
		location.reload();
	}
	

});
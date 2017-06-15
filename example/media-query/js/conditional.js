Modernizr.load([
	{ 
		test: Modernizr.mq('only all'), 
		nope: 'js/respond.js' 
	} ,
	{ 
		// 如果 max-width 等于 600px，则加载菜单转换脚本 
		test: Modernizr.mq('only screen and (max-width: 600px)'), 
		both : ['js/jquery-1.9.1.min.js', 'js/jquery.mobilemenu.js'], 
		complete : function () { 
		  // 资源完全加载后运行 
		  $(document).ready(function(){ 
	 
			$('#mainNav').mobileMenu({ 
			  switchWidth: 600,                   //转换宽度 (用 px 表示) 
			  topOptionText: 'Select a page',     //第一个选项的内容 
			  indentString: '&nbsp;&nbsp;&nbsp;'  //缩进嵌套选项的字符串 
			}); 
		  }); 
	 
		} 
	} 
]); 
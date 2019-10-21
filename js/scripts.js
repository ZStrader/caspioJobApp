/*Function is used to set dynamic height for right block of page dependently on left block height*/
function setHeight(){
	if(document.getElementsByClassName("left_block")[0]){
		var height = document.getElementsByClassName("left_block")[0].offsetHeight;
		document.getElementsByClassName("right_block")[0].style.height = height +"px";
		var iframe = document.getElementsByTagName('iframe')[0];
		iframe.style.height = height+'px';
		    var iframeDoc = iframe.contentWindow.document;
		    iframeDoc.body.style.height = height+"px";
		    var topBlock = iframeDoc.getElementsByClassName('add_log')[0],
		    	topHeight = topBlock.offsetHeight,
				height2 = height - topHeight - 54;
		    iframeDoc.getElementsByClassName('logs_history')[0].style.maxHeight = height2+ "px";
		iframe.onload = function(){
			var frame = document.getElementsByTagName('iframe')[0],
				h = document.getElementsByClassName("left_block")[0].offsetHeight,
				frameDoc = frame.contentWindow.document,
				top = frameDoc.getElementsByClassName('add_log')[0],
				th = top.offsetHeight,
				h2 = h - th - 54;
			frameDoc.getElementsByClassName('logs_history')[0].style.maxHeight = h2 + "px";
		}
	}
}
/*Function for starting script after page loading*/
function f_execOnDocLoad(v_delegate) {
 if(document.readyState == 'complete' || document.contentLoaded) {
  v_delegate();
 } else {
  setTimeout(function() { f_execOnDocLoad(v_delegate) }, 10);
 }
}
f_execOnDocLoad(setHeight);

// JavaScript Document
var i = 0;
function timecount(){
	i+=1;
	postMessage(i);
	setTimeout('timecount()', 500);	
}
timecount();
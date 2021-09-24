/* let time = prompt();
let minutes;
let hours;

minutes = Math.ceil((time/60));
console.log(minutes)


hours = (minutes)
 */
 
 let time = prompt()
 
 function numberToHours(time){
	 let days = Math.floor(time /7);
	 let hours = Math.floor(time/3600);
	 let minutes = Math.floor(time%3600/60);
	 let seconds  = Math.floor(time%3600%60);
	 return days + ":" + hours + ":" + minutes + ":" + seconds;
 }
 
 let result = numberToHours(time);
 
 console.log(result);
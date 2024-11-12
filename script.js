function stringChop(str, size) {
let result=[];
	while (str.length>0) {
		let newpart=str.slice(0,size);
		result.push(newpart);
		str=str.replace(newpart,'');
	}
	return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
 alert(stringChop(str, size));

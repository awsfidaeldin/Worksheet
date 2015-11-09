
$(document).ready(function() {
var user ={
name:"Aws",
age:41,
Height:66,
Eyecolor:"Brown",
Haircolor:"Brown",
favoriteFoods:["Rice","Potatoes","Chicken"],
favoriteColors:["Blue","Grey"],
siblings:["Om Abdullah",45],
Degrees:[["UPM","M.Sc.",3.69],["UB","B.Sc.",2.65]],
hobbies:["Swimming","Surfing the Internet"]
};

console.log(user);

function inspectUser(user)
{
	userElement=user;
	console.log(userElement);
	
	var str = '';
    for (var i in userElement) {
            str = str + i + '(' + userElement[i] + ')' + ' '; 
    }
    return str;
}

var userElement;

var str= inspectUser(user);

$('body').append(str);



function inspectArray(userElement)
{
	userElement=user;
	var ul=document.createElement('ul');
	ul.classList.add("array");

	for (var i in userElement) 
	{
			var arrayElement= validateArray(userElement[i]);
			console.log(arrayElement);
	    	var li=document.createElement('li');
	    	ul.appendChild(li);
	    	li.innerHTML=li.innerHTML + userElement[i];
	    	console.log(userElement[i]);
    }
    var element = document.getElementById("hd");
    element.appendChild(ul);
}

function inspectObject(object)
{
	var ul=document.createElement('ul');
	ul.classList.add("object");
	
		for (var i in userElement) 
		{
			var objectElement=validateObject(userElement[i]);
			console.log(objectElement);
			var li=document.createElement('li');
			var propertyNameSpan=document.createElement("span");
			var valueSpan=document.createElement("span");
			li.appendChild(propertyNameSpan);
			li.appendChild(valueSpan);
			ul.appendChild(li);
			li.innerHTML=li.innerHTML + userElement[i];
			
		}
		var element = document.getElementById("ft");
		propertyNameSpan.textContent="This is a string of words";
		element.appendChild(propertyNameSpan);
        element.appendChild(ul);
} 

function validateArray(userElement){
	if(userElement instanceof Array){
		console.log("This is a real array");
		// console.log(userElement);
		return userElement;
	} else {
		console.log("This is not a real array!");
	}
}

function validateObject(userElement){
	if(userElement instanceof Object){
		console.log("This is a real object");
		// console.log(object);
		return userElement;
	} else {
		console.log("This is not a real object!");
	}
}


console.log(userElement);
inspectArray(userElement);



inspectObject(user);

// alert(JSON.stringify(user, null, 4));	
});

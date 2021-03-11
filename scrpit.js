		add = () =>{
		var a = document.getElementById("num1").value;
		var b = document.getElementById("num2").value;
		var c = parseInt(a) + parseInt(b);
		document.getElementById("result").innerHTML = c;
		}

		subtract = () =>{
			var a = document.getElementById("num1").value;
			var b = document.getElementById("num2").value;
			var c = a-b;
			document.getElementById("result").innerHTML = c;
		}

		multiply = () =>{
			var a = document.getElementById("num1").value;
			var b = document.getElementById("num2").value;
			var c = a * b;
			document.getElementById("result").innerHTML=c;
		}

		division = () =>{
			var a = document.getElementById("num1").value;
			var b = document.getElementById("num2").value;
			var c = a/b;
			document.getElementById("result").innerHTML=c;
		}


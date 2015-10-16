$(document).ready(function() {
	function Container(inputName, totalGroup, inputId) {
		this.inputName = inputName;
		this.totalGroup = totalGroup;
		this.inputId = inputId;
		this.total = 0;
  }
  Container.prototype = {
  	constructor: Container,
  	getTotal: function (inputName, totalGroup, inputId) {
			var getInput = document.getElementsByName(inputName);
	  	for( var i = 0; i <getInput.length; i++ ) {
				var inputValue = getInput[i];
	    	var num = parseInt(inputValue.value);
	    	this.total += num;
	    }
			document.getElementById(this.totalGroup).innerHTML = this.total;
			var field = document.getElementById(this.inputId).value;
			var userInput = parseInt(field);
			alert("inputId = " + userInput);
			var updateTotal = function(total, inputId) {
				//alert("inner function total = " + this.total);
				if (userInput < num) {
					this.total -= userInput;
				}
				else {
					this.total += userInput;
				}
				document.getElementById(this.inputId).innerHTML = this.total;
			}
			//$('input[inputId]').change(
				updateTotal.call(this, 'total');
		}
	}
	vegetable = new Container('veggie[]', 'veggie', 'veggie-input');
	vegetable.getTotal('veggie[]', 'veggie', 'veggie-input');
	//$('input').change($.proxy(Container, 'getTotal'))
	$('input[veggie-input]').change(vegetable.getTotal('veggie[]', 'veggie', 'veggie-input'));
});

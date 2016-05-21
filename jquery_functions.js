$(document).ready(function(){
	$("#date_from").focus(); //set the focus on date_from input
	$(".datepicker").click(function(){ //  clicking on the input will bring up the datepicker calender
		$(this).datepicker()
	});
	$("form").on("submit", function(){
		var name = $("#name").val();
		var from = $("#date_from").val();
		var to = $("#date_to").val();

		// See the input in the console
		console.log(name);
		console.log(from);
		console.log(to);

		// Check to see that there is text in the name input, if not, show warning
		if ( name.length === 0 ) {
			$(".hidden").toggle().append("There must be a name").css("color","red");//Shows warning that there must be a name.
			$('#name').on("click", function(){ //Clicking on name input hides warning and changes img back to original
				$(".hidden").toggle();
			});
		}
		// If there is no errors, then display an alert stating the following
		else { alert( "Thank you " + name + "! Your cruise leaves on " + from +" and returns on " + to + "!");
		}
		
		return false;
	});
	$("#reset_btn").click(function(){
		$("#date_from, #date_to, #name").val(" ");
	});
});
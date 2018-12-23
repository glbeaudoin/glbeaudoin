/*Toggle Sidebar Menu (START)*/
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    });
/*Toggle Sidebar Menu (END)*/

/*Add input to create a survey (START)*/
$(document).ready(function() {
    var max_fields      = 10; //maximum input boxes allowed
    var wrapper_x       = $(".input_fields_wrap"); //Fields wrapper
    var add_button_x    = $(".add_field_button"); //Add button ID
    
    var x = 1; //initlal text box count
    $(add_button_x).click(function(e){ //on add input button click
        e.preventDefault();
        if(0<x && x<= max_fields){ //max input box allowed
            $(wrapper_x).append('<div class="question"><input type="text" placeholder="Question '+x+'" class="inputQuestion Q'+x+'" name="Q'+x+'"/><br><input class="inputAnswer" type="text" placeholder="Answer '+x+'.1" name="'+x+'-1"/><input class="inputAnswer" type="text" placeholder="Answer '+x+'.2" name="A'+x+'-2"/><input type="text" placeholder="Answer '+x+'.3" class="inputAnswer" name="A'+x+'-3"/><input type="text" placeholder="Answer '+x+'.4" class="inputAnswer" name="A'+x+'-4"/></div>'); //add input box
            x++; //text box increment
        }
    });
    $(wrapper_x).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); 
        if(1<x){
        x--;
        $('.Q'+x+'').parent('div').remove(); 
        }
    })
});
/*Add input to create a survey (END)*/
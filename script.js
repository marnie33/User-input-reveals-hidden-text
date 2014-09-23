//  runs the custom alert/dialog box/popover   
    function CustomAlert(){
    
    //dialog passes in from Alert.render and opens dialog box
    this.render = function(dialog){
        
        //gets window size
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        
        //gets box holder div from page
        var boxholder = document.getElementById('boxholder');
        
        //creates dialog box in box holder, adds css
        $('#boxholder').append('<div id="dialogbox"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div><div>');
        $('#boxholder').addClass('dialogbox dialogbox div dialogbox div #dialogboxhead dialogbox div #dialogboxbody dialogbox div #dialogboxfoot');
        
        //gets box overlay holder from page
        var boxoverlay = document.getElementById('boxoverlay');
        
        //creates dialog overlay and adds css
        $('#boxoverlay').append('<div id="dialogoverl"></div>');
        $('#boxoverlay').addClass('dialogoverlay');
        
        //formats overlay
        boxoverlay.style.display = "block";
        boxoverlay.style.height = winH + "px";
        
        //formats dialog box on screen
        boxholder.style.left = (winW/2) - (550 * .5) + "px";
        boxholder.style.top = "250px";
        boxholder.style.display = "block";
        
        //creates dialog box content, calls custom content from Alert.render()
        $('#dialogboxhead').text("Dialog");
        $('#dialogboxbody').append(dialog);
        $('#dialogboxfoot').append('<button id="okbtn" onclick="Alert.ok()">OK</button>');
        
    }//end render function
    
    //this closes the dialog
    this.ok = function(){
        
        //removes css classes, does not fully remove css though
        $('#boxholder').removeClass('dialogbox dialogbox div dialogbox div #dialogboxhead dialogbox div #dialogboxbody dialogbox div #dialogboxfoot');
        $('#boxoverlay').removeClass('dialogoverlay');
        
        //removes css that formatted box and overlay on screen 
        $('#boxholder').css('top','').css('left','').css('display','none');
        $('#boxoverlay').css('display','none').css('height','');
        
        //empties boxholder and boxoverlay divs
        $('#boxholder').empty();
        $('#boxoverlay').empty();
        
    }//end okay function
    
}//end custom dialog function

//initiates dialog, used in Help menus for this application
var Alert = new CustomAlert();

function acceptInput(){
    
    this.acceptText = function(){
        $('#right').html($('#txt').val());
        $('#left').show();
    };//end accept text
    
    this.acceptText2 = function(){
        $('#right2').html($('#txt2').val());
        $('#left2').show();
    };//end accept text 2
    
    this.acceptText3 = function(){
        $('#right3').html($('#txt3').val());
        $('#left3').show();
    };//end accept text 3
    
    this.acceptText4 = function(){
        $('#right4').html($('#txt4').val());
        $('#left4').show();
    };//end accept text 4
    
    this.acceptText5 = function(){
        $('#right5').html($('#txt5').val());
        $('#left5').show();
    };//end accept text 5
    
}//end accept user input

//initiates new acceptance of user input
var accept = new acceptInput();

function deleteInput(){
    
    this.deleteText = function(){
        $('#right').html("");
        $('#txt').val("");
        $('#left').hide();
    };//end delete text
    
    this.deleteText2 = function(){
        $('#right2').html("");
        $('#txt2').val("");
        $('#left2').hide();
    };//end delete text 2
    
    this.deleteText3 = function(){
        $('#right3').html("");
        $('#txt3').val("");
        $('#left3').hide();
    };//end delete text 3
    
    this.deleteText4 = function(){
        $('#right4').html("");
        $('#txt4').val("");
        $('#left4').hide();
    };//end delete text 4
    
    this.deleteText5 = function(){
        $('#right5').html("");
        $('#txt5').val("");
        $('#left5').hide();
    };//end delete text 5
    
}//end controls to delete user input/hid mine

//initiates clearing of fields
var deleted = new deleteInput();

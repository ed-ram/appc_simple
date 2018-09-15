// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;


function blam(evt) {
    
    function badSwitch(){
        if($.view1.backgroundImage == "color.jpg"){
            $.view1.backgroundImage = "desaturated.jpg"
        } else { $.view1.backgroundImage = "color.jpg"
        }
    };

    function flashEnable(){
        flasher = setInterval(badSwitch, 500)
    }

    function flashDisable(){
        clearInterval(flasher)
    }

    if($.view1.activated == false) {
        flashEnable();
    }
    if($.view1.activated == true){
        flashDisable();
    }
    
    $.view1.activated = !$.view1.activated
}
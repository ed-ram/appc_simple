// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function setTest(evt){
    let x = Ti.App.Properties.getBool('someBool');
    Ti.App.Properties.setBool('someBool', !x);
    alert(`Ti.App.Properties.someBool set to ${Ti.App.Properties.getBool('someBool')}`)
}

function getTest(){
    alert(`someBool has status ${Ti.App.Properties.getBool('someBool')}`);
};


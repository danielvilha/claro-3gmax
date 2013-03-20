// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#fff');
Ti.UI.LANDSCAPE_LEFT
Ti.UI.LANDSCAPE_RIGHT

var win = Titanium.UI.currentWindow;
win.backgroundColor = '#FFFF';

var imageView = Titanium.UI.createImageView({
	backgroundImage : 'logo.png',
	width : 210,
	height : 210,
	right : 10,
	top : 10,
	zIndex : 9
	// layout : 'center'
});

imageView.addEventListener('click', function() {
	var win = Titanium.UI.createWindow({
		navBarHidden : true,
		tabBarHidden : true,
		orientationModes : [Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT],
		url : 'winStart.js'
	});

	Titanium.UI.currentTab.open(win, {
		animated : true
	});
});

win.add(imageView);
//--------------------------------------------------------------------------------------------
var scrollview = Ti.UI.createScrollView({
	contentWidth : 'auto',
	contentHeight : 'auto',
	top : '25%',
	left : '30%',
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : false
});
var v1 = Ti.UI.createView({
	top : 10,
	left : 10,
	width : 348,
	height : 30
});
var l1 = Ti.UI.createLabel({
	text : 'Nome :',
	top : 0,
	left : 0
});
var f1 = Ti.UI.createTextField({
	text : '',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	top : 0,
	right : 0,
	width : 200
});
v1.add(l1);
v1.add(f1);

var v2 = Ti.UI.createView({
	top : 50,
	left : 10,
	width : 348,
	height : 30
});
var l2 = Ti.UI.createLabel({
	text : 'Telefone :',
	top : 0,
	left : 0
});
var f2 = Ti.UI.createTextField({
	text : '',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	top : 0,
	right : 0,
	width : 200
});
v2.add(l2);
v2.add(f2);

var v3 = Ti.UI.createView({
	top : 90,
	left : 10,
	width : 348,
	height : 30
});
var l3 = Ti.UI.createLabel({
	text : 'Email :',
	top : 0,
	left : 0
});
var f3 = Ti.UI.createTextField({
	text : '',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	top : 0,
	right : 0,
	width : 200
});
v3.add(l3);
v3.add(f3);

var v4 = Ti.UI.createView({
	top : 130,
	left : 10,
	width : 348,
	height : 30
});
var l4 = Ti.UI.createLabel({
	text : 'RG :',
	top : 0,
	left : 0
});
var f4 = Ti.UI.createTextField({
	text : '',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	top : 0,
	right : 0,
	width : 200
});
v4.add(l4);
v4.add(f4);

var v5 = Ti.UI.createView({
	top : 170,
	left : 10,
	width : 348,
	height : 30
});
var l5 = Ti.UI.createLabel({
	text : 'CPF :',
	top : 0,
	left : 0
});
var f5 = Ti.UI.createTextField({
	text : '',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	top : 0,
	right : 0,
	width : 200
});
v5.add(l5);
v5.add(f5);

var v6 = Ti.UI.createView({
	top : 210,
	left : 10,
	width : 348,
	height : 30
});
var l6 = Ti.UI.createLabel({
	text : 'Rua :',
	top : 0,
	left : 0
});
var f6 = Ti.UI.createTextField({
	text : '',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	top : 0,
	right : 0,
	width : 200
});
v6.add(l6);
v6.add(f6);
var v7 = Ti.UI.createView({
	top : 250,
	left : 10,
	width : 348,
	height : 30
});
var l7 = Ti.UI.createLabel({
	text : 'Cidade :',
	top : 0,
	left : 0
});
var f7 = Ti.UI.createTextField({
	text : '',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	top : 0,
	right : 0,
	width : 200
});
v7.add(l7);
v7.add(f7);
var v8 = Ti.UI.createView({
	top : 290,
	left : 10,
	width : 348,
	height : 30
});
var l8 = Ti.UI.createLabel({
	text : 'Estado :',
	top : 0,
	left : 0
});
var f8 = Ti.UI.createTextField({
	text : '',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	top : 0,
	right : 0,
	width : 200
});
v8.add(l8);
v8.add(f8);
var v9 = Ti.UI.createView({
	top : 330,
	left : 10,
	width : 348,
	height : 30
});
var l9 = Ti.UI.createLabel({
	text : 'CEP :',
	top : 0,
	left : 0
});
var f9 = Ti.UI.createTextField({
	text : '',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	top : 0,
	right : 0,
	width : 200
});
v9.add(l9);
v9.add(f9);
var b1 = Ti.UI.createButton({
	title : 'Adicionar Contato',
	width : 'auto',
	height : 'auto',
	top : 20
});
b1.addEventListener('click', function() {
	Titanium.Contacts.createPerson({
		firstName : f1.value,
		phone : {
			mobile : [f2.value]
		},
		email : {
			home : [f3.value]
		},
		note : 'RG: '+f4.value + '   CFP: '+f5.value,
		// note : 'CFP: '+f5.value,
		address : {
			home : [{
				Street : f6.value,
				City : f7.value,
				State : f8.value,
				ZIP : f9.value
			}]
		},
	});
	alert('Contado Adicionado!');
});

scrollview.add(v1);
scrollview.add(v2);
scrollview.add(v3);
scrollview.add(v4);
scrollview.add(v5);
scrollview.add(v6);
scrollview.add(v7);
scrollview.add(v8);
scrollview.add(v9);
win.add(b1);
win.add(scrollview);

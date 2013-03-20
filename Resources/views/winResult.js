// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#FFF');
Ti.UI.LANDSCAPE_LEFT
Ti.UI.LANDSCAPE_RIGHT

var win = Ti.UI.currentWindow;
win.backgroundColor = '#FFFF';

var result = Ti.App.result;

//---------------------------------------------Logo Claro------------------------------------------------------
var imageView = Titanium.UI.createImageView({
	backgroundImage : 'logo.png',
	width : 260,
	height : 260,
	top : 40,
	layout : 'center'
});

win.add(imageView);

var imageView = Titanium.UI.createImageView({
	backgroundImage : 'image.png',
	width : 868,
	height : 290,
	top : '41%'
});

win.add(imageView);

var buttonReturn = Ti.UI.createButton({
	backgroundColor : '#fff',
	title : 'Retornar',
	font : {
		fontColor : '#EF453A',
		fontSize : 20,
		fontFamily : 'DINBk.TTF'
	},
	color : '#EF453A',
	borderRadius : 5,
	borderColor : '#EF453A',
	width : 150,
	height : 50,
	bottom : 20,
	right : 40
});

buttonReturn.addEventListener('click', function() {
	var win = Titanium.UI.createWindow({
		url : 'winStart.js',
		navBarHidden : true,
		tabBarHidden : true,
		orientationModes : [Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT]
	});

	Titanium.UI.currentTab.open(win, {
		animated : true
	});
});

win.add(buttonReturn);

var buttonCadastro = Ti.UI.createButton({
	backgroundColor : '#fff',
	title : 'Cadastrar',
	font : {
		fontColor : '#EF453A',
		fontSize : 20,
		fontFamily : 'DINBk.TTF'
	},
	color : '#EF453A',
	borderRadius : 5,
	borderColor : '#EF453A',
	width : 150,
	height : 50,
	bottom : 20,
	left : 40
});

buttonCadastro.addEventListener('click', function() {
	var win = Titanium.UI.createWindow({
		url : 'winContactsAdd.js',
		backgroundColor : '#fff',
		navBarHidden : true,
		tabBarHidden : true,
		orientationModes : [Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT]
	});

	Titanium.UI.currentTab.open(win, {
		animated : true
	});
});

win.add(buttonCadastro);
//-------------------------------------------------------------------------------------------------------------

var labelMusic = Ti.UI.createLabel({
	color : '#EF453A',
	text : result,
	font : {
		fontSize : 30,
		fontFamily : 'DINBk.TTF'
	},
	textAlign : 'center',
	top : '50%',
	height : 150,
	width : 650
	// borderWidth : 1,
	// borderRadius : 5,
	// borderColor : '#000'
});

win.add(labelMusic)

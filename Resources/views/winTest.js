// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#FFF');
Ti.UI.LANDSCAPE_LEFT
Ti.UI.LANDSCAPE_RIGHT

var win = Ti.UI.currentWindow;
win.backgroundColor = '#FFFF';

var fileData = 'dados.txt';
var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, fileData);
var data;
// Ti.App.data;
// Ti.App.music = [];

if (file.exists()) {
	var json = file.read();
	data = JSON.parse(json);
}

// console.log(data.music.length);

//------------------------------------------------Randon-------------------------------------------------------
var l = data.music.length;
var i = Math.ceil(l * Math.random());

Ti.App.result = data.music[i - 1].correct;
console.log(i);
console.log(data.music[i - 1]);
//-------------------------------------------------------------------------------------------------------------

//---------------------------------------------Logo Claro------------------------------------------------------
var imageView = Titanium.UI.createImageView({
	backgroundImage : 'logo.png',
	width : 210,
	height : 210,
	right : 10,
	top : '42%',
	zIndex : 9
	// layout : 'center'
});

win.add(imageView);

var imageView = Titanium.UI.createImageView({
	backgroundImage : 'image.png',
	width : 868,
	height : 290,
	top : 0
});

win.add(imageView);

var buttonResposta = Ti.UI.createButton({
	backgroundColor : '#fff',
	title : 'RESPOSTA',
	font : {
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

buttonResposta.addEventListener('click', function() {
	var win = Titanium.UI.createWindow({
		url : 'winResult.js',
		navBarHidden : true,
		tabBarHidden : true,
		orientationModes : [Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT]
	});

	Titanium.UI.currentTab.open(win, {
		animated : true
	});
});

// win.add(buttonResposta);
//-------------------------------------------------------------------------------------------------------------

//--------------------------------------------Letra e Música---------------------------------------------------
var audioPlayer = Ti.Media.createSound({
	url : data.music[i - 1].file,
	allowBackground : true
});

Ti.API.info(data.music[i - 1].file);

var labelLyrics = Ti.UI.createLabel({
	color : '#EF453A',
	text : data.music[i - 1].lyrics,
	font : {
		fontSize : 28,
		fontFamily : 'DINBk.TTF'
	},
	textAlign : 'center',
	top : 30,
	width : 'auto'
});

var scrollView = Titanium.UI.createScrollView({
	// contentWidth : 'auto',
	// contentHeight : 'auto',
	top : 40,
	height : 258,
	width : 720,
	// borderWidth : 3,
	// borderRadius : 5,
	// borderColor : '#EF453A',
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : true
});

scrollView.add(labelLyrics);
win.add(scrollView);
//-------------------------------------------------------------------------------------------------------------

//-------------------------------------------------3GMax-------------------------------------------------------
var labelA = Ti.UI.createLabel({
	color : '#000',
	textAlign : 'left',
	top : 350,
	height : 120,
	width : 500,
	borderWidth : 3,
	borderRadius : 5,
	borderColor : '#EF453A'
});

var indLabel3GMax = Ti.UI.createLabel({
	color : '#000',
	textAlign : 'left',
	top : 410,
	height : 50,
	width : 480,
	borderWidth : 3,
	borderRadius : 5,
	borderColor : '#EF453A'
});

//Progress Bar 3GMax
var ind3GMax = Ti.UI.createLabel({
	backgroundColor : '#EF453A',
	textAlign : 'left',
	top : 0,
	height : 50,
	width : 0,
	left : 0,
	borderWidth : 3,
	borderRadius : 5,
	borderColor : '#EF453A',
	zIndex : 9
});

//Activity Indicator 3GMax
var actInd3GMax = Ti.UI.createActivityIndicator({
	top : 5,
	height : 50,
	width : 10,
	style : Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
	zIndex : 9
});

labelA.add(actInd3GMax);
indLabel3GMax.add(ind3GMax);
win.add(indLabel3GMax);
win.add(labelA);
//-------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------3G------------------------------------------------------
var labelB = Ti.UI.createLabel({
	color : '#000',
	textAlign : 'center',
	top : 550,
	height : 120,
	width : 500,
	borderWidth : 3,
	borderRadius : 5,
	borderColor : 'blue'
});

//Progress Bar 3GMax
var indLabel3G = Ti.UI.createLabel({
	color : '#000',
	textAlign : 'center',
	top : 610,
	height : 50,
	width : 480,
	borderWidth : 3,
	borderRadius : 5,
	borderColor : 'blue'
});

var ind3G = Ti.UI.createLabel({
	backgroundColor : 'blue',
	textAlign : 'left',
	top : 0,
	height : 50,
	width : 0,
	left : 0,
	borderWidth : 3,
	borderRadius : 5,
	borderColor : 'blue',
	zIndex : 9
});

//Activity Indicator 3GMax
var actInd3G = Ti.UI.createActivityIndicator({
	top : 10,
	height : 50,
	width : 10,
	style : Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
	zIndex : 9
});

labelB.add(actInd3G);
indLabel3G.add(ind3G);
win.add(indLabel3G);
win.add(labelB);
//-------------------------------------------------------------------------------------------------------------

//---------------------------------------Label 3GMax vc Concorrencia-------------------------------------------
var label3gmax = Ti.UI.createLabel({
	color : '#EF453A',
	text : 'Claro\n3GMax',
	font : {
		fontSize : 26,
		fontFamily : 'DINBk.TTF'
	},
	textAlign : 'center',
	top : 350,
	height : 120,
	width : 250,
	left : 0,
	borderWidth : 1,
	borderRadius : 5,
	borderColor : '#fff'
});

win.add(label3gmax);

var labelConco = Ti.UI.createLabel({
	color : 'blue',
	text : 'CONCORRÊNCIA',
	font : {
		fontSize : 24,
		fontFamily : 'DINBk.TTF'
	},
	textAlign : 'center',
	top : 550,
	height : 120,
	width : 250,
	left : 0,
	borderWidth : 1,
	borderRadius : 5,
	borderColor : '#fff'
});

win.add(labelConco);
//-------------------------------------------------------------------------------------------------------------
//Variável que armazenará o contador
var timer3GMAx;
var timer3G;

win.addEventListener('focus', function() {

	audioPlayer.play();

	//Mostra barra de progresso
	var i3gm = 16.67;
	var i3g = 10;
	var i = 0;
	var j = 0;

	//Mostra activity indicator
	actInd3GMax.show();
	actInd3G.show();

	//Limpar o contador toda vez que a janela for aberta.
	clearInterval(timer3GMAx);
	clearInterval(timer3G);

	//Ativamos o contador 3GMax
	timer3GMAx = setInterval(function() {
		if (i <= 6) {
			ind3GMax.width = i3gm + '%';
			i3gm = i3gm + 16.67;
			i++;
		} else {
			actInd3GMax.hide()
			win.add(buttonResposta);
		}
	}, 1000);

	//Ativamos o contador 3G
	timer3G = setInterval(function() {
		if (j <= 2) {
			ind3G.width = i3g + '%';
			i3g = i3g + 10;
			j++;
		}
	}, 1800);
});

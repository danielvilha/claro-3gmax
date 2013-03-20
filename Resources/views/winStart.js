// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundImage('background.png');
Ti.UI.LANDSCAPE_LEFT
Ti.UI.LANDSCAPE_RIGHT

var win = Ti.UI.currentWindow;
win.backgroundImage = 'background.png';
//-------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------

//---------------------------------------------Button Start----------------------------------------------------
win.addEventListener('click', function() {
	var win = Titanium.UI.createWindow({
		url : 'winTest.js',
		navBarHidden : true,
		tabBarHidden : true,
		orientationModes : [Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT]
	});

	Titanium.UI.currentTab.open(win, {
		animated : true
	});
});

// win.add(buttonStart);
//-------------------------------------------------------------------------------------------------------------
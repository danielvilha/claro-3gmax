// this sets the background color of the master UIView (when there are no windows/tab groups on it)
// Titanium.UI.setBackgroundImage('../iphone/background.png');
Ti.UI.LANDSCAPE_LEFT;
Ti.UI.LANDSCAPE_RIGHT;

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//
var winStart = Titanium.UI.createWindow({
	navBarHidden : true,
	tabBarHidden : true,
	orientationModes : [Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT],
	url : 'views/winStart.js'
});
var tabStart = Titanium.UI.createTab({
	window : winStart
});

//  add tabs
tabGroup.addTab(tabStart);

// open tab group
tabGroup.open();

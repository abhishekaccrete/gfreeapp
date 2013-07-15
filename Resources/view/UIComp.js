UIComp = {};

UIComp.window = function(bgColor,bolExitOnClose)
{
	return Ti.UI.createWindow({
		backgroundColor: bgColor,
		exitOnClose: bolExitOnClose,
		height: 'auto',
		model: true,
		barImage : config.imgPath+'global/tab_bar/tab_bar.png'
	});
}

UIComp.scrollView = function()
{
	return Titanium.UI.createScrollView({
		contentWidth:'auto',
		contentHeight:'auto',
		top:0,
		showVerticalScrollIndicator:true,
		showHorizontalScrollIndicator:true
	});
}

UIComp.navGroup = function(win)
{
	return Ti.UI.iPhone.createNavigationGroup({
		window: win
	});
}

UIComp.label = function(rLeft, rTop, rWidth, rHeight, sText)
{
	return Ti.UI.createLabel({
		left: rLeft,
		top: rTop,
		width: rWidth,
		height: rHeight,
		text: sText,
		color: 'black',
		font: {
			fontSize: 14,
			fontFamily: 'verdana'
		}
	});
}


UIComp.tabGroup = function()
{
	return Ti.UI.createTabGroup();
}

UIComp.tab = function(sTitle, winForTab)
{
	return Ti.UI.createTab({
		title: sTitle,
		window: winForTab
	});
}

UIComp.textField = function(rLeft, rTop, rWidth, rHeight, sPlaceHolderText)
{
	return Ti.UI.createTextField({
		left: rLeft,
		top: rTop,
		width: rWidth,
		height: rHeight,
		hintText: sPlaceHolderText
	});
}

UIComp.tableView = function(tblData)
{
	return Ti.UI.createTableView(
	{
		data: tblData
	});
}

UIComp.mapView = function(rLeft,rTop,rWidth,rHeight)
{
	return Ti.Map.createView(
	{
		left: rLeft,
		top: rTop,
		width: rWidth,
		height: rHeight,		
		mapType: Titanium.Map.STANDARD_TYPE,
    	animate:true,
    	regionFit:true,
    	userLocation:true
	});
}

UIComp.view = function(bgColor,rLeft,rTop,rWidth,rHeight)
{
	return Ti.UI.createView({
		backgroundColor: bgColor,
		left: rLeft,
		top: rTop,
		width: rWidth,
		height: rHeight
	});
}

UIComp.tableView = function(tblData,tblstyle)
{
	return Ti.UI.createTableView(
	{
		data: tblData,
		style: tblstyle,
		editable: true
	});
}

UIComp.button = function(sTitle,rLeft,rTop,rWidth,rHeight)
{
	return Ti.UI.createButton({
		title: sTitle,
		left: rLeft,
		top: rTop,
		width: rWidth,
		height: rHeight
	});
}

UIComp.optionDialog = function(optArray, iDestructive, iCancel, sTitle)
{
	return Ti.UI.createOptionDialog({
		options: optArray,
		destructive: iDestructive,
		cancel: iCancel,
		title: sTitle
	});
}

UIComp.tableViewRow = function()
{
	return Ti.UI.createTableViewRow();
}

UIComp.tableViewSection = function()
{
	return Titanium.UI.createTableViewSection();
}

UIComp.buttonBar = function(rLeft, rTop, rWidth, rHeight, arrlabels)
{
	if(config.osname == 'android')
	{
		var view =  Ti.UI.createView({
			left: rLeft,
			top: rTop,
			width: rWidth,
			height: rHeight
		});
		for(arr in arrlabels)
		{
			var btn = Ti.UI.createButton(arrlabels[arr]);
			view.add(btn);
		}
		return view;
	}
	else
	{
		return Titanium.UI.iOS.createTabbedBar(
		{
				left: rLeft,
				top: rTop,
				width: Ti.UI.SIZE,
				height: Ti.UI.SIZE,
				labels:arrlabels,
				//backgroundColor:'#336699',
				style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
				backgroundImage: config.imgPath+'global/title_bar/button_gray_normal.png'
			});		
		}; 
}

UIComp.picker = function()
{
	return Ti.UI.createPicker({
		selectionIndicator: true,
		width: 300
	});
}

UIComp.datePicker = function()
{
	return Ti.UI.createPicker({
		type: Ti.UI.PICKER_TYPE_DATE_AND_TIME,
		selectionIndicator: true,
		width: 300
	});
}

UIComp.pickerRow = function(sTitle)
{
	return Ti.UI.createPickerRow({
		title: sTitle,
		value: new Date()
	});
}

UIComp.textArea = function(rLeft, rTop, rWidth, rHeight)
{
	return Ti.UI.createTextArea({
		left: rLeft,
		top: rTop,
		width: rWidth,
		height: rHeight
	});
}

UIComp.scrollableView = function(rLeft, rTop, rWidth, rHeight)
{
	return Ti.UI.createScrollableView({
		left: rLeft,
		top: rTop,
		width: rWidth,
		height: rHeight
	});	
}

UIComp.popOver = function(sTitle, rWidth, rHeight)
{
	return Ti.UI.iPad.createPopover({
		width: rWidth,
		height: rHeight,
		title: sTitle
	});
}

UIComp.searchBar = function(rTop, rHeight, bolShowCancel)
{
	return Titanium.UI.createSearchBar(
	{
	    barColor:'#000', 
	    showCancel:bolShowCancel,
	    height:43,
	    top:0
	});
}

main = {};

main.open = function(config)
{
	Ti.include(config.viewPath+'UIComp.js');
	Ti.include(config.modelPath+'model.js');
	var tabMain = UIComp.tabGroup();
	
	winGroups = main.getWinGroups(config); 
	tabGroups = UIComp.tab('Groups',winGroups);
	tabGroups.icon = config.resDir+'KS_nav_ui.png';

	winMfg = main.getWinMfg(config);
	tabMfg = UIComp.tab('MFG',winMfg);
	
	winProds = main.getWinProd(config);
	tabProds = UIComp.tab('Products',winProds);
	
	winSearch = main.getWinSearch(config)
	tabSearch = UIComp.tab('Search',winSearch);
	
	winFavourites = main.getWinFavourites(config);
	tabFavourites = UIComp.tab('Favourites',winFavourites);
	
	winSettings = main.getWinSettings(config);
	tabSettings = UIComp.tab('Settings',winSettings);
	
	tabMain.addTab(tabGroups);
	tabMain.addTab(tabMfg);
	tabMain.addTab(tabProds);
	tabMain.addTab(tabSearch);
	tabMain.addTab(tabFavourites);
	tabMain.addTab(tabSettings);
	tabMain.open();
}

main.getWinGroups = function(config)
{
	var win = UIComp.window('white',false);
	win.setTitle('Groups');
	var mainView = UIComp.view('transparent',0,0,Ti.UI.FILL,Ti.UI.FILL);
	var tblDataGroups = model.getGroups(config);
	var tblSearchCtrl = UIComp.searchBar(0,Ti.UI.SIZE,true);
	var tblView = UIComp.tableView(tblDataGroups,Ti.UI.iPhone.TableViewStyle.GROUPED);
	tblView.search = tblSearchCtrl;
	tblView.addEventListener('click',function(e)
	{
		var tblGrpData = model.getGroupInfo(config, e.row.id);
		var tblSearchCtrl = UIComp.searchBar(0,Ti.UI.SIZE,true);
		var tblView = UIComp.tableView(tblGrpData,Ti.UI.iPhone.TableViewStyle.GROUPED);
		tblView.search = tblSearchCtrl;
		var winGrpData = UIComp.window('white',false);
		winGrpData.add(tblView);
		tabGroups.open(winGrpData,{animated: true});
	});
	mainView.add(tblView);
	win.add(mainView);
	return win;
}

main.getWinMfg = function(config)
{
	var win = UIComp.window('white',false);
	return win;
}

main.getWinProd = function(config)
{
	var win = UIComp.window('white',false);
	return win;
}

main.getWinSearch = function(config)
{
	var win = UIComp.window('white',false);
	return win;
}

main.getWinFavourites = function(config)
{
	var win = UIComp.window('white',false);
	return win;
}

main.getWinSettings = function(config)
{
	var win = UIComp.window('white',false);
	return win;
}

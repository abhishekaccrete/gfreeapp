config = {
	osname: Ti.Platform.osname,
	platformWidth: Ti.Platform.displayCaps.platformWidth,
	platformHeight: Ti.Platform.displayCaps.platformHeight,
	viewPath: Ti.Filesystem.resourcesDirectory+'view/',
	modelPath: Ti.Filesystem.resourcesDirectory+'model/',
	resDir: Ti.Filesystem.resourcesDirectory
};

try
{
	config.db = Ti.Database.install(config.resDir+'gfree_sqlite_db.sqlite','glutendb');
	Ti.include(config.viewPath+'main.js');
	main.open(config);
}
catch(e)
{
	alert(e);
}
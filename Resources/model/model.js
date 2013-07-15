model = {};

model.getGroups = function(config)
{
	Ti.include(config.modelPath+'dblayer.js');
	Ti.include(config.viewPath+'UIComp.js');
	var data = dblayer.getGroupsFromDB(config);
	//var fieldCount = model.getFieldCount(config,data);
	var tblData = [];
	while(data.isValidRow())
	{
		var row = UIComp.tableViewRow();
		row.id = data.field(0);
		var lblRowText = UIComp.label(10,10,Ti.UI.SIZE,Ti.UI.SIZE,data.field(1));
		row.add(lblRowText);
		tblData.push(row);
		Ti.API.info(data);
		data.next();
	}
	Ti.API.info(data);
	return tblData;
}

model.getGroupInfo = function(config, grpId)
{
	var data = dblayer.getGroupInfoForGroupID(config,grpId);
	var tblData = [];
	if(data.rowCount > 0)
	{
		while(data.isValidRow())
		{
			var row = UIComp.tableViewRow();
			row.id = data.field(0);
			var lblProdName = UIComp.label(10,10,100, 100,data.field(1));
			row.add(lblProdName);
			row.prodName = data.field(1);
			row.prodDesc = data.field(2);
			tblData.push(row);
			data.next();
		}		
	}
	else
	{
		alert('No data found for: Group id:'+grpId);
	}
	return tblData;
}

model.getFieldCount = function(config, data)
{
	if(config.osname == 'android')
	{
		return data.fieldCount;
	}
	else
	{
		return data.fieldCount();
	}
}

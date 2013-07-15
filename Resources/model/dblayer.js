dblayer = {};
dblayer.getGroupsFromDB = function(config)
{
	var sql = "SELECT idtblGroup, vchDesc FROM tblgroup ORDER BY vchDesc ASC";
	return config.db.execute(sql);
}

dblayer.getGroupInfoForGroupID = function(config, grpId)
{
	var sql = "SELECT tblproduct.idtblProduct as prodid, tblproduct.vchDesc as proddesc, tblManuf.vchName as prodname "
	+"FROM tblproduct, tblManuf WHERE tblProduct.fk_idtblgroup = " + grpId+" AND "
	+"tblProduct.fk_idtblManuf = tblManuf.idtblManuf ORDER BY vchName, vchDesc ASC";
	return config.db.execute(sql);
}

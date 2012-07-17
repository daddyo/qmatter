/*
 * Append HTML row to identified table
 */
function appendTableRow(tblName, rowMarkup) {
	if (tblName == undefined || rowMarkup == undefined) {
		alert ("tblName or rowMarkup is undefined");
	}
	if (tblName == null || rowMarkup == null) {
		alert ("tblName or rowMarkup is null");
	}
	
	$("#" + tblName).append(rowMarkup);
}


/*
 * Create HTML markup for quote
 */
// TODO: define & pass class rather than grow param list
function quoteRowMarkup(symbol, quote) {
	return "<tr><td>" + symbol + "</td><td>" + quote + "</td></tr>";	
}


/*
 * 
 */
function GetXmlHttpObject()
{
	var xmlHttp=null;
	try
	{
		// Firefox, Opera 8.0+, Safari
		xmlHttp=new XMLHttpRequest();
	}
	catch (e)
	{
		//Internet Explorer
		try
		{
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttp;
}

(function(){
var service=angular.module("navigationapp",[]).factory("navigationservices",["$scope",navigationservices]);

function navigationservices()
{
	var getListIteams=function(restresource){


	var pageurl=SP.ClientContext.get_current();
	var url=pageurl+"/_api/web/lists/GetByTitle('"+ restresource.Title +"')/items?";



	var param;
	if(restresource.select !='undefined' && restresource.select !="" && restresource.select !='null')

	{
      param=url+ "'$'"+ restresource.select +"";
	}
	elseif (restresource.extend !='undefined' && restresource.extend !="" && restresource.extend !='null')
	{
		param=param+ "'&$'"+ restresource.extend +"";
	}
	elseif(restresource.filter !='undefined' && restresource.filter !="" && restresource.filter !='null')
	{
		param=param+"'&$'"+ restresource.filter +""
	}
	elseif(restresource.orderby !='undefined' && restresource.orderby !="" && restresource.orderby !='null')
	{
		param=param+"'&$'"+ restresource.orderby +"";
	}
	url=url+param;
	var datam="";
	$http({
		method:GET,
	url:url}).then(function(response){
		datam=response.data;
	});

		$scope.datam=datam;
		return $scope.datam;

	}
}
}








})();

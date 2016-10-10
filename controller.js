(function(){
var app=angular.module("navigationapp",["navigationservices"]);
app.controllers("parentcontroller",["$scope",parentController]);

parentcontroller.$inject=['navigationservices'];

function parentController(navigationservices)
{
	var restresource={
		Title:"sitenavigation",
		select:"Title",
		extend:"",
		filter:"",
		orderby:""

	};

     var totaldata=	navigationservices.getListIteams(restresource);
	 $scope.itemdata=totaldata;
}



})();

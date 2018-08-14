/**
 * 
 */

var app =  angular.module('EYS',["ngRoute"]);
app.controller("imagesCtrl",
        ["$scope", appController]
);

app.controller("queryCtrl",
        ["$scope", queryController]
);

// Define the routes for the module.
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        controller: "imagesCtrl",
        templateUrl: "views/productListView.html"
    })
    .when("/query", {
    	controller: "queryCtrl",
        templateUrl: "views/query.html"
    })
//    .otherwise({
//       template : "<h1>Nothing</h1><p>Nothing has been selected</p>"
//    });
});
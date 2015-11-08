var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);

var json = [{ "id": 1, "first_name": "Heather", "last_name": "Bell", "hobby": "Eating", "contacts": [{ "phone": "0000000000", "cell": "1111111111" }, { "phone": "6656776777", "cell": "7886757569" }] },
{ "id": 2, "first_name": "Andrea", "last_name": "Dean", "hobby": "Gaming", "contacts": [{ "phone": "2222222222", "cell": "3333333333" }, { "phone": "4334546535", "cell": "5453533566" }] },
{ "id": 3, "first_name": "Peter", "last_name": "Barnes", "hobby": "Reading Books", "contacts": [{ "phone": "4444444444", "cell": "5555555555" }, { "phone": "6565454666", "cell": "6786767677" }] },
{ "id": 4, "first_name": "Harry", "last_name": "Bell", "hobby": "Youtubing", "contacts": [{ "phone": "6666666666", "cell": "7777777777" }, { "phone": "6464566678", "cell": "7866757578" }] },
{ "id": 5, "first_name": "Deborah", "last_name": "Burns", "hobby": "Fishing", "contacts": [{ "phone": "7656755777", "cell": "4465456677" }, { "phone": "6854654666", "cell": "4564564577" }] },
{ "id": 6, "first_name": "Larry", "last_name": "Kim", "hobby": "Skipping", "contacts": [{ "phone": "7654646466", "cell": "8675567777" }, { "phone": "3424565666", "cell": "6454567778" }] },
{ "id": 7, "first_name": "Jason", "last_name": "Wallace", "hobby": "Football", "contacts": [{ "phone": "8888888888", "cell": "9999999999" }, { "phone": "0000000000", "cell": "1111111111" }] },
{ "id": 8, "first_name": "Carol", "last_name": "Williams", "hobby": "Baseball", "contacts": [{ "phone": "8888888888", "cell": "9999999999" }, { "phone": "0000000000", "cell": "1111111111" }] },
{ "id": 9, "first_name": "Samuel", "last_name": "Olson", "hobby": "Programming", "contacts": [{ "phone": "8888888888", "cell": "9999999999" }, { "phone": "0000000000", "cell": "1111111111" }] },
{ "id": 10, "first_name": "Donna", "last_name": "Evans", "hobby": "Playing DOTA", "contacts": [{ "phone": "8888888888", "cell": "9999999999" }, { "phone": "0000000000", "cell": "1111111111" }] },
{ "id": 11, "first_name": "Lois", "last_name": "Butler", "hobby": "Gaming", "contacts": [{ "phone": "8888888888", "cell": "9999999999" }, { "phone": "0000000000", "cell": "1111111111" }] },
{ "id": 12, "first_name": "Daniel", "last_name": "Hill", "hobby": "surfing", "contacts": [{ "phone": "8888888888", "cell": "9999999999" }, { "phone": "0000000000", "cell": "1111111111" }] },
{ "id": 13, "first_name": "Matthew", "last_name": "Torres", "hobby": "cycling", "contacts": [{ "phone": "8888888888", "cell": "9999999999" }, { "phone": "0000000000", "cell": "1111111111" }] },
{ "id": 14, "first_name": "Jerry", "last_name": "Hernandez", "hobby": "Music", "contacts": [{ "phone": "8888888888", "cell": "9999999999" }, { "phone": "0000000000", "cell": "1111111111" }] },
{ "id": 15, "first_name": "Christopher", "last_name": "Carpenter", "hobby": "Football", "contacts": [{ "phone": "8888888888", "cell": "9999999999" }, { "phone": "0000000000", "cell": "1111111111" }] },
{ "id": 16, "first_name": "Harold", "last_name": "West", "hobby": "Gaming", "contacts": [{ "phone": "8888888888", "cell": "9999999999" }, { "phone": "0000000000", "cell": "1111111111" }] },
{ "id": 17, "first_name": "Carol", "last_name": "Hicks", "hobby": "Youtubing", "contacts": [{ "phone": "8888888888", "cell": "9999999999" }, { "phone": "0000000000", "cell": "1111111111" }] },
{ "id": 18, "first_name": "Bonnie", "last_name": "Davis", "hobby": "Partying", "contacts": [{ "phone": "8888888888", "cell": "9999999999" }, { "phone": "0000000000", "cell": "1111111111" }] },
{ "id": 19, "first_name": "Nancy", "last_name": "Banks", "hobby": "Photography", "contacts": [{ "phone": "8888888888", "cell": "9999999999" }, { "phone": "0000000000", "cell": "1111111111" }] },
{ "id": 20, "first_name": "Walter", "last_name": "Freeman", "hobby": "Tweeting", "contacts": [{ "phone": "8444535545", "cell": "9435356778" }, { "phone": "7778657556", "cell": "7556564656" }] },
{ "id": 21, "first_name": "Louis", "last_name": "Gonzales", "hobby": "Bloging", "contacts": [{ "phone": "8888888888", "cell": "9999999999" }, { "phone": "0000000000", "cell": "1111111111" }] },
{ "id": 22, "first_name": "Jean", "last_name": "Watkins", "hobby": "Bloging", "contacts": [{ "phone": "8888888888", "cell": "9999999999" }, { "phone": "0000000000", "cell": "1111111111" }] },
{ "id": 23, "first_name": "Albert", "last_name": "Harris", "hobby": "Music", "contacts": [{ "phone": "8888888888", "cell": "9999999999" }, { "phone": "0000000000", "cell": "1111111111" }] },
{ "id": 24, "first_name": "Billy", "last_name": "Owens", "hobby": "Camping", "contacts": [{ "phone": "8888888888", "cell": "9999999999" }, { "phone": "0000000000", "cell": "1111111111" }] },
{ "id": 25, "first_name": "Russell", "last_name": "Patterson", "hobby": "Singing", "contacts": [{ "phone": "8888888888", "cell": "9999999999" }, { "phone": "0000000000", "cell": "1111111111" }] }];


app.controller('PageCtrl', function ($scope, $http) {
    $scope.users = []; //declare an empty array

    $scope.FirstNames = ["Deborah", "Harry", "Heather", "Peter", "Andrea", "Louis"];
    $scope.LastNames = ["Dean", "Barnes", "Burns", "Bell", "Kim", "Gonzales"];
    $scope.Hobbies = ["Eating", "Reading Books", "Gaming", "Fishing", "Skipping"];

    $scope.collapsed = true;
    $scope.expandAll = false;
    $scope.myContacts = [];
    $scope.myFilter = '';
    $scope.filterData = {};

    $scope.users = json;

    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }

    $scope.sortChildren = function (childkey) {
        $scope.childSortKey = childkey;   //set the sortKey to the param passed
        $scope.revchild = !$scope.revchild; //if true make it false and vice versa
    }

    $scope.FilterContacts = function (id) {
        $scope.myContacts = [];

        for (var i = 0; i < mycontacts.length; i++)
        {
            if (id == mycontacts[i]["id"])
            {
                $scope.myContacts.push(mycontacts[i]);
            }
        }
    }

    $scope.ClearFilters = function()
    {
        $scope.filterData = undefined;
        $scope.search = '';
    }

    $scope.ToggleAll = function () {
        if ($scope.collapsed)
            $scope.collapsed = false;
        else
            $scope.collapsed = true;
    }
});
Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}
app.filter('customFilter', function () {
    return function (items, filterData) {
        if (filterData == undefined)
            return items;
        var keys = Object.keys(filterData);
        var filtered = [];
        var populate = true;
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            populate = true;
            for (var j = 0; j < keys.length ; j++) {
                if (filterData[keys[j]] != undefined) {
                    //console.log(filterData[keys[j]] + "    " + item[keys[j]]);
                    if (filterData[keys[j]].length == 0 || filterData[keys[j]].contains(item[keys[j]])) {
                        populate = true;
                    } else {
                        populate = false;
                        break;
                    }
                }
            }
            if (populate) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});

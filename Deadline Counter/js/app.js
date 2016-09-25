var app = angular.module("app", []);
app.controller("counter", ["$scope", "$interval", function ($scope, $interval) {
    $scope.projectName = "DeadLine Manager";
    $scope.deadLine = "2016/12/31";
    $scope.days = "00";
    $scope.hours = "00";
    $scope.minutes = "00";
    $scope.seconds = "00";
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    var id = $interval(function () {
        var t = getTimeRemaining($scope.deadLine);
        $scope.days = t.days;
        $scope.hours = t.hours;
        $scope.minutes = t.minutes;
        $scope.seconds = t.seconds;
        if (t.total <= 0) {
            $interval.cancel(id);
        }
    }, 1000);
}]);
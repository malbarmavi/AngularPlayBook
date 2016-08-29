var rtl = angular.module('rtl', []);

rtl.controller('main', ['$scope', '$http', '$log', '$timeout', function ($scope, $http, $log, $timeout) {

    $scope.user = '';
    $scope.overflowShow = false;
    // something like asp.net resourse files;
    $scope.rltSwitch = function (lang) {
        if (lang === 'ltr') {

            $scope.pull = 'pull-left';
            $scope.dir = 'ltr';
            $scope.textAlign = 'text-left';
            $scope.currentLanguage = 'English';
            $scope.arabic = 'Arabic';
            $scope.english = 'English';
            $scope.firstName = 'First Name'
            $scope.fatherName = 'Father Name';
            $scope.lastName = 'Last name';
            $scope.userName = 'User Name';
            $scope.userNameNote = 'Current username is available.'
            $scope.postion = 'Postion';
            $scope.job = 'Job';
            $scope.email = 'Email';
            $scope.emailNote = "Only google,microsoft accounts."
            $scope.country = 'Country';
            $scope.city = 'City';
            $scope.bootstrap = "bootstrap";
        }
        else {

            $scope.pull = 'pull-right';
            $scope.dir = 'rtl';
            $scope.textAlign = 'text-right';
            $scope.currentLanguage = 'العربية';
            $scope.arabic = 'العربية';
            $scope.english = 'الانكليزية';
            $scope.firstName = 'الاسم';
            $scope.fatherName = 'اسم الأب';
            $scope.lastName = 'الكنية';
            $scope.userName = 'اسم المستخدم';
            $scope.userNameNote = 'اسم المستخدم متاح.'
            $scope.postion = 'المنصب';
            $scope.job = 'الوظيفة';
            $scope.email = 'البريد الالكتروني';
            $scope.emailNote = "فقط حسابات غوغل , مايكروسوفت."
            $scope.country = 'البلد';
            $scope.city = 'المدينة';
            $scope.bootstrap = 'بوستراب';
        }
    }

    $scope.rltSwitch('ltr');

    $timeout(function () {
        $scope.overflowShow = false;
    }, 3000);
}])
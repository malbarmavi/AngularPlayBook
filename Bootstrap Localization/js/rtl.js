var rtl = angular.module('rtl', []);
rtl.service('$lang', function() {
    this.rltSwitch = function (lang) {
         if (lang === 'ltr') {

            this.pull = 'pull-left';
            this.dir = 'ltr';
            this.textAlign = 'text-left';
            this.currentLanguage = 'English';
            this.arabic = 'Arabic';
            this.english = 'English';
            this.firstName = 'First Name'
            this.fatherName = 'Father Name';
            this.lastName = 'Last name';
            this.userName = 'User Name';
            this.userNameNote = 'Current username is available.'
            this.postion = 'Postion';
            this.job = 'Job';
            this.email = 'Email';
            this.emailNote = "Only google,microsoft accounts."
            this.country = 'Country';
            this.city = 'City';
            this.bootstrap = "bootstrap";
        }
        else {

            this.pull = 'pull-right';
            this.dir = 'rtl';
            this.textAlign = 'text-right';
            this.currentLanguage = 'العربية';
            this.arabic = 'العربية';
            this.english = 'الانكليزية';
            this.firstName = 'الاسم';
            this.fatherName = 'اسم الأب';
            this.lastName = 'الكنية';
            this.userName = 'اسم المستخدم';
            this.userNameNote = 'اسم المستخدم متاح.'
            this.postion = 'المنصب';
            this.job = 'الوظيفة';
            this.email = 'البريد الالكتروني';
            this.emailNote = "فقط حسابات غوغل , مايكروسوفت."
            this.country = 'البلد';
            this.city = 'المدينة';
            this.bootstrap = 'بوستراب';
        }
    }
    
});
rtl.controller('main', ['$scope', '$http', '$log', '$timeout','$lang', function ($scope, $http, $log, $timeout,$lang) {

    $scope.user = '';
    $scope.overflowShow = false;
    $scope.rltSwitch = $lang.rltSwitch
    $scope.rltSwitch('ltr');
    
    $timeout(function () {
        $scope.overflowShow = false;
    }, 3000);
}])
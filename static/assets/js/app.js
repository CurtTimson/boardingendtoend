angular.module('app', [])
    .controller('countdown', function($scope){

        $scope.countdown = {
            days: 1,
            hours: 2,
            minutes: 3,
            seconds: 4
        }

    });

    
angular.module('timeApp')
.controller('mainCtrl', function($scope){
  $scope.name = 'Richard';

  // $scope.countries = [
  //   {
  //     name: 'USA',
  //     tz: '-7',
  //   },
  //   {
  //     name: 'Japan',
  //     tz: '9',
  //   },
  //   {
  //     name: 'Argentina',
  //     tz: '-4',
  //   },
  //   {
  //     name: 'Austrailia',
  //     tz: '8',
  //   },
  //   {
  //     name: 'Greenland',
  //     tz: '-3',
  //
  //   }
  // ];

  $scope.logTheThing = function(){
    console.log('the thing');
  }

});

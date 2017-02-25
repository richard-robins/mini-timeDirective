angular.module('timeApp')
.directive('showTime', function(){

  return {
    restrict:'E',
    template: '<div>The current time is {{time}}</div>',
    scope:{
      theCallback:'&'
      // name: '@countryName',
      // tz: '@countryTz'
    },
    link: function(scope, element, attributes){
console.log(scope);
      var currentTime = new Date();
      scope.time = currentTime.toString();
    },
    controller: function($timeout, $scope){
      $timeout(function(){
        $scope.theCallback = 'RIchard';
      }, 3000);
    }
  };

})


//This was an extra piece about angular.element jqLite
.directive('clicketyClick', function(){
  return{
    link: function(scope, element, attributes){
      console.log(element);
      angular.element(element).on('click', function(){
        console.log('you clicked it');
      });
    }
  }
})

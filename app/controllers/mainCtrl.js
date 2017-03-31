angular.module ('restaurantApp')

.controller('mainControl', function ($scope, $http, $document) {

   $scope.isCollapsed = true;

   // Services Data
   $http.get('assets/data/data.json').then(function(response){
      $scope.data = response.data;
   });


   $scope.toTheTop = function() {
      $document.scrollTopAnimated(0, 5000).then(function() {
         console && console.log('You just scrolled to the top!');
      });
   }
})

.directive("owlCarousel", function() {
   return {
      restrict: 'E',
      transclude: false,
      link: function (scope) {
         scope.initCarousel = function(element) {
            var defaultOptions = {
            };
            var customOptions = scope.$eval($(element).attr('data-options'));
            for(var key in customOptions) {
               defaultOptions[key] = customOptions[key];
            }
            $(element).owlCarousel(defaultOptions);
         };
      }
   };
})
    .directive('owlCarouselItem', [function() {
       return {
          restrict: 'A',
          transclude: false,
          link: function(scope, element) {
             if(scope.$last) {
                scope.initCarousel(element.parent());
             }
          }
       };
    }]);
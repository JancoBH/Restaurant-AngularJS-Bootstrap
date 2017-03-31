angular.module('restaurantApp' , ['ui.router', 'duScroll'])

.config( function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('index', {
            url: '/',
            controller: "mainControl",
            templateUrl: 'app/views/main.html'
        })

        // Menus
        .state('proximamente',{
            url: '/proximamente',
            controller: "mainController",
            templateUrl: 'views/prox.html'

        })

        .state('completado',{
            url: '/completado',
            controller: "mainController",
            templateUrl: 'views/comp.html'
        })

        .state('registro',{
            url: '/registro',
            controller: "mainController",
            templateUrl: 'views/registro.html'
        });
} );
angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('page1.page2', {
    url: '/feeds',
    views: {
      'tab1': {
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
      }
    }
  })

  .state('page1.page3', {
    url: '/chat',
    views: {
      'tab2': {
        templateUrl: 'templates/page3.html',
        controller: 'page3Ctrl'
      }
    }
  })

  .state('page1.page4', {
    url: '/profile',
    views: {
      'tab3': {
        templateUrl: 'templates/page4.html',
        controller: 'page4Ctrl'
      }
    }
  })

  .state('page1', {
    url: '/cmru',
    templateUrl: 'templates/page1.html',
    abstract:true
  })

  .state('page5', {
    url: '/login',
    templateUrl: 'templates/page5.html',
    controller: 'page5Ctrl'
  })

  .state('page6', {
    url: '/signup',
    templateUrl: 'templates/page6.html',
    controller: 'page6Ctrl'
  })

  .state('page7', {
    url: '/image',
    templateUrl: 'templates/page7.html',
    controller: 'page7Ctrl'
  })

  .state('post', {
    url: '/post',
    templateUrl: 'templates/post.html',
    controller: 'postCtrl'
  })

$urlRouterProvider.otherwise('/cmru/feeds')

  

});
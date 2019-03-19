/**
 * entry
 * @Author: zhangxuelian 
 * @Date: 2017-09-14 09:32:34 
 * @Last Modified by: chenpeiyu
 * @Last Modified time: 2019-03-18 20:47:47
 **/
require(['angular'], function () {
    require([
        'angular-couch-potato',
        'angular-ui-router',
        'angular-ui-bootstrap-tpls',
        'angular-shiro',
        'angular-cookies',
        'app/common/constants',
        'app/common/models',

        // 'bower_components/common/exception/index',
    
        
        'bower_components/gx-common/gx-common'

    ], function () {
        require(['app/common/app', 'angular', 'angular-couch-potato'], function (app, angular, couchPotato) {

            var main = angular.module('main', [
                'scs.couch-potato',
                'ui.router',
                'models',
                'ui.bootstrap',
                // 'exception',
                'angularShiro',
                'constants',
                'app',
                'ngCookies'
               
            ]);
            couchPotato.configureApp(app);
            main.config(function ($httpProvider) {
                $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
            });
            main.run([
                '$couchPotato', '$state', '$stateParams', '$rootScope',
                function ($couchPotato, $state, $stateParams, $rootScope) {
                    
                    app.lazy = $couchPotato;

                    $rootScope.$state = $state;
                    $rootScope.$stateParams = $stateParams;

                }
            ]);
            
            angular.element(document).ready(function () {
                angular.bootstrap(document, [main['name'], function () {
                    angular.element(document).find('html').addClass('ng-app');
                }]);
            });
        });
    });
});
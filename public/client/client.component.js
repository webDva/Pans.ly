angular.module('client')
        .component('client', {
            templateUrl: 'client/client.template.html',
            controller: function ClientController($scope, $http) {
                this.who = 'wa';
                this.userUrl;
                $scope.newUrl;

                this.shortenUrl = function () {
                    $http.post('/api/shorten/?url=' + this.userUrl, {
                        method: 'POST',
                        url: '/api/shorten/?url=' + this.userUrl,
                        data: '' // don't know about this stray thing
                    }).then(function successCallback(response) {
                        $scope.newUrl = response; // for debugging, really
                        console.log(response);
                    }, function errorCallback(response) {
                        console.log(response);
                    });
                };
            }
        });
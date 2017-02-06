angular.module('client')
        .component('client', {
            templateUrl: 'client/client.template.html',
            controller: function ClientController($http) {
                this.who = 'wa';
                this.userUrl;

                this.shortenUrl = function () {
                    $http.post('/api/shorten/?url=' + this.userUrl, {
                        method: 'POST'
                    }).then(function successCallback(response) {
                        console.log(response);
                    }, function errorCallback(response) {
                        console.log(response);
                    });
                };
            }
        });
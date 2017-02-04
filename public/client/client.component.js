angular.module('client')
        .component('client', {
            templateUrl: 'client/client.template.html',
            controller: function ClientController() {
                this.who = 'wa';
                this.userUrl;

                this.shortenUrl = function () {
                    $http({
                        method: 'POST',
                        url: '/api/shorten/?url=' + this.userUrl
                    }).then(function successCallback(response) {
                        console.log(response);
                    }, function errorCallback(response) {
                        console.log(response);
                    });
                };
            }
        });
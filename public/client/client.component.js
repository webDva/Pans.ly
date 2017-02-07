angular.module('client')
        .component('client', {
            templateUrl: 'client/client.template.html',
            controller: function ClientController($http) {
                this.who = 'wa';
                this.userUrl;
                this.httpResponse;

                this.shortenUrl = function () {
                    $http.post('/api/shorten/?url=' + this.userUrl, {
                        method: 'POST'
                    }).then(function successCallback(response) {
                        console.log(response);
                        $http.post('/api/createEntry/?longUrl=' + response.data.longUrl + '&shortUrl=' + response.data.shortUrl, {
                            method: 'POST'
                        }).then(function successCallback(response) {
                            console.log(response);
                        }, function errorCallback(response) {
                            console.log(response);
                        });
                    }, function errorCallback(response) {
                        console.log(response);
                    });
                };
            }
        });
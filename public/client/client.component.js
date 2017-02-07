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
                        this.httpResponse = response;
                    }, function errorCallback(response) {
                        console.log(response);
                    });
                };

                this.createEntry = function (longUrl, shortUrl) {
                    $http.post('/api/createEntry/' + longUrl + '/' + shortUrl, {
                        method: 'POST'
                    }).then(function successCallback(response) {
                        console.log(response);
                    }, function errorCallback(response) {
                        console.log(response);
                    });
                };
                
                this.giveUrl = function() {
                    this.shortenUrl();
                    this.createEntry(this.httpResponse.data.longUrl, this.httpResponse.data.shortUrl);
                };
            }
        });
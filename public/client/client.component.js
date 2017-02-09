angular.module('client')
        .component('client', {
            templateUrl: 'client/client.template.html',
            controller: function ClientController($http, UserData, $scope) {
                $scope.Client = UserData;

                this.shortenUrl = function () {
                    $http.post('/api/shorten/?url=' + this.userUrl, {
                        method: 'POST'
                    })
                            .then(function successCallback(response) {
                                console.log(response);
                                $scope.Client.UsersLongUrl = response.data.longUrl;
                                $scope.Client.UsersShortUrl = response.data.shortUrl;
                                $http.post('/api/createEntry', {
                                    method: 'POST',
                                    data: {longUrl: response.data.longUrl, shortUrl: response.data.shortUrl}
                                })
                                        .then(function successCallback(response) {
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
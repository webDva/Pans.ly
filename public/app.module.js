angular.module('app', [
    'results',
    'client'
])
        .factory('UserData', function () {
            return {UsersLongUrl: '', UsersShortUrl: ''};
        });
angular.module('client')
        .component('client', {
            templateUrl: 'client/client.template.html',
            controller: function ClientController() {
                this.who = 'wa';
                this.userUrl;
            }
        });
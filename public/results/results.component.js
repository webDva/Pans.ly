angular.module('results')
        .component('results', {
            templateUrl: 'results/results.template.html',
            controller: function ResultsController(UserData) {
                this.Results = UserData;
            }
        });
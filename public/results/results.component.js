angular.module('results')
        .component('results', {
            templateUrl: 'results/results.template.html',
            controller: function ResultsController() {
                this.who = 'wa';
            }
        });
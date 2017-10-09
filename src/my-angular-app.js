'use strict';

angular.module('myApp', [])
  .controller('MyCtrl', function() {
    this.cool = 'This is angular';
	this.menu=[
      'Angular Menu Link 1',
      'Angular Menu Link  2',
       'Angular Menu Link  3',
      'Angular Menu Link  4'
	  ];
  });

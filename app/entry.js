'use strict';

//require sass
require('./base.scss');

const angular = require('angular');

console.log('angular', angular);


//create an angular module called "demoApp"
//add a cowsay component to it
//   *write the template*
//    *make the controller*
//     *write controller tests for the state of that controller*

//setter
//different from requiring/exporting in commonJS. This is how angular does it
angular.module('ipsumApp', []);

//use getter to get the demoApp property of angular
angular.module('ipsumApp')
.controller('IpsumController', ['$log', IpsumController]);

function IpsumController($log){
  $log.log('inside IpsumController');
  //life cycle hook
  //the created instance is mapped with $onInit then $onInit is disregarded
  //$onInit is used to define state and methods before the template gets compuled (like handlebar.compile)
  //it essentially sets up state
  this.$onInit = () => {
    //dictionary is available on ctrl scope
    this.dictionary = {
      hacker: ['rm -rf', 'password is password', 'hack the mainframe', 'im in the matrix', 'this password are plain text', 'leave no trace'],

      bob: ['happy little accidents', 'treeeeees', 'why?', 'how delightful', 'im a hippy'],

      simpsons: ['spider cow', 'cowabunga', 'eat my shorts', 'donuts', 'homer homer', 'skateboards n shit']
    };
    //choices is holding property names from the dictionary (object.keys returns the properties of this.dictionary)
    this.choices = Object.keys(this.dictionary);
    //by default, selected is the first choice (the hacker property inside the dictionary)
    this.selected = this.choices[0];
    this.content = '';

    //testability! pass in an array of something, and it returns a random item from thta array
    this.getRandomItem = (list) => {
      return list[Math.floor(Math.random() * list.length)];
    };
    //get random information from one of the dictionaries and append them to an array
    this.handleSubmit = () => {
      let result = [];
      //run it 15 times
      for(let i = 0; i < 15; i++){
        let choice = this.dictionary[this.selected];
        result.push(this.getRandomItem(choice));
      }
      $log.log(result);
      this.content = result.join('. ');
    };
  };
}

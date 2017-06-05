var app = angular.module('myApp', [])
.controller('AppController', function InvoiceController() {
  this.code = 1;
  this.word = ""; 
  this.type = "Cifrar";
  this.show = false;
  this.result = "";
  this.valid = false;

  this.submit = function() {
    this.convertWord();
  };
  this.wrongWord = function (){
    this.code = this.code + 1;
    this.convertWord();
  };
  this.convertWord = function(){
    if (this.code > 26){ alert("No puede pasar de 26"); return;}
    let word = "";
    switch(this.type) {
      case "Cifrar":
          word = cipher.encodeWord(this.word.toUpperCase(), this.code); 
        break;
      case "Descifrar":
          word = cipher.decodeWord(this.word.toUpperCase(), this.code); 
        break;
      default:
    } 
    this.show = true;
    this.result = word;
  };
  this.clean = function (){
    this.show = false;
    this.result = "";
    this.word = "";
    this.code = 1;
    this.type = "Cifrar";
  };
  this.validWord = function(){
    this.valid = true;
  };
});

app.directive('replace', function() {
  return {
    require: 'ngModel',
    scope: {
      regex: '@replace',
      with: '@with'
    }, 
    link: function(scope, element, attrs, model) {
      model.$parsers.push(function(val) {
        if (!val) { return; }
        let regex = new RegExp(scope.regex);
        let replaced = val.replace(regex, scope.with); 
        if (replaced !== val) {
          model.$setViewValue(replaced);
          model.$render();
        }         
        return replaced;         
      });
    }
  };
})
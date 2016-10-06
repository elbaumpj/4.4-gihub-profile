alert("Hello World!");
var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars');
var githubtoken = require('./gitapikey.js');

if(githubtoken !== undefined){
 $.ajaxSetup({
   headers: {
     'Authorization': 'token ' + githubtoken.token
   }
 });
}

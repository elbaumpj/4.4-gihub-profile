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

$.ajax('https://api.github.com/users/elbaumpj').then(getUserInfo);

function getUserInfo(data){
  var userInfo = data;
  var $profileBar = $('#profile-bar');
  console.log(data);

  var source = $('#profile-template').html();
  var template = Handlebars.compile(source);

  $profileBar.append(template(userInfo));

}

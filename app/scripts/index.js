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
$.ajax('https://api.github.com/users/elbaumpj/repos?sort=pushed').then(getRepos);
$.ajax('https://api.github.com/users/elbaumpj/orgs').then(getOrgAvatar);

function getUserInfo(data){
  var userInfo = data;
  var $profileBar = $('#profile-bar');
  console.log(data);

  var source = $('#profile-template').html();
  var template = Handlebars.compile(source);

  $profileBar.append(template(userInfo));
}

function getRepos(data) {
  var repos = data;
  var $reposSection = $('#repos-section');
  console.log(repos);

  var source = $('#repos-template').html();
  var template = Handlebars.compile(source);


  _.each(repos, function(repos){
      $reposSection.append(template(repos));
    });
}

function getOrgAvatar(data) {
  var orgData = data;
  var $orgSection = $('#org-section');

  var source = $('#orgs-template').html();
  var template = Handlebars.compile(source);

  $orgSection.append(template(orgData));
}

githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource){
  
  var searchResource = $resource('https://api.github.com/search/users?access_token=7458b50664a5209ab61c80fc7b3b86c494f3226c')
  var self = this;

  self.doSearch = function (){
    self.searchResult = searchResource.get(
      { q: self.searchTerm }
    );
  };
}])
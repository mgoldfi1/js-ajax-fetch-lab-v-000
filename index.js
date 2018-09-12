function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '3edfb7aef2a7610cb710ea94d08e7edb721372f5';
}

function forkRepo() {
  const repo = 'api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  // fetch(repo,
  //   {
  //   method: 'POST'
  //   headers: {
  //     Authorization: `token ${getToken()}`
  //   }
  // }).then(res => console.log(res))
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}

Yo.add('Tooltip', ['test'], function() {
  console.log('Tooltip active');

  var output = function() {
    console.log('output from tooltip');
  };

  return {
    output: output
  }
});
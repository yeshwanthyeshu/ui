var app = angular.module("MyApp", ["ui.bootstrap.modal"]);

app.controller("MyCtrl", function($scope) {

  $scope.open = function() {
    $scope.showModal = true;
  };
  $scope.selectedchart ='none';
  $scope.ok = function() {
    $scope.showModal = false;
  };

  $scope.cancel = function() {
    $scope.showModal = false;
  };
	$scope.options = ['line','bar','pie'];
	
  $scope.mysubmit = function () {

    if(this.selectedchart == "line"){
      $scope.chart = c3.generate({
        bindto: '#chart',
        data: {
          columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
          ]
        }
    });
	}if(this.selectedchart == "bar"){

var chart = c3.generate({
  data: {
      columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 130, 100, 140, 200, 150, 50]
      ],
      type: 'bar'
  },
  bar: {
      width: {
          ratio: 0.5 // this makes bar width 50% of length between ticks
      }
      // or
      //width: 100 // this makes bar width 100px
  }
});
}
if(this.selectedchart == "pie"){
  var chart = c3.generate({
    data: {
        // iris data from R
        columns: [
            ['data1', 30],
            ['data2', 120],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});

} 
  this.cancel();
  };
 



});
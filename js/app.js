var app = angular.module("MyApp", ["ui.bootstrap.modal"]);

app.controller("MyCtrl", function($scope) {

  $scope.open = function() {
    $scope.showModal = true;
  };
  $scope.showchart = function(val) {
    console.log("you clicked tab"+val);
  }
  
  $scope.i = 0;
  $scope.newele= [];
  $scope.appendtab = function () {
    var tohere = angular.element( document.querySelector( '#tabs' ) );
    
    
    this.newele.push(this.selectedchart);
    $scope.my = this.i;

    var ele = angular.element("<div class='tab' onclick='angular.element(this).scope().showchart()' >"+"<p id='"+this.my+"'>"+"s.no: "+this.my+" </p>"+"chart:" +this.newele[this.i]+"</div>");
    tohere.append(ele); 
    this.i = this.i +1;
  };
//data-ng-click='showchart($event)
  $scope.selectedchart ='none';
  $scope.ok = function() {
    $scope.showModal = false;
  };
  $scope.clear = function () {
    document.getElementById("myform").reset();
  }
  $scope.myname='';
  $scope.cancel = function() {
    $scope.showModal = false;
  };
	$scope.options = ['line','bar','pie'];
  $scope.data1= ['data1', 30, 200, 100, 400, 150, 250];
  $scope.data2= ['data2', 50, 20, 10, 40, 15, 25];
  $scope.savedcharts = [];
  $scope.savingdashboard = function() {
    $scope.charttype = this.selectedchart;
    $scope.chartname = this.myname;
    $scope.chartheight = this.myheight;
    $scope.chartwidth = this.mywidth;
    $scope.chartdata1 = this.data1;
    $scope.chartdata2 = this.data2;
    this.savedcharts.push([this.chartname,this.charttype,this.chartheight,this.chartwidth,this.chartdata1,this.chartdata2]);
    console.log(this.savedcharts);
  }
  $scope.mysubmit = function () {
    this.appendtab();
    
    if(this.selectedchart == "line"){
      $scope.chart = c3.generate({
        bindto: '#chart',
        data: {
          columns: [
            this.data1,
            this.data2
          ]
        }
    });
	}if(this.selectedchart == "bar"){

var chart = c3.generate({
  data: {
      columns: [
        this.data1,
        this.data2
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
  $scope.piedata = [];
  for(var i =0;i<this.data1.length-1;i++){
    this.piedata.push(["data"+i,this.data1[i+1]]);
  }
  console.log(this.piedata);
  var chart = c3.generate({
    data: {
        // iris data from R
        columns: this.piedata,
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});

} 

  
  if(this.myname != '' && this.selectedchart !='none'){
    console.log("not emppty");
    this.savingdashboard();
    this.cancel();
    this.clear();
  }else{
    console.log("empty");
  }

};

 



});
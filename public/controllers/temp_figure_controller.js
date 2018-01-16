//var dateFormat = require('dateformat');
var myApp = angular.module('myApp');

myApp.controller('temp_figure_controller', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('TempFigureController loaded...');

	$scope.getTempfigure = function(){
    $http.get('/api/temp').then(function(responce){
			$scope.temps = responce.data;
      localData = responce.data;
  	  console.log(localData);
    
    var i;
    var localtemp = new Array();
    var localtempdate = new Array();
    //if (localData.length<=10) {
     for (i = 0; i<localData.length; i++ ){


      
      localtemp.push(localData[i].reading);
      localtempdate.push(localData[i].createdDate)
      
    };
    //}

    /*else
      for (i = localData.length-10; i<localData.length; i++ ){

      
      localtemp.push(localData[i].reading);
      localtempdate.push(localData[i].createdDate)
      
    };*/
    var json = JSON.stringify(localtempdate);
    console.log("loading json date");
    //console.log(json);
    var dateStr = JSON.parse(json);
    console.log(dateStr);
    //var dateStr1 = new Date("2017-12-09T17:29:41.536Z")
    var date_formatted = new Array();
    var hours = new Array();
    var minites = new Array();
    var date_updated = new Array();
    for (i = 0; i<dateStr.length;i++){
    //console.log(i);
    date_formatted[i] = new Date(dateStr[i]);
    //console.log(date_formatted[i]);
    hours[i] = date_formatted[i].getHours();
    minites[i] = date_formatted[i].getMinutes();
    //console.log(hours[i])
    date_updated[i] = hours[i] + ":" + minites[i];
    };
    //dateFormat(dateStr,"isoDateTime");
    console.log(date_updated);
    
    
    
    var tempchart = document.getElementById('tempchart').getContext('2d');
    console.log(tempchart);
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    var TempChart = new Chart(tempchart, {
      type:'line', 
      data:{
        
        labels: date_updated,
        datasets:[{
          label:'Temperture',
          data: localtemp,
          
          backgroundColor:[
            
            'rgba(255, 199, 132, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Temperture in room',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        },
        scales:{
          yAxes:[{
            ticks:{
              beginAtZero: true
            }
          }]
        }
      }
    });
  })
};
}])



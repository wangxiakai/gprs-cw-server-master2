var myApp = angular.module('myApp');

myApp.controller('motion_figure_controller', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  console.log('TempFigureController loaded...');

  $scope.getMotionfigure = function(){
    $http.get('/api/motion').then(function(responce){
      $scope.motions = responce.data;
      localData2 = responce.data;
      
    
    var i;
    var localmotion = new Array();
    var localmotiondate = new Array();


    console.log(localData2.length);

    //if (localData2<10) {
    for (i = 0; i<localData2.length; i++ ){
      
      localmotion.push(localData2[i].reading);
      localmotiondate.push(localData2[i].createdDate)
      
    };
    //}
    /*else 
    for (i = localData2.length-10; i<localData2.length; i++ ){
      
      localmotion.push(localData2[i].reading);
      localmotiondate.push(localData2[i].createdDate)
      
    }; */

    
    var motionchart = document.getElementById('motionchart').getContext('2d');
    console.log(motionchart);
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    var MotionChart = new Chart(motionchart, {
      type:'line', 
      data:{
        labels:localmotiondate,
        datasets:[{
          label:'Motion',
          data: localmotion,
          

          backgroundColor:[
            
            'rgba(166, 12, 132, 0.6)'
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
          text:'Motion in room',
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



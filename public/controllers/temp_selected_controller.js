  var myApp = angular.module('myApp');

  myApp.controller('temp_selected_controller', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  console.log('TempSelectedController loaded from temp_selected_controller.js...');



      $scope.getTempselectedfigure = function(){
      
      document.getElementById('search-button').onclick = function () {
      search_date=document.getElementById('selected-date').value;
      console.log(search_date);
      location.href = "#!/temp_data/"+search_date;
    };

    $http.get('/api/temp/' + search_date).then(function(responce){
      $scope.temps = responce.data;
      localData3 = responce.data;
      console.log(localData3);


    var i;
    var localtemp = new Array();
    var localtempdate = new Array();
    for (i = 0; i<localData3.length; i++ ){
      
      localtemp.push(localData3[i].reading);
      localtempdate.push(localData3[i].createdDate)
      
    };
    j = 0;
    for (i = 12; i < 17; i++){
      j = j+1;
      localtempdate_new[j] = localtempdate[i];  
    }
     
    
    var tempselectedchart = document.getElementById('tempselectedchart').getContext('2d');
    console.log(tempselectedchart);
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    var TempselectedChart = new Chart(tempselectedchart, {
      type:'line', 
      data:{
        
        labels: localtempdate,
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



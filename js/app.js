
var overview = document.getElementById("overview");
var overviewContentainer = document.getElementById("container1");
var students = document.getElementById("students");
var studentsContentainer = document.getElementById("container2");
var teachers = document.getElementById("teachers");
var teachersContentainer = document.getElementById("container3");

overview.onclick = function() {
    overviewContentainer.style.display = "initial";
    studentsContentainer.style.display = "none";
    teachersContentainer.style.display = "none";
}

students.onclick = function() {
    overviewContentainer.style.display = "none";
    studentsContentainer.style.display = "initial";
    teachersContentainer.style.display = "none";
}

teachers.onclick = function() {
    overviewContentainer.style.display = "none";
    studentsContentainer.style.display = "none";
    teachersContentainer.style.display = "initial";
}

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

  //GRAFICO1
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Sprint", "Total Alumnas", { role: "style" } ],
        ["Sprint 1", 150, "#352640"],
        ["Sprint 2", 145, "#92394B"],
        ["Sprint 3", 0, "#FFFFFF"],
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = { 
        bar: {groupWidth: "60%"},
        legend: { position: "none" },
      };

      var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
      chart.draw(view, options);
  }

 //GRAFICO 2
  
     google.charts.load('current', {'packages':['corechart']});
     google.charts.setOnLoadCallback(drawChart2);

      function drawChart2() {
        var data = google.visualization.arrayToDataTable([
          ['Sprint', '%'],
          ['Sprint 1',  1000],
          ['Sprint 2',  1170],
          ['Sprint 3',  1170],
        ]);

        var options = {
          colors: ["#92394B"],
          hAxis: {title: 'Sprints', titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0},

        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }


  //GRAFICO 3  
     google.charts.load('current', {'packages':['corechart']});
     google.charts.setOnLoadCallback(drawChart3);

      function drawChart3() {
        var data = google.visualization.arrayToDataTable([
          ['Sprint', '%',],
          ['Sprint 1',  1000],
          ['Sprint 2',  1170],
          ['Sprint 3',  1170],
        ]);

        var options = {
          colors: ["#92394B"],
          hAxis: {title: 'Sprints',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0},
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));
        chart.draw(data, options);
      }

  //GRAFICO 4-1//      
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
         ['Sprint', 'S',   '%'],
         ['S1',    165,    614.6],
         ['S2',    135,    682],
         ['S3',    157,    623],
         ['S4',    139,    609.4],
         ['S5js',  136,    569.6],
         ['S6js',  157,    623],
         ['S7js',  139,    609.4],
         ['S8js',  136,    569.6],
         ['S5ux',  139,    609.4],
         ['S6ux',  136,    569.6],
         ['S7ux',  157,    623],
         ['S8ux',  139,    609.4]
      ]);

      var options = {
        colors: ["#352640", "#ffc107"],
        vAxis: {title: 'Cups'},
        hAxis: {title: 'Month'},
        seriesType: 'bars',
        series: {1: {type: 'line'}}
      };

      var chart = new google.visualization.ComboChart(document.getElementById('chart_div3'));
      chart.draw(data, options);
    }    

    //GRAFICO 4-2// 
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart4);
      function drawChart4() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Sleep',    7]
        ]);

        var options = {
          pieHole: 0.3,
          colors: ["#352640", "#92394B"]
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }


    //GRAFICO 5-1// 
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart5);
      function drawChart5() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Sleep',    7]
        ]);

        var options = {  
          pieHole: 0.3,
          colors: ["#352640", "#92394B"]
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart2'));
        chart.draw(data, options);
      }

    //GRAFICO 5-2//      
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization2);

      function drawVisualization2() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
         ['Sprint', 'S','%'],
         ['S1',  165,      614.6],
         ['S2',  135,      682],
         ['S3',  157,      623],
         ['S4',  139,      609.4],
         ['S5js',  136,      569.6],
         ['S6js',  157,      623],
         ['S7js',  139,      609.4],
         ['S8js',  136,      569.6],
         ['S5ux',  139,      609.4],
         ['S6ux',  136,      569.6],
         ['S7ux',  157,      623],
         ['S8ux',  139,      609.4]
      ]);

      var options = {
        colors: ["#352640", "#ffc107"],
        vAxis: {title: 'Cups'},
        hAxis: {title: 'Month'},
        seriesType: 'bars',
        series: {1: {type: 'line'}}
      };

      var chart = new google.visualization.ComboChart(document.getElementById('chart_div4'));
      chart.draw(data, options);
    }    

  //GRAFICO 6//  
     google.charts.load('current', {'packages':['corechart']});
     google.charts.setOnLoadCallback(drawChart6);

      function drawChart6() {
        var data = google.visualization.arrayToDataTable([
          ['Sprint', '%'],
          ['Sprint 1',  1000],
          ['Sprint 2',  1170],
          ['Sprint 3',  1170],
        ]);

        var options = {
          colors: ["#92394B"],
          hAxis: {title: 'Sprints',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div5'));
        chart.draw(data, options);
      }

    //GRAFICO 7//  
     google.charts.load('current', {'packages':['corechart']});
     google.charts.setOnLoadCallback(drawChart7);

      function drawChart7() {
        var data = google.visualization.arrayToDataTable([
          ['Sprint', '%'],
          ['Sprint 1',  1000],
          ['Sprint 2',  1170],
          ['Sprint 3',  1170],
        ]);

        var options = {
          colors: ["#92394B"],
          hAxis: {title: 'Sprints',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div6'));
        chart.draw(data, options);
      }

    //GRAFICO 8//  
     google.charts.load('current', {'packages':['corechart']});
     google.charts.setOnLoadCallback(drawChart8);

      function drawChart8() {
        var data = google.visualization.arrayToDataTable([
          ['Sprint', '%'],
          ['Sprint 1',  1000],
          ['Sprint 2',  1170],
          ['Sprint 3',  1170],
        ]);

        var options = {
          colors: ["#92394B"],
          hAxis: {title: 'Sprints',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div7'));
        chart.draw(data, options);
      }

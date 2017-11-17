/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

  //GRAFICO1
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Sprint", "Total Alumnas", { role: "style" } ],
        ["Sprint 1", 110, "#b87333"],
        ["Sprint 2", 80, "silver"],
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "ENROLLEMENT",
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
          title: 'ARCHIVEMENT',
          hAxis: {title: 'Sprints',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }


  //GRAFICO 3  
     google.charts.load('current', {'packages':['corechart']});
     google.charts.setOnLoadCallback(drawChart3);

      function drawChart3() {
        var data = google.visualization.arrayToDataTable([
          ['Sprint', '%'],
          ['Sprint 1',  1000],
          ['Sprint 2',  1170],
          ['Sprint 3',  1170],
        ]);

        var options = {
          title: 'NET PROMOTER SCORE',
          hAxis: {title: 'Sprints',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));
        chart.draw(data, options);
      }

  //GRAFICO 4      
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
         ['Sprint', 'Bolivia','Average'],
         ['S1',  165,      614.6],
         ['S2',  135,      682],
         ['S3',  157,      623],
         ['S4',  139,      609.4],
         ['S5JS',  136,      569.6],
         ['S6JS',  157,      623],
         ['S7JS',  139,      609.4],
         ['S8JS',  136,      569.6],
         ['S5UX',  139,      609.4],
         ['S6UX',  136,      569.6],
         ['S7UX',  157,      623],
         ['S8UX',  139,      609.4]
      ]);

      var options = {
        title : 'Monthly Coffee Production by Country',
        vAxis: {title: 'Cups'},
        hAxis: {title: 'Month'},
        seriesType: 'bars',
        series: {1: {type: 'line'}}
      };

      var chart = new google.visualization.ComboChart(document.getElementById('chart_div3'));
      chart.draw(data, options);
    }    
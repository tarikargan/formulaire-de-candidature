// global variable 
var allCandidates=[];

// cnss 
var cnss =[];


// lang 
var php =['php'];
var html =['html'];
var css =['css'];
var js =['js'];
var angular =['angular'];
var bootstrap =['bootstrap'];
var uml =['uml'];
var jquery =['jquery'];
var ajax =['ajax'];
var typescript =['typescript'];
var react =['react'];
var symphony =['symphony'];
var mysql =['mysql'];
var nodejs =['nodejs'];
var expressjs =['expressjs'];

var anciennete =[];
var front_back_full =[];
var nombre_prj =[];
var salaire =[];

  $.ajax({
    url:'action.php',
    method:'POST',
    data:{action:"fetch"},
    dataType:'JSON',
    success:function(data){
      // set data in global variable as an array 
        allCandidates = data; 
        calcData();
    }
  })
  
   function calcData(){
// cnss
    cnss.push(
        ['oui',allCandidates.filter(el => el.cnss == 'oui').length],
        ['non',allCandidates.filter(el => el.cnss == 'non').length]
    );
       
// lang

// 
    for(x=1; x <= 5; x++){ if (x === 4) {continue;}  php.push(allCandidates.filter(el => el.php == x).length);}
// 
    for(x=1; x <= 5; x++){ if (x === 4) {continue;} html.push(allCandidates.filter(el => el.html == x).length);}
// 
    for(x=1; x <= 5; x++){ if (x === 4) {continue;} css.push(allCandidates.filter(el => el.css == x).length);}
// 
    for(x=1; x <= 5; x++){ if (x === 4) {continue;}  js.push(allCandidates.filter(el => el.js == x).length);}
// 
    for(x=1; x <= 5; x++){ if (x === 4) {continue;} angular.push(allCandidates.filter(el => el.angular == x).length);}
// 
    for(x=1; x <= 5; x++){ if (x === 4) {continue;} bootstrap.push(allCandidates.filter(el => el.bootstrap == x).length);}
// 
    for(x=1; x <= 5; x++){ if (x === 4) {continue;} uml.push(allCandidates.filter(el => el.uml == x).length);}
// 
    for(x=1; x <= 5; x++){ if (x === 4) {continue;}  react.push(allCandidates.filter(el => el.react == x).length);}
// 
    for(x=1; x <= 5; x++){ if (x === 4) {continue;}  jquery.push(allCandidates.filter(el => el.jquery == x).length);}
// 
    for(x=1; x <= 5; x++){ if (x === 4) {continue;}  ajax.push(allCandidates.filter(el => el.ajax == x).length);}
// 
    for(x=1; x <= 5; x++){ if (x === 4) {continue;}  typescript.push(allCandidates.filter(el => el.typescript == x).length);}
// 
    for(x=1; x <= 5; x++){ if (x === 4) {continue;}  symphony.push(allCandidates.filter(el => el.symphony == x).length);}
// 
    for(x=1; x <= 5; x++){ if (x === 4) {continue;}  mysql.push(allCandidates.filter(el => el.mysql == x).length);}
// 
    for(x=1; x <= 5; x++){ if (x === 4) {continue;}  nodejs.push(allCandidates.filter(el => el.nodejs == x).length);}
// 
    for(x=1; x <= 5; x++){ if (x === 4) {continue;}  expressjs.push(allCandidates.filter(el => el.expressjs == x).length);}
// 

// anciennete
    anciennete.push(
        ['Débutant',allCandidates.filter(el => el.anciennete == 'Débutant').length],
        ['Junior',allCandidates.filter(el => el.anciennete == 'Junior').length],
        ['Senior',allCandidates.filter(el => el.anciennete == 'Senior').length],
        ['Expert',allCandidates.filter(el => el.anciennete == 'Expert').length]
    );

// anciennete
    front_back_full.push(
        ['front end',allCandidates.filter(el => el.front_back_full == 'front end').length],
        ['back end',allCandidates.filter(el => el.front_back_full == 'back end').length],
        ['full stack',allCandidates.filter(el => el.front_back_full == 'full stack').length]
    );
// nombre de projets
    nombre_prj.push(
        ['moins de 3',allCandidates.filter(el => el.nombre_prj == 'moins de 3').length],
        ['Plus de 3',allCandidates.filter(el => el.nombre_prj == 'Plus de 3').length],
        ['Plus de 6',allCandidates.filter(el => el.nombre_prj == 'Plus de 6').length]
    );
// salaire
    salaire.push(
        ['4 000 DH - 6 000 DH',allCandidates.filter(el => el.salaire == '4 000 - 6 000').length],
        ['6 000 DH - 8 000 DH',allCandidates.filter(el => el.salaire == '6 000 - 8 000').length],
        ['8 000 DH - 10 000 DH',allCandidates.filter(el => el.salaire == '8 000 - 10 000').length],
        ['10 000 DH - 12 000 DH',allCandidates.filter(el => el.salaire == '10 000 - 12 000').length]
    );
    drawCnss();
    drawLangChart();
    drawAnciennete();
    drawFront_back_full();
    drawPrNumber();
    drawSalary();

   }





// cnss  charts

function drawCnss(){
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ...cnss  // clone cnss array 
      ]);

      var options = {
        title: '',
        is3D: true,
      };

      var chart = new google.visualization.PieChart(document.getElementById('cnss-area'));
      chart.draw(data, options);
    }
}

// lang charts
function drawLangChart(){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawVisualization);
    function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
        ['lang', 'Débutant (1/5)', 'Junior (2/5)', 'Senior (3/5)', 'Expert (5/5)'],
        php, html, css, js, angular, bootstrap, uml, jquery , ajax ,typescript , react, symphony, mysql, nodejs, expressjs
        
        ]);

        var options = {
        seriesType: 'bars',
        legend: { position: 'top', maxLines: 3 },
        series: {4: {type: 'line'}},
        bar:{groupWidth:60},
        width:1600,

        };

        var chart = new google.visualization.ComboChart(document.getElementById('lang-area'));
        chart.draw(data, options);
    }

}
//   


// anciennete charts


function drawAnciennete(){
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ...anciennete //clone anciennete array

  ]);

  var options = {
    title: '',
    is3D: true,
  };

  var chart = new google.visualization.PieChart(document.getElementById('profile-area'));
  chart.draw(data, options);
}

}



// 

// front_back_full charts

function drawFront_back_full(){
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ...front_back_full

  ]);

  var options = {
    title: '',
    is3D: true,
  };

  var chart = new google.visualization.PieChart(document.getElementById('dev-tp'));
  chart.draw(data, options);
}
}



// prj number charts

function drawPrNumber(){
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'pr number'],
          ...nombre_prj
        ]);

        var options = {
          title: ''
        };

        var chart = new google.visualization.PieChart(document.getElementById('pr_number'));

        chart.draw(data, options);
      }
}


// salary charts

function drawSalary(){
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ...salaire
        ]);

        var options = {
          title: ''
        };

        var chart = new google.visualization.PieChart(document.getElementById('salary'));

        chart.draw(data, options);
      }
}

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Category', 'Number of Photos'],
        ['Students', 10.7],
        ['Researchers', 25],
        ['Foreign Artists', 17.9],
        ['Domestic Artists', 7.1],
        ['Etc.', 39.3]
    ]);

    var options = {
        title: 'What is the percentage of visits to the site?',
        pieHole: 0.4,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

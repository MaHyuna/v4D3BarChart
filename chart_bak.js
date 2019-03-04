// data
var data = [
    { 'year': '2015', 'data': 1, 'color':'pink' },
    { 'year': '2016', 'data': 4, 'color':'skyblue' },
    { 'year': '2017', 'data': 15, 'color':'green' },
    { 'year': '2018', 'data': 20, 'color':'orange' },
    { 'year': '2019', 'data': 30, 'color':'red' },
]

// svg size
var chartWidth = document.getElementById('chart').getBoundingClientRect().width;
var chartHeight = document.getElementById('chart').getBoundingClientRect().height;

// create SVG
var svg = d3.select("#chart")
                .append("svg")
                    .attr('class','svg')
                    .attr('width', chartWidth)
                    .attr('height', chartHeight)
;

// bar Chart Drawing
barGap = (160/data.length);
var barDrawWidth = chartWidth - barGap;
var barDrawHeight = chartHeight - (barGap*4);

var barDataAlign = ((barDrawWidth / data.length)-barGap) / 2;

svg.append('g').attr('class','foreground')
.selectAll("rect")
    .data(data)
    .enter().append("rect")
        .attr("class", "bar")
        .attr('width', function(d, i){
            return (barDrawWidth / data.length)-barGap
        })
        .attr("height", function(d, i) {
            console.log( "data " + i + " : " + d.data*data.length )
                return d.data * data.length
            })
        .attr("x", function(d, i) {
                return (((barDrawWidth / data.length)) * i)
            })
        .attr("y", function(d, i) {
                return 250-d.data * data.length
            })
        .style('fill',function(d) {
                return d.color
            })
;

svg.append('g')
    .selectAll('text')
    .data(data)
    .enter()
    .append('text')
        .attr("class", "bar-data")
        .attr("x", function(d, i) {
            return ((barDrawWidth / data.length)) * i + barDataAlign
        })
        .attr("y", function(d, i) {
            return (250)-d.data * data.length
        })
        .text(function(d){return d.data})
        .style('text-anchor','middle')
;


svg.append('g')
    .selectAll('text')
    .data(data)
    .enter()
    .append('text')
        .attr("class", "bar-year")
        .attr("x", function(d, i) {
            return ((barDrawWidth / data.length)) * i + barDataAlign
        })
        .attr("y", function(d, i) {
            return 270
        })
        .text(function(d){return d.year})
        .style('text-anchor','middle')
;




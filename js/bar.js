// ********************************************************
// NAV BAR
// 
$(function(){

    // Returns width of browser viewport
    var browser = $(window).width();
    // Returns width of HTML document
    var document = $(document).width();

    $('.nav .toggle-nav').click(function(e){
        $('.nav .nav-mobile').addClass('style-mobile').slideToggle('slow');
        e.preventDefault();
    });

});


// json data

$(document).ready(function() {

    var options = {
        chart: {
            renderTo: 'container1',
            type: 'spline'
        },
        title: {
                    text: 'Json file'
                },
        series: [{}],
        navigation: {
            buttonOptions: {
                enabled: true
            }
        }

    };

    $.getJSON('data.json', function(data) {
        options.series[0].data = data;
        var chart = new Highcharts.Chart(options);
    });

});


// csv data

$(document).ready(function() {
            
            var options = {
                chart: {
                    renderTo: 'container',
            		type: 'bar'
                },
                title: {
                    text: 'Fruit Consumption'
                },
                xAxis: {
                    text: 'Cities'
                },
                yAxis: {
                    title: {
                        // text: 'Units'
                        text: 'Units'
                    }
                },
                series: [],
                navigation: {
                    buttonOptions: {
                        enabled: true
                    }
                }
            };
        
            $.get('data.csv', function(data) {
                // Split the lines
                var lines = data.split('\n');
                $.each(lines, function(lineNo, line) {
                    var items = line.split(',');
                    
                    // header line containes categories
                    if (lineNo == 0) {
                        $.each(items, function(itemNo, item) {
                            if (itemNo > 0) options.xAxis.categories.push(item);
                        });
                    }
                    
                    // the rest of the lines contain data with their name in the first position
                    else {
                        var series = { 
                            data: []
                        };
                        $.each(items, function(itemNo, item) {
                            if (itemNo == 0) {
                                series.name = item;
                            } else {
                                series.data.push(parseFloat(item));
                            }
                        });
                        
                        options.series.push(series);
                    }
                    
                });
                
                var chart = new Highcharts.Chart(options);
            });
            
});


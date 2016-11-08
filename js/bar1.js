// button export
$(function () {
    var chart = new Highcharts.Chart({
        
        chart: {
            renderTo: 'container', 
            zoomType: 'x'
        },
        
        credits: {
            enabled: false
        },
        subtitle: {
            text: 'Click and drag in the plot area to zoom in'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]        
        }],
        
        navigation: {
            buttonOptions: {
                enabled: false
            }
        }    
    });
    
    // the button handler    
    $('#buttonExport').click(function() {
        var e = document.getElementById("ExportOption");
        var ExportAs = e.options[e.selectedIndex].value;   
        
        if(ExportAs == 'PNG')
        {
            chart.exportChart({type: 'image/png', filename: 'my-png'},
             {subtitle: {text:''}});
        }
        if(ExportAs == 'JPEG')
        {
            chart.exportChart({type: 'image/jpeg', filename: 'my-jpg'}, 
                {subtitle: {text:''}});
        }
        if(ExportAs == 'PDF')
        {
            chart.exportChart({type: 'application/pdf', filename: 'my-pdf'},
             {subtitle: {text:''}});
        }
        if(ExportAs == 'SVG')
        {
            chart.exportChart({type: 'image/svg+xml', filename: 'my-svg'},
             {subtitle: {text:''}});
        }
    }); 

    $('#buttonPrint').click(function() {
        chart.setTitle(null, { text: ' ' });
        chart.print();
        chart.setTitle(null, { text: 'Click and drag in the plot area to zoom in' });
    });
});




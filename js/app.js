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


// ------------------------------
// SMOOTH SCROLL
// ------------------------------
// function scrollNav() {
//     $('.nav a').click(function () {
//         //Toggle Class
//         $(".active").removeClass("active");
//         $(this).closest('li').addClass("active");
//         var theClass = $(this).attr("class");
//         $('.' + theClass).parent('li').addClass('active');
//         //Animate
//         $('html, body').stop().animate({
//             scrollTop: $($(this).attr('href')).offset().top - 160
//         }, 400);
//         return false;
//     });
//     $('.scrollTop a').scrollTop();
// }
// scrollNav();
// ------------------------------
// SMOOTH SCROLL END
// ------------------------------
// 
// 
// CHART JS CODE
// 



// $


//     }

//     function requestTempCsv(){
//         .ajax({
//         type: "POST",
//         url:"data.json",
//         dataType: "text",
//         success: function(data){
//             console.log(data);
//         }
// });
//             }




// const CHART = document.getElementById("lineChart");
// // console.log(CHART);



// Chart.defaults.global.animation.onComplete = () => {
//     console.log('finished the animation');
// };

// let lineChart = new Chart(CHART, {
//     type: 'line',
//     data: {
//         labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
//         datasets: [
//             {
//                 label: "Rain fall",
//                 fill: true,
//                 lineTension: 0.1,
//                 backgroundColor: "rgba(75,192,192,0.4)",
//                 borderColor: "rgba(75,192,192,1)",
//                 borderCapStyle: 'butt',
//                 borderDash: [],
//                 borderDashOffset: 0.0,
//                 borderJoinStyle: 'miter',
//                 pointBorderColor: "rgba(75,192,192,1)",
//                 pointBackgroundColor: "#fff",
//                 pointBorderWidth: 1,
//                 pointHoverRadius: 5,
//                 pointHoverBackgroundColor: "rgba(75,192,192,1)",
//                 pointHoverBorderColor: "rgba(220,220,220,1)",
//                 pointHoverBorderWidth: 2,
//                 pointRadius: 1,
//                 pointHitRadius: 10,
//                 data: [65, 59, 80, 81, 56, 55, 40, 81],
//                 spanGaps: false,
//             }
//         ]
//         },
//         options: {
//             // showLines: false,
//             scales: {
//                 yAxes:[{
//                     ticks: {

//                         beginAtZero: true,
//                     },

//                 }]
//             }

//         }

// });


// // bar chart


// const BAR = document.getElementById("barChart");
// // console.log(CHART);


// // Chart.defaults.global.animation.onComplete = () => {
    
// // };

// let barChart = new Chart(BAR, {
//     type: 'bar',
//     data: 'data.json',
//         options: {
//             showLines: false,
//             scales: {
//                 xAxes:[{
//                     ticks: {

//                         beginAtZero: false,
//                     },

//                 }]
//             },
//                 yAxes:[{
//                     ticks: {

//                         beginAtZero: true,
//                     },

//                 }]
//             }


//     });

$(function () {

    // Create the chart
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Chart drilldown'
        },
        xAxis: {
            type: 'category'
        },

        legend: {
            enabled: false
        },

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },

        series: [{
            name: 'Things',
            colorByPoint: true,
            data: [{
                name: 'Animals',
                y: 5,
                drilldown: 'animals'
            }, {
                name: 'Fruits',
                y: 2,
                drilldown: 'fruits'
            }, {
                name: 'Cars',
                y: 4,
                drilldown: 'cars'
            }]
        }],
        drilldown: {
            series: [{
                id: 'animals',
                data: [
                    ['Cats', 4],
                    ['Dogs', 2],
                    ['Cows', 1],
                    ['Sheep', 2],
                    ['Pigs', 1]
                ]
            }, {
                id: 'fruits',
                data: [
                    ['Apples', 4],
                    ['Oranges', 2]
                ]
            }, {
                id: 'cars',
                data: [
                    ['Toyota', 4],
                    ['Opel', 2],
                    ['Volkswagen', 2]
                ]
            }]
        }
    });
});




    







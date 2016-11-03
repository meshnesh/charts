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

const CHART = document.getElementById("lineChart");
// console.log(CHART);


Chart.defaults.global.animation.onComplete = () => {
    console.log('finished the animation');
};

let lineChart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
        datasets: [
            {
                label: "Rain fall",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40, 81],
                spanGaps: false,
            }
        ]
        },
        options: {
            // showLines: false,
            scales: {
                yAxes:[{
                    ticks: {

                        beginAtZero: true,
                    },

                }]
            }

        }

});





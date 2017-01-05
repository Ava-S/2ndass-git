$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
    var docwidth = $(document).width();
    

    //Make bhoechie tab menu look nice
    if (docwidth >= 768) {
        $('.center-title').addClass('bhoechie-tab-container').addClass('title-border');
        $('.categories').addClass('bhoechie-tab-container').addClass('bhoechie-border');
    } else {
        console.log("ik ben kleiner dan 768");
        $('.center-title').removeClass('bhoechie-tab-container').removeClass('title-border');
        $('.categories').removeClass('bhoechie-tab-container').removeClass('bhoechie-border');
    }

    //beautify calculations
    if (docwidth >= 600) {
        $('.col-xs-678').addClass('col-xs-9').removeClass('col-xs-6').removeClass('col-xs-7');
        $('.col-xs-234').addClass('col-xs-2').removeClass('col-xs-4').removeClass('col-xs-3');
        $('.col-xs-1-2').addClass('col-xs-1').removeClass('col-xs-2');
    } else if (docwidth >= 400) {
        $('.col-xs-678').addClass('col-xs-7').removeClass('col-xs-6').removeClass('col-xs-9');
        $('.col-xs-234').addClass('col-xs-3').removeClass('col-xs-4').removeClass('col-xs-2');
        $('.col-xs-1-2').addClass('col-xs-2').removeClass('col-xs-1');
    } else {
        $('.col-xs-678').addClass('col-xs-6').removeClass('col-xs-7').removeClass('col-xs-9');
        $('.col-xs-234').addClass('col-xs-4').removeClass('col-xs-3').removeClass('col-xs-2');
        $('.col-xs-1-2').addClass('col-xs-2').removeClass('col-xs-1');
    }
    
    var url = window.location.href;     // Returns full URL
    console.log("url: " + url);
    if (url.includes('/course/')) {
       $('.search-bar').addClass('hidden');
    }     

    $("div.list-group>a").click(function (e) {
        e.preventDefault();
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
        $("div.divcategories>div.list-group>a").removeClass("active");
        $("div.divcategories>div.list-group>a").eq(index).addClass("active");
        $("div.divcategories>div.list-group>a").removeClass("active");
        $("div.divcategories>div.list-group>a").eq(index).addClass("active");
        $("div.tab-menu>div.list-group>a").removeClass("active");
        $("div.tab-menu>div.list-group>a").eq(index).addClass("active");
    });

    //    $('.pull-down').each(function () {
    //        var $this = $(this);
    //        $this.css('margin-top', $this.parent().height() - $this.height())
    //    });
    $(window).resize(function () {
        docwidth = $(document).width();
        if (docwidth >= 768) {
            $('.center-title').addClass('bhoechie-tab-container').addClass('title-border');
            $('.categories').addClass('bhoechie-tab-container').addClass('bhoechie-border');
        } else {
            console.log("ik ben kleiner dan 768");
            $('.center-title').removeClass('bhoechie-tab-container').removeClass('title-border');
            $('.categories').removeClass('bhoechie-tab-container').removeClass('bhoechie-border');
        }

        //beautify calculations
        if (docwidth >= 600) {
            $('.col-xs-678').addClass('col-xs-9').removeClass('col-xs-6').removeClass('col-xs-7');
            $('.col-xs-234').addClass('col-xs-2').removeClass('col-xs-4').removeClass('col-xs-3');
            $('.col-xs-1-2').addClass('col-xs-1').removeClass('col-xs-2');
        } else if (docwidth >= 400) {
            $('.col-xs-678').addClass('col-xs-7').removeClass('col-xs-6').removeClass('col-xs-9');
            $('.col-xs-234').addClass('col-xs-3').removeClass('col-xs-4').removeClass('col-xs-2');
            $('.col-xs-1-2').addClass('col-xs-2').removeClass('col-xs-1');
        } else {
            $('.col-xs-678').addClass('col-xs-6').removeClass('col-xs-7').removeClass('col-xs-9');
            $('.col-xs-234').addClass('col-xs-4').removeClass('col-xs-3').removeClass('col-xs-2');
            $('.col-xs-1-2').addClass('col-xs-2').removeClass('col-xs-1');
        }
    });


    $('input').keyup(function () {
        var inputs = [];
        var weights = [];
        var counter = 0;
        var result = 0;
        while (true){
            var weight = $("#weight"+counter);
            var input = $("#input"+counter);
            if (weight.length == 0){
                break;
            } else {
                weights[counter] = weight.text()
                weights[counter] = weights[counter]/100;
                inputs[counter] = input.val();
                if (inputs[counter] > 10) {
                    inputs[counter] = 10.0;
                    $("#input"+counter).val(inputs[counter]);
                } else if (inputs[counter] < 0) {
                    inputs[counter] = 0.0;
                    $("#input"+counter).val(inputs[counter]);
                }
            }
            counter++;
        }
//        //check input 1
//        
//
//        //check input2
//        if (input2 > 10) {
//            input2 = 10.0;
//            $("#input2").val(input2);
//        } else if (input2 < 0) {
//            input2 = 0.0;
//            $("#input2").val(input2);
//        }
//
//        weight1 = weight1 / 100;
//        weight2 = weight2 / 100;
        for(var i = 0; i<weights.length; i++){
            result += weights[i]*inputs[i];
            console.log("weight = "+ weights[i]);
        }
//        var result = weight1 * input1 + weight2 * input2;
        console.log(result);
        console.log(Math.ceil(result));
        $("#result").text(Math.ceil(result * 10) / 10);
    });

    $('.caretfilter').on("click", function () {
        console.log("je hebt geklikt");
        var reviewparent = $(this).parents(".review-title");
        var reviewgrparent = $(this).parents(".review-group");
        console.log("reviewparent = " + JSON.stringify(reviewparent));
        reviewgrparent.find(".review-content").toggleClass("hidden");
        reviewparent.toggleClass("noborder");
        $(this).toggleClass("fa-caret-down");
        $(this).toggleClass("fa-caret-up");


    });
    //    document.getElementById('answer').value = parseFloat(permin) * parseFloat(minutes);
    //    document.form1.submit();

});

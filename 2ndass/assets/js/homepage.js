$(document).ready(function () {
    var docwidth = $(document).width();
    console.log(docwidth);
    if (docwidth >= 500) {
        $(".course-box").addClass("col-xs-6").removeClass("col-xs-12");
    } else {
        $(".course-box").addClass("col-xs-12").removeClass("col-xs-6");
    }

    $(window).resize(function () {
        docwidth = $(document).width();
        console.log(docwidth);
        if (docwidth >= 500) {
            $(".course-box").addClass("col-xs-6").removeClass("col-xs-12");
        } else {
            $(".course-box").addClass("col-xs-12").removeClass("col-xs-6");
        }
    });

    var urlcourse = "http://localhost:1337/course";
    $.get(urlcourse)
        .done(function (data) {
            for (var i = 0; i < data.length; i++) {

                var course = data[i];

                var clone = $(".course-box:first").clone();
                var courseurl = "http://localhost:1337/course/" + course.code;
                console.log(courseurl);

                clone.toggleClass("example");
                clone.find("a").attr("href", courseurl);
                clone.find(".style-box").addClass(course.color);
                clone.find(".title").text(course.name);
                clone.find(".code").text(course.code);
                clone.find(".rating").text(course.rating);
                for (var j = 0; j < course['periods'].length; j++) {

                    console.log("---------------");
                    console.log(course.name);
                    console.log("j: " + j + ", i: " + i);
                    var period = course['periods'][j];
                    console.log(course.name + ": " + period.quartile + period.timeslot);

                    if (j == 0) {
                        clone.find(".quartile").text(period.quartile);
                        clone.find(".timeslot").text(period.timeslot);
                    } else {
                        var periodclone = clone.find(".period:first").clone();
                        periodclone.find(".quartile").text(period.quartile);
                        periodclone.find(".timeslot").text(period.timeslot);
                        periodclone.appendTo(clone.find(".periodlist"));
                    }
                }

                clone.appendTo($(".courselist"));
            }
        });
});

$("#search-criteria").on("keyup", function() {
    var search = $(this).val().toLowerCase().trim();
    console.log("search: " + search);
    $(".course-box").each(function() {
        var code = $(this).find('.code').text().toLowerCase();
        var name = $(this).find('.title').text().toLowerCase();
        if (!code.includes(search) && !name.includes(search)){
            $(this).addClass('hidden');
        } else {
            $(this).removeClass('hidden');
        }
    });
});
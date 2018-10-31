jQuery("document").ready(function(){
    jQuery("#id_like").on('click', function(){
        console.log(123)
        var href = document.getElementById('id_like').name;
        jQuery.ajax({
            type: "GET",
            url: "/AllVideos/AddLike/",
            data: {'addlike': href,},
            dataType: "text",
            catch: false,
            success: function (data){
                jQuery("#count_likes").html(data);
            }
        });
    });
});
/**
 * Created by wk on 2015/5/31.
 */
$(document).ready(function(){
    $("body").load("box1.htm",function(url,status,c) {
        console.log(url);
        //console.log(status);
        if(status=="error"){
            $("body").text("Load Failed！");
        }
    })
    });
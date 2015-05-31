/**
 * Created by wk on 2015/5/31.
 */
$(document).ready(function(){
    $("#btn").click(function(){
        //$.ajax({
        //    url: "http://localhost/ajaxService/Service.php",
        //    data:{name:$("#name").val()},
        //    type: 'GET',
        //    dataType: 'json',
        //    contentType: 'application/json; charset=UTF-8',
        //    success: function (data) {
        //        alert("Success!");
        //        $("#result").text(data);
        //    }
        //});
        $("#result").text("请求数据中，请稍后...");
        $.get("Service1.php",{name:$("#name").val()},function(data){
            $("#result").text(data);
        }).error(function(){
            $("#result").text("通讯有问题");
        })
    });

});
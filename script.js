var btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    $.ajax({
        method: "GET",
        url: "lista.php",
        responseType:"json"
        // data:{name:"Lucas", location:"Recife"}
        
    }).done(function (msg) {

        var list = document.querySelector(".list");
        var returnList = [];
        msg = JSON.parse(msg);

        console.log(msg);

        for (var i = 0; i < msg.length; i++) {

            returnList += "<li>" + msg[i] + "</li>";

        }

        list.innerHTML = returnList;

    });

});
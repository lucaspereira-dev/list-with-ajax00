function getAjax() {
    var ajax = new XMLHttpRequest();

    ajax.open("GET", "lista.php");

    ajax.responseType = "json";

    ajax.send();

    ajax.addEventListener("readystatechange", function () {

        if (ajax.readyState === 4 && ajax.status == 200) {

            var ajaxResponse = ajax.response;
            var list = document.querySelector(".list");
            var returnList = [];

            for (var i = 0; i < ajaxResponse.length; i++) {

                returnList += "<li>" + ajaxResponse[i] + "</li>";

            }

            list.innerHTML = returnList;

        }

    });
}

var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    getAjax();
});
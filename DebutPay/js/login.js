var customerData = [
    {
        "email": "anhminh7799@gmail.com",
        "username": "anhminh7799",
        "password": "123456"
    },
    {
        "email": "duoc1706@gmail.com",
        "username": "duoc1706",
        "password": "duoc1706"
    },
    {
        "email": "tien4567@gmail.com",
        "username": "tien4567",
        "password": "tien4567"
    }
]



$(document).ready(function () {
    var userName = $("#txtUsername").val();
    var passWord;
    $("#txtPassword").on("change input focusout", function () {
        passWord = $(this).val();
    });

    $("#btnLogin").click(function () {
        location.href = "homepage.html";
    })

})
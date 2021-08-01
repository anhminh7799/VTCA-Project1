var customerData = [
    {
        "id": "1",
        "name": "Nguyễn Lê Anh Minh",
        "userName": "anhminh7799",
        "email": "anhminh7799@gmail.com",
        "accountID": "102006880395",
        "amountBalance": "12345"
    },
    {
        "id": "2",
        "name": "Nguyễn Trung Được",
        "userName": "duoc1706",
        "email": "duoc1706@gmail.com",
        "accountID": "102587960385",
        "amountBalance": "4736010"
    },
    {
        "id": "3",
        "name": "Nguyễn Trọng Tiến",
        "userName": "tien4567",
        "email": "tien4567@gmail.com",
        "accountID": "102587960375",
        "amountBalance": "0"
    }
]


$(document).ready(function () {

    //Set up for user data
    var currentUser;
    customerData.forEach(element => {
        if (element.id === "1") {
            currentUser = element
        }
    });

    //list of var
    //account amount of a customer
    $('#accountID').text(currentUser.accountID);
    $("#accountAmount").text(currentUser.amountBalance + " VND");

    //get value from User input
    var amountTransfer = 0;
    $("#txtAmountTransfer").change(function () {
        amountTransfer = $("#txtAmountTransfer").val();
        if ($("#txtAmountTransfer").val() === "" || $("#txtAmountTransfer").val() === null) {
            $("#accountWithdrawal").text("0 VND");
        }
        else if (amountTransfer < 0) {
            $("#accountWithdrawal").text("Không hợp lệ");
        }
        else {
            $("#accountWithdrawal").text(amountTransfer + " VND");
        }
    });

    //Logic for Account Remain
    var accountRemain;
    $("#txtAmountTransfer").on("change input", function () {
        if (amountTransfer !== "" && amountTransfer > 0) {
            accountRemain = currentUser.amountBalance - amountTransfer;
            $("#accountRemain").text(accountRemain + " VND");
        }
        else if (amountTransfer < 0) {
            $("#accountRemain").text(currentUser.amountBalance + " VND");
        }
        else if (amountTransfer === "" || amountTransfer === null) {
            $("#accountRemain").text(currentUser.amountBalance + " VND");
        }
        else {
            $("#accountRemain").text(currentUser.amountBalance);
        }
    });

    //Get account ID
    var accountID;
    $("#txtAccountId").on("change input", function () {
        var found = 0;
        accountID = $("#txtAccountId").val();
        customerData.forEach(element => {
            if (accountID === element.accountID) {
                $("#txtUsername").val(element.name);
                found++;
            }
            if (found == 0) {
                $("#txtUsername").val("Không tìm thấy tài khoản hợp lệ");
            }
        });
    });

    //Transaction Action
    $("#transactionClose").click(function () {
        $("#txtAccountId").val("");
        $("#txtUsername").val("");
        $("#txtAmountTransfer").val("");
        $("#accountWithdrawal").text("0 VND");
        $("#accountRemain").text("0 VND");
        accountRemain = 0;
        amountTransfer = 0;
    });


    //Confirm Action
    $("#transactionConfirm").click(function () {
        console.log(amountTransfer + " " + amountTransfer + " " + currentUser.amountBalance);
        if (amountTransfer > 0) {
            if (accountRemain >= 0) {
                $("#txtAccountId").attr("disabled", true);
                $("#txtAmountTransfer").attr("disabled", true);
                alert("Chuyển tiền thành công");
                $("#txtAccountId").val("");
                $("#txtUsername").val("");
                $("#txtAmountTransfer").val("");
                $("#accountWithdrawal").text("0 VND");
                $("#accountRemain").text("0 VND");
                accountRemain = 0;
                amountTransfer = 0;
                location.reload();
            } else {
                alert("Chuyển tiền thất bại");
            }
        } else {
            alert("Chuyển tiền thất bại");
        }
    })
});
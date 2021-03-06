﻿var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();
connection.on("ReceiveMessage", function (message) {
    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    //var encodedMsg = user + " says " + msg;
    //var li = document.createElement("li");
    //li.textContent = encodedMsg;
    //document.getElementById("messagesList").appendChild(li);
   
    $("#imgTrophy1").addClass("original");
    $("#imgTrophy2").addClass("original");
    $("#imgTrophy3").removeClass("original");
    $("#imgTrophy4").removeClass("grayscale");
});

connection.start().catch(function (err) {
    return console.error(err.toString());
});

$(document).ready(function () {
    document.getElementById("btnDueDate").addEventListener("click", function (event) {
        
        connection.invoke("SendMessage", "DueDate").catch(function (err) {
            return console.error(err.toString());
        });
        event.preventDefault();
    });
});
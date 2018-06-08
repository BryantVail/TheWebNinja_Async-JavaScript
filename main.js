//main.js
//#2_intro
/*
    Asynchronous Javascript & XML

    //READY STATES 
    0   -   not initialized
    1   -   set up
    2   -   sent
    3   -   inProcess
    4   -   completed
*/

window.onload = function(){
    var http = new XMLHttpRequest();

    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200){
            console.log(
                JSON.parse(http.response)
            );
        }
        //console.log(http);
    };//end onreadystatechange
    http.open("GET", "data/tweets.json", true);
    http.send();

    //test async
    //console.log("test");


    //jquery method
    $.get("data/tweets.json"/*1st retrieved*/, function(data)/*ran after 1st param recieved*/{
        console.log(
            data
        );
    });
    console.log(
        "test"
    );
};









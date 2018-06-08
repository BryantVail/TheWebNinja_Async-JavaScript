//main.js
//#4_promises
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

    $.get("data/tweets.json")
        .then(function(tweets){
            console.log(tweets);
            return $.get("data/friends.json");
        }).then(function(friends){
            console.log(friends);
            return $.get("data/videos.json");
        }).then((videos)=>{
            console.log(videos);
        });

    // function get(url){
    //     return new Promise(function(resolve, reject){
    //         let xhttp = new XMLHttpRequest();
    //         xhttp.open("GET", url, true);
    //         xhttp.onload = function(){
    //             if(xhttp.status == 200){
    //                 resolve(JSON.parse(xhttp.response));
    //             }else{
    //                 reject(xhttp.statusText);
    //             }
    //         };
    //         xhttp.onerror = function(){
    //             reject(xhttp.statusText);
    //         };
    //         xhttp.send();
    //     });
    // }//end function get(url){

    // let promise = get("data/tweets.json");
    // promise.then(function(tweets){
    //     console.log(tweets);
    //     return get("data/friends.json");
    // }).then(function(friends){
    //     console.log(friends);
    //     return get("data/videos.json");
    // }).then((videos) => {
    //     console.log(videos);
    // }).catch(function(error){
    //     console.log(
    //         error
    //     );
    // });

};







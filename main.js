//main.js
//#3_callbackFunctions
/*
    Asynchronous Javascript & XML

    //READY STATES 
    0   -   not initialized
    1   -   set up
    2   -   sent
    3   -   inProcess
    4   -   completed
*/

// function callback(val){
//     console.log(
//         val
//     );
// }

window.onload = function(){

    // let fruits = ["banana", "apple", "orange"];
    // // fruits.forEach(function(val){
    // //     console.log(val);
    // // });

    // fruits.forEach(callback);

    // function cb(data){
    //     console.log(
    //         data
    //     );
    // }


    // $.get("data/tweets.json"/*startNow*/, function(data){
    //     console.log(
    //         data
    //     );
    // });

    // $.get("data/tweets.json",cb);

    // console.log(
    //     "test"
    // );


    //error handler
    function handleError(jqXHR, textStatus, error){
        console.log(
            error
        );
    }//end handleError

    function callbackLog(data){
        console.log(
            data
        )
    }

    $.ajax({
        type:   "GET",
        url:    "data/tweets.json",
        success:function(data){
            console.log(
                data
            );
            $.ajax({
                type:   "GET",
                url:    "data/friends.json",
                success:function(data){
                    console.log(
                        data
                    );
                    $.ajax({
                        type:"GET",
                        url:    "data/videos.json",
                        success:function(data){
                            console.log(
                                data

                            );
                        },
                        error:handleError
                    });//end $.ajax
                },
                error:handleError
            })//end $.ajax
        },
        error:handleError
    });//end $.ajax

    console.log(
        "test"
    );

};







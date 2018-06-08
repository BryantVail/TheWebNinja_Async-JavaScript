//main.js
//#5_promises
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


    genWrap(function*(){
        let tweets =    yield $.get("data/tweets.json");
        console.log(tweets);
        let friends =   yield $.get("data/friends.json");
        console.log(friends);
        let videos =    yield $.get("data/videos.json");
        console.log(videos);

    });

    // libraries: 'q' or 'bluebird', recommended by this host
    function genWrap(generator){
        let gen = generator();

        function handle(yielded){
            if(!yielded.done){
                yielded.value.then(function(data){
                    return handle(gen.next(data));
                });
            }
        }//end handle

        return handle(gen.next());
    }//end genWrap

    

    // // // // // // //

    // function* gen(){
    //     //pausable functions
    //     let x = yield 10;
    // }

    // let myGen = gen();
    // console.log(
    //     myGen.next()
    // );
    // console.log(myGen.next(10));

};







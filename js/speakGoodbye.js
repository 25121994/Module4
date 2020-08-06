(function(window){
    var byespeaker=new Object();
    var speakword="Good bye";
    byespeaker.speak=function speak(name){
        console.log(speakword + " " + name);

    };
    window.byespeaker=byespeaker;


})(window);
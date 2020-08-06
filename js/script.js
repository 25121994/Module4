(function(){
    var names=["John","yakaav","Jen","Jason","Frank","Laura","Jim"];
    for(var i=0;i<name.length;++i)
    {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    
    }
})();
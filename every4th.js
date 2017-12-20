$(document).ready(function(){
  $("button").on('click', function(){
    var original_text = $("#original_text").val();
    var doc = nlp(original_text);
    var nouns = doc.nouns().out('array');
    var verbs = doc.verbs().out('array');
    var modified_text = original_text;
    
    

///////////////// this changes every 4th noun and the 0th
    // console.log(nouns);
    // for(i=0; i < nouns.length; i++){
    //   if(i%4===0){
    //     modified_text = modified_text.replace(nouns[i], '<span style="color:red;font-size:200%">'.concat(nouns[i], "</span>"));
    //   } else {
    //     console.log('help!')
    //   };
    // }
//////////////////// colors every noun to re
    // console.log(nouns);
    // for(i=0; i < nouns.length; i++){
    //     modified_text = modified_text.replace(nouns[i], '<span style="color:red;font-size:200%">'.concat(nouns[i], "</span>"));
    // }
////////////////////

    // nouns.forEach(function(noun) {
    //         var re = new RegExp('\\b'.concat(noun, '\\b'));
    //         modified_text = modified_text.replace(re, '<span style="color:red;font-size:400%">$&</span>');
    //     });
    //     verbs.forEach(function(verb) {
    //         var re = new RegExp('\\b'.concat(verb, '\\b'));
    //         modified_text = modified_text.replace(re, '<span style="color:blue;font-size:150%">$&</span>');
    //     });
        $("#rendered").html(modified_text);
  });
});
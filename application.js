$(document).ready(function(){
  $("button").on('click', function(){
    var original_text = $("#original_text").val();
    var doc = nlp(original_text);
    var nouns = doc.nouns().out('array');
    var verbs = doc.verbs().out('array');
    var modified_text = original_text;
    // for(nouns(Math.random(0..nouns.length-1)) {
    //   modified_text = modified_text.replace(noun, '<span style="color:red;font-size:200%">'.concat(noun, "</span>"));
    // }
    console.log(nouns);
    // for(i=0; i < nouns.length; i++){
    //   if(i%4===0){
    //     modified_text = modified_text.replace(nouns[i], '<span style="color:red;font-size:200%">'.concat(nouns[i], "</span>"));
    //   } else {
    //     console.log('help!')
    //   };
    // }
    nouns.forEach(function(noun) {
        modified_text = modified_text.replace(noun, '<span style="color:red;font-size:200%">'.concat(noun, "</span>"));
    });
    verbs.forEach(function(verb) {
      modified_text = modified_text.replace(verb, '<span style="color:blue;font-size:150%">'.concat(verb, "</span>"));
    });
    $("#rendered").html(modified_text);
  });
});

// n = nouns.count = 4
// (n / 4).times do { nouns(Math.random(0..nouns.length-1) }
// if i % 3 = 0 && i % 5 = 0

// $(document).ready(function(){
//   $("button").on('click', function(){
//     var original_text = $("#original_text").val();
//     var doc = nlp(original_text);
//     var nouns = doc.nouns().out('array');
//     var verbs = doc.verbs().out('array');
//     var modified_text = original_text;
//     for(nouns(Math.random(0..nouns.length-1)) {
//       modified_text = modified_text.replace(noun, '<span style="color:red;font-size:200%">'.concat(noun, "</span>"));
// });
//         $("#rendered").html(modified_text);

// });

$(document).ready(function(){
  $("button").on( 'click', function(){
    var original_text = $( "#original_text").val();
    var doc = nlp(original_text);
    var nouns = doc.nouns().out('array');
    var verbs = doc.verbs().out('array');
    var modified_text = original_text;
    var noun_index = Math.floor(Math.random()*nouns.length);
    console.log(noun_index);
    var noun = nouns[noun_index];
    console.log(noun);
    modified_text = modified_text.replace(noun, '<span style="color:red;font-size:200%">'.concat(noun, "</span>"));
    $("#rendered").html(modified_text);

    });
  });


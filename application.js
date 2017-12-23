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

var verb_style = ['<span style="color:blue;font-size:150%">',
                  '<span style="color:green;font-size:150%">',
                  '<span style="color:orange;font-size:150%">'];
$(document).ready(function(){
  $("button").on( 'click', function(){
    var original_text = $( "#original_text").val();
    var doc = nlp(original_text);
    var nouns = doc.nouns().out('array');
    var verbs = doc.verbs().out('array');
    console.log(nouns);
    console.log(verbs);
    var modified_text = original_text;
    // Modify just the first occurrence of one random noun
    var noun_index = Math.floor(Math.random()*nouns.length);
    console.log(noun_index);
    var noun = nouns[noun_index];
    console.log(noun);
    modified_text = modified_text.replace(noun, '<span style="color:red;font-size:200%">'.concat(noun, "</span>"));
    // Modify 30% of the verbs
    verbs.forEach(function(verb) {
        if (Math.random() < 0.3) {
            var re = new RegExp('\\b'.concat(verb, '\\b'));
            var chosen_style = verb_style[Math.floor(Math.random()*3)];
            modified_text = modified_text.replace(re, chosen_style.concat('$&</span>'));
        }
    });
    $("#rendered").html(modified_text);

    });
  });


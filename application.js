

var verb_style = ['<span style="color:blue;font-size:420%">',
'<span style="color:green;font-size:250%">',
'<span style="color:orange;font-size:550%">'];
$(document).ready(function(){
  $("button").on( 'click', function(){
    var original_text = $( "#original_text").val();
    var doc = nlp(original_text);
    var nouns = doc.nouns().out('array');
    var verbs = doc.verbs().out('array');
    var ignoreVerb = ['was', 'is', 'be', 'are', 'do', 'did', 'does', 'was', 'get', 'got', 'began', 'comes', 'has', 'have', 'had'];
    var ignoreNoun = ['someone', 'somewhere', 'somebody', 'anyone', 'anywhere', 'everyone', 'everywhere', 'no one', 'nowhere', 'nobody']
    console.log(nouns);
    console.log(verbs);
    var modified_text = original_text;
    // Modify just the first occurrence of one random noun
    // Filter out nouns to ignore, same as verbs
    // highNouns = nouns.filter(function(noun) {
    //   return ignoreNoun.indexOf(noun) === -1;
    // });
    // change the below to highNouns
    // 
    var noun_index = Math.floor(Math.random()*nouns.length);
    console.log(noun_index);
    var noun = nouns[noun_index];
    console.log(noun);
    
    modified_text = modified_text.replace(noun, '<span style="color:red;font-size:200%">'.concat(noun, "</span>"));
    //Filter out verbs to ignore
    verbs.filter(function (verb) {
      return ignoreVerb.indexOf(verb) === -1;
    // Modify 30% of the verbs
      }).forEach(function(verb) {
        if (Math.random() < 0.3) {
        var re = new RegExp('\\b'.concat(verb, '\\b'));
        var chosen_style = verb_style[Math.floor(Math.random()*3)];
        modified_text = modified_text.replace(re, chosen_style.concat('$&</span>'));
        }
  });
  $("#rendered").html(modified_text);

});
});


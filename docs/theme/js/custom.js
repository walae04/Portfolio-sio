    // JS perso ici
$(document).ready(function() {
    console.log("DOM prêt");

    var $h2 = $('.hero .hero-text h2');
    var $typedText = $('.hero .hero-text .typed-text');

    console.log("H2 trouvé:", $h2.length);
    console.log("Typed text trouvé:", $typedText.length);

    if ($h2.length && $typedText.length) {
        var typed_strings = $typedText.text()
            .split(',')
            .map(s => s.trim())
            .filter(s => s.length > 0);

        console.log("Phrases à afficher:", typed_strings);

        $typedText.remove();

        new Typed($h2[0], {
            strings: typed_strings,
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true,
            showCursor: false
        });
        console.log("Typed.js lancé avec succès");
    }
});


    


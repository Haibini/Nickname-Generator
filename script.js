var adj = ["adamant", "adroit", "amatory", "animistic", "antic", "arcadian", "baleful", "bellicose", "bilious", "boorish", "calamitous", "caustic", "cerulean", "comely", "concomitant", "contumacious", "corpulent", "crapulous", "defamatory", "didactic", "dilatory", "dowdy", "efficacious", "effulgent", "egregious", "endemic", "equanimous", "execrable", "fastidious", "feckless", "fecund", "friable", "fulsome", "garrulous", "guileless", "gustatory", "heuristic", "histrionic", "hubristic", "incendiary", "insidious", "insolent", "intransigent", "inveterate", "invidious", "irksome", "jejune", "jocular", "judicious", "lachrymose", "limpid", "loquacious", "luminous", "mannered", "mendacious", "meretricious", "minatory", "mordant", "munificent", "nefarious", "noxious", "obtuse", "parsimonious", "pendulous", "pernicious", "pervasive", "petulant", "platitudinous", "precipitate", "propitious", "puckish", "querulous", "quiescent", "rebarbative", "recalcitant", "redolent", "rhadamanthine", "risible", "ruminative", "sagacious", "salubrious", "sartorial", "sclerotic", "serpentine", "spasmodic", "strident", "taciturn", "tenacious", "tremulous", "trenchant", "turbulent", "turgid", "ubiquitous", "uxorious", "verdant", "voluble", "voracious", "wheedling", "withering", "zealous"];
var randomValue = adj[Math.floor(Math.random() * adj.length)];

$(".btn1").click(function() {
    $(".container1").css("border", "solid teal 8px");
    $(".btn1").css("border", "solid teal");
    $(".btn2").css("border", "");
    $(".enter").click(function() {
        var message01 = $("#01").val();
        var message02 = $("#02").val();
        var message03 = $("#03").val();
        $(".result").text(randomValue + message01 + message03 + " " + message02 + "♂");
        $(".container1").css("background-color", "Azure");
        $(".result").css("color", "teal");
        $(".result").css("font-size", "50px");
        $(".result").css("font-weight", "bold");
    });
});

$(".btn2").click(function() {
    $(".container1").css("border", "solid pink 8px");
    $(".btn2").css("border", "solid pink");
    $(".btn1").css("border", "");
    $(".enter").click(function() {
        var message01 = $("#01").val();
        var message02 = $("#02").val();
        var message03 = $("#03").val();
        $(".result").text(randomValue + message01 + message03 + " " + message02 + "♀");
        $(".container1").css("background-color", "LavenderBlush");
        $(".result").css("color", "pink");
        $(".result").css("font-size", "50px");
        $(".result").css("font-weight", "bold");
    });
});
var character_types = ['main character', 'deuteragonist', 'villain', 'unsuspicious extra', "villain's henchperson"];
var actions = ['is actually the villain', 'was masterminding this whole story', 'is actually very wealthy', 'is actually a cop', 'is actually O. Henry'];
var actions2 = ['moves to aruba', 'goes to jail', 'escapes the law enforcement', 'goes to therapy', 'finds true love'];
var snapper1;
var snapper2;
var snapper3;
var snapper4;
var snapper;
var x;
function generate() {
    x = Math.floor(Math.random() * 5);
    snapper1 = "The " + character_types[x];
    snapper2 = snapper1 + " ";
    x = Math.floor(Math.random() * 5);
    snapper3 = snapper2 + actions[x];
    snapper4 = snapper3 + " and ";
    x = Math.floor(Math.random() * 5);
    snapper = snapper4 + actions2[x];
    
    document.getElementById('display').innerHTML = snapper;
}

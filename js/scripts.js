var message;
var shift;
var keyBase;
var keyBaseAppend;
var encryptionKey;
var character;
var numericPublic = [];
var numericPrivate = [];
var encryptedBit;
var messageEncrypted = [];
var stringKey;
// var stringBit;
//back-end
var alphabetPublic = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ","."];

var encode = (function () {
  keyBase = alphabetPublic.slice(shift);
  keyBaseAppend = alphabetPublic.slice(0,shift);
  encryptionKey = keyBase.concat(keyBaseAppend);

  for (var i = 0; i <= message.length; i++) {
    message = message.toLowerCase();
    character = message.charAt(i);
    numeral = alphabetPublic.indexOf(character);
    numericPublic.push(numeral);
  }

  for (var index = 0; index <= message.length; index++) {
    encryptedBit = encryptionKey [numericPublic[index]];
    messageEncrypted.push(encryptedBit);
  }
  messageEncryptedString = messageEncrypted.join();
  console.log(messageEncryptedString);
  messageEncryptedClean = messageEncryptedString.replace(/,/g, '');
  console.log(messageEncryptedClean);
  $(".output").show();
  $(".output ul").append("<li>" + messageEncryptedClean + "</li>");
  $("#key").text(shift);
})







//front-end
$(document).ready(function (){
  $(".userInputs form").submit(function (event) {
    event.preventDefault();
    message = $("input#message").val();
    shift = $("input#keyShift").val();
    encode();
  });


})

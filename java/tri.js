var isTriangle = function(sideOne, sideTwo, sideThree) {	var isTriangle = function(sideOne, sideTwo, sideThree) {
  return sideOne <= (sideTwo + sideThree) && sideTwo <= (sideThree + sideOne) && sideThree <= (sideOne + sideTwo)	  return sideOne <= (sideTwo + sideThree) && sideTwo <= (sideThree + sideOne) && sideThree <= (sideOne + sideTwo)
}	};
 $(document).ready(function() {	$(document).ready(function() {
  $("form#triangle").submit(function(event) {	  $("form#triangle").submit(function(event) {

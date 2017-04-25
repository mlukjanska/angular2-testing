function FivesArray() {
}
FivesArray.prototype.create = function(count) {
  var a = new Array(count);
  for(var i=0; i < a.length; i++) {
    a[i] = 5;
  }
  return a;
};

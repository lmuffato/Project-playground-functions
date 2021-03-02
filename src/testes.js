var r = /\d+/g;
var s = "you can enter 333 maximum 500 choices";
var m;
while ((m = r.exec(s)) != null) {
  alert(m[0]);
}

console.log(m)
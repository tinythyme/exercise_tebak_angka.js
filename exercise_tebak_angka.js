alert("Masukkan satu angka dari 1-10 \n Anda memiliki 3 kesempatan")
var comp = Math.floor(Math.random() * 11);

for (var i = 0; i < 3; i++) {
  var p = prompt("Pilih angka tebakkan anda: ");
  var int = parseInt(p);

  if (p == comp) {
    alert("jawaban anda benar")
  }else if (p < comp) {
    alert("jawaban anda terlalu kecil")
  }else if (p > comp) {
    alert("jawaban anda terlalu besar")
  }else {
    alert("input yang anda masukkan bukan angka")
  }

}alert("kesempatan anda berakhir")

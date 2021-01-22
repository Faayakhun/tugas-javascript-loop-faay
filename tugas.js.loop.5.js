var jawaban;

while (true) {
    jawaban = prompt("Sebutkan Kepanjangan dari nama IB", "");
    if (jawaban === "Impact Byte") {
        break;
    }
    alert("Jawaban salah,coba lagi");
}
alert("Selamat, jawaban anda benar");
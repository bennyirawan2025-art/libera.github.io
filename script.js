function sendWhatsApp(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let product = document.getElementById("product").value;
    let target = document.getElementById("target").value;
    let amount = document.getElementById("amount").value;

    let message =
`Halo, saya ${name}. Saya ingin memesan:
Layanan: ${product}
Tujuan: ${target}
Nominal: ${amount}`;

    let phone = "6283899197114"; // Nomor WhatsApp Libera

    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

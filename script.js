(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Kamu yakin?",
    "YAKIns nich??",
    "Bener-bener Y-KIn??",
    "Srius please...",
    "Yakin G cyg ??!",
    "Kalau bilang g, aku sedih :()...",
    "NANGIS NI...",
    "HUUU SEDIHH...",
    "Ok fine, AKU G NANYA LGI...",
    "CANDA, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}



// let yesClickCount = 0; // Counter untuk klik tombol "Yes"

// function handleYesClick() {
//     yesClickCount++;

//     if (yesClickCount === 1) {
//         // Cek apakah pesan sudah ada, jika belum tambahkan
//         let messageContainer = document.getElementById("yes-message");

//         if (!messageContainer) {
//             messageContainer = document.createElement("p");
//             messageContainer.id = "yes-message";
//             messageContainer.textContent = "Coba klik lagi deh";
//             document.querySelector(".container").appendChild(messageContainer);
//         } else {
//             messageContainer.textContent = "Coba klik lagi deh"; // Pastikan teksnya tetap sama
//         }
//     } else if (yesClickCount === 2) {
//         // Pindah ke halaman yes_page.html
//         window.location.href = "yes_page.html";
//     }
// }

function handleYesClick() {
    window.location.href = "yes_page.html";
}

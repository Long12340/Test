(function createFloatingPhotos() {
    const layer = document.querySelector(".photoLayer");
    if (!layer) return;

    const photoSources = Array.from({ length: 10 }, (_, index) => `./photos/${index + 1}.jpg`);
    const photoCount = 26;
    const titleRevealTime = 5.2;

    for (let i = 0; i < photoCount; i++) {
        const photo = document.createElement("img");
        photo.className = "floatingPhoto";
        photo.src = photoSources[i % photoSources.length];
        photo.alt = "";
        photo.draggable = false;

        const depth = Math.random();
        const size = Math.round(38 + depth * 92);
        photo.style.setProperty("--photo-left", `${Math.random() * 94}%`);
        photo.style.setProperty("--photo-size", `${size}px`);
        photo.style.setProperty("--photo-opacity", (0.22 + depth * 0.62).toFixed(2));
        photo.style.setProperty("--photo-blur", `${((1 - depth) * 1.6).toFixed(1)}px`);
        const duration = 12 + Math.random() * 8;
        photo.style.setProperty("--photo-duration", `${duration.toFixed(2)}s`);
        photo.style.setProperty("--photo-delay", `${(i * 0.62).toFixed(2)}s`);
        photo.style.setProperty("--photo-rotate", `${Math.round(Math.random() * 36 - 18)}deg`);
        photo.style.setProperty("--photo-drift", `${Math.round(Math.random() * 42 - 21)}px`);
        layer.appendChild(photo);
    }
    window.addEventListener("load", () => {
        window.setTimeout(() => layer.classList.add("photosStarted"), titleRevealTime * 1000);
    }, { once: true });
})();
var letterContent = "Chúc bạn 20/10 vui vẻ, rất tiếc không ở gần nhau để trực tiếp tặng món quà đó cho bạn và ôm bạn trong không khí lạnh của đà lạt lúc này, mong rằng ở nơi lạnh lẽo đó trong tim có mình để mình sưởi ấm cho bạn bằng sự dịu dàng và ấm áp của mình, và mong bạn giữ gìn sức khỏe, ăn uống đầy đủ, ngủ sớm, đặc biệt là uống nhiều nướcc ... còn iu mình nữa. Happy Women Day 20/10 ❤ "
durationWrite = 50 

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})

(function backgroundMusic() {
    const button = document.querySelector(".musicToggle");
    const audio = document.querySelector("#backgroundMusic");
    if (!button || !audio) return;

    async function toggleMusic() {
        if (audio.paused) {
            try {
                await audio.play();
                button.textContent = "♫ Tắt nhạc";
                button.setAttribute("aria-pressed", "true");
                button.setAttribute("aria-label", "Tắt nhạc nền");
                button.classList.add("isPlaying");
            } catch (error) {
                button.textContent = "♫ Thử bật lại";
                button.setAttribute("aria-pressed", "false");
                button.setAttribute("aria-label", "Thử bật nhạc nền lại");
            }
        } else {
            audio.pause();
            button.textContent = "♫ Bật nhạc";
            button.setAttribute("aria-pressed", "false");
            button.setAttribute("aria-label", "Bật nhạc nền");
            button.classList.remove("isPlaying");
        }
    }

    audio.addEventListener("ended", () => {
        button.textContent = "♫ Bật nhạc";
        button.setAttribute("aria-pressed", "false");
        button.classList.remove("isPlaying");
    });

    button.addEventListener("click", toggleMusic);
})();

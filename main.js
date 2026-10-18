// Ảnh nền: chỉ cần thay 10 ảnh trong thư mục photos bằng ảnh của bạn, đặt tên 1.jpg đến 10.jpg.
// Hiệu ứng tạo nhiều bản hiển thị từ đúng 10 ảnh này và lặp liên tục.
(function createFloatingPhotos() {
    const layer = document.querySelector(".photoLayer");
    if (!layer) return;

    const photoSources = Array.from({ length: 10 }, (_, index) => `./photos/${index + 1}.jpg`);
    const photoCount = 26;

    for (let i = 0; i < photoCount; i++) {
        const photo = document.createElement("img");
        photo.className = "floatingPhoto";
        photo.src = photoSources[i % photoSources.length];
        photo.alt = "";
        photo.draggable = false;

        const depth = Math.random(); // 0 = xa, 1 = gần
        const size = Math.round(38 + depth * 92);
        photo.style.left = `${Math.random() * 94}%`;
        photo.style.top = `${Math.random() * 88}%`;
        photo.style.setProperty("--photo-size", `${size}px`);
        photo.style.setProperty("--photo-opacity", (0.22 + depth * 0.62).toFixed(2));
        photo.style.setProperty("--photo-blur", `${((1 - depth) * 1.6).toFixed(1)}px`);
        photo.style.setProperty("--photo-duration", `${(3.5 + Math.random() * 5.5).toFixed(2)}s`);
        photo.style.setProperty("--photo-delay", `${(-Math.random() * 8).toFixed(2)}s`);
        photo.style.setProperty("--photo-rotate", `${Math.round(Math.random() * 36 - 18)}deg`);
        photo.style.setProperty("--photo-drift", `${Math.round(Math.random() * 42 - 21)}px`);
        layer.appendChild(photo);
    }
})();

// Thay đổi nội dung búc thư ở đây
var letterContent = "Chúc bạn 20/10 vui vẻ, rất tiếc không ở gần nhau để trực tiếp tặng món quà đó cho bạn và ôm bạn trong không khí lạnh của đà lạt lúc này, mong rằng ở nơi lạnh lẽo đó trong tim có mình để mình sưởi ấm cho bạn bằng sự dịu dàng và ấm áp của mình, và mong bạn giữ gìn sức khỏe, ăn uống đầy đủ, ngủ sớm, đặc biệt là uống nhiều nướcc ... còn iu mình nữa. Happy Women Day 20/10 ❤ "

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

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
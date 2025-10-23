// 1. Home စာမျက်နှာရှိ စာသားကို အလိုအလျောက်ရေးသားခြင်း (Typing Effect)
const textToType = "သဲလေး ထာဝရ ချစ်ကြမယ်။";
const typingElement = document.getElementById('typing-text');
let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        typingElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); // စာလုံးတစ်လုံးချင်းစီ ပေါ်လာမယ့်အချိန် (100ms)
    } else {
        // စာဆုံးသွားပါက Heart Icon ကို Fade-in လုပ်ရန်
        document.querySelector('.heart-beat-icon').style.opacity = 1;
    }
}

// 2. အသည်းကလာသော စာ (Special Message)
const loveMessage = "ချစ်ရတဲ့သူ... မင်းက ငါ့ဘဝရဲ့ အလှဆုံးလက်ဆောင်ပါ။ မင်းရဲ့ အပြုံးလေးတွေက ငါ့ကို အသက်ရှင်စေတယ်။ ဒီ website လေးကို မင်းအတွက် အမှတ်တရတွေ၊ ငါ့ရဲ့ အချစ်တွေနဲ့ အတူတူ ဖန်တီးထားတယ်။ ငါတို့ရဲ့ ချစ်ခြင်းမေတ္တာတွေဟာ အချိန်တိုင်း ပိုမိုခိုင်မြဲနေပါစေ။ ငါ မင်းကို အရမ်းချစ်တယ်၊ အမြဲတမ်းချစ်နေမယ်။ မင်းရဲ့ဘေးမှာ အမြဲတမ်းရှိနေခွင့်ပြုပါ အသည်းလေး။";
const messageElement = document.getElementById('special-message');
messageElement.textContent = loveMessage;


// 3. အသည်းပုံများ ပျံဝဲခြင်း (Floating Hearts Effect)
const heartContainer = document.getElementById('heart-container');
const heartsCount = 20; // ပျံဝဲမယ့် အသည်းပုံအရေအတွက်

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '<i class="fas fa-heart"></i>'; // Font Awesome Heart Icon

    // Random Position and Size
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.animationDuration = Math.random() * 4 + 5 + 's'; // 5s to 9s
    heart.style.animationDelay = Math.random() * 5 + 's';

    heartContainer.appendChild(heart);

    // Animation ပြီးသွားတဲ့အခါ heart ကို ဖျက်ပစ်ပြီး memory မပြည့်အောင်လုပ်ပါ
    heart.addEventListener('animationend', () => {
        heart.remove();
        createHeart(); // အဆက်မပြတ်ပေါ်နေအောင် ပြန်ခေါ်ပါ
    });
}

function startHeartAnimation() {
    for (let i = 0; i < heartsCount; i++) {
        setTimeout(createHeart, i * 500); // 0.5 စက္ကန့်ခြားပြီး heart တွေ စတင်ပေါ်စေ
    }
}

// 4. Image Pop-up Functionality
const modal = document.getElementById("image-popup");
const modalImg = document.getElementById("popup-image");

function showPopup(imageSrc) {
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closePopup() {
    modal.style.display = "none";
}

// 5. Initialize Functions
window.onload = function() {
    typeText(); // Typing effect စတင်ရန်
    startHeartAnimation(); // Floating Hearts effect စတင်ရန်
};
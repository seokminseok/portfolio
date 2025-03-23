document.addEventListener("DOMContentLoaded", function () {
    // ✅ 1. 타이핑 효과
    const textArray = ["B.E Engineer", "Seok Min"];
    const dynamicText = document.getElementById("dynamic-text");
    dynamicText.style.minWidth = '12ch';
    let currentIndex = 0;
    let currentCharIndex = 0;
    let currentText = "";

    function type() {
        if (currentCharIndex < textArray[currentIndex].length) {
            currentText += textArray[currentIndex].charAt(currentCharIndex);
            dynamicText.textContent = currentText;
            currentCharIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (currentCharIndex > 0) {
            currentText = currentText.slice(0, -1);
            dynamicText.textContent = currentText;
            currentCharIndex--;
            setTimeout(erase, 100);
        } else {
            currentIndex = (currentIndex + 1) % textArray.length;
            setTimeout(type, 500);
        }
    }
    type();

    // ✅ 2. 라디오 버튼 토글
    const careerRadio = document.getElementById("career-radio");
    const educationRadio = document.getElementById("education-radio");
    const careerContent = document.getElementById("career-content");
    const educationContent = document.getElementById("education-content");

    function toggleContent() {
        careerContent.style.display = careerRadio.checked ? "block" : "none";
        educationContent.style.display = educationRadio.checked ? "block" : "none";
    }
    toggleContent();

    careerRadio.addEventListener("click", toggleContent);
    educationRadio.addEventListener("click", toggleContent);

    // ✅ 3. 메일 전송
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const formData = new FormData(form);
            fetch('/mail/send', {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(() => {
                    alert("전송에 성공 했습니다 감사합니다!");
                    location.reload();
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
    }

    // ✅ 4. 프로젝트 smooth scroll
    document.querySelectorAll('a[href="#project"]').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const target = document.querySelector('#project');
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }
        });
    });

    // ✅ 5. 햄버거 메뉴 토글
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});

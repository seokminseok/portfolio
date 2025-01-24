document.addEventListener("DOMContentLoaded", function () {
    const textArray = ["B.E Engineer", "Seok Min"];
    const dynamicText = document.getElementById("dynamic-text");
    let currentIndex = 0;
    let currentCharIndex = 0;
    let currentText = "";

    function type() {
        if (currentCharIndex < textArray[currentIndex].length) {
            currentText += textArray[currentIndex].charAt(currentCharIndex);
            dynamicText.innerHTML = currentText;
            currentCharIndex++;
            setTimeout(type, 100); // 글자가 나타나는 속도
        } else {
            setTimeout(erase, 1000); // 글자가 나타난 후 대기
        }
    }

    function erase() {
        if (currentCharIndex > 0) {
            currentText = currentText.slice(0, -1);
            dynamicText.innerHTML = currentText;
            currentCharIndex--;
            setTimeout(erase, 100); // 글자가 지워지는 속도
        } else {
            currentIndex = (currentIndex + 1) % textArray.length; // 다음 텍스트로 변경
            setTimeout(type, 500); // 다음 텍스트를 입력하기 전 대기
        }
    }

    type(); // 첫 번째 텍스트 입력 시작

});
{
    document.addEventListener("DOMContentLoaded", function () {
        // Radio 버튼 클릭 시 이벤트 처리
        const careerRadio = document.getElementById("career-radio");
        const educationRadio = document.getElementById("education-radio");
        const certificationRadio = document.getElementById("certification-radio")
        const careerContent = document.getElementById("career-content");
        const educationContent = document.getElementById("education-content");
        const certificationContent = document.getElementById("certification-content")


        function toggleContent() {
            // careerRadio 선택 시 careerContent만 표시하고, educationContent 숨김
            if (careerRadio.checked) {
                careerContent.style.display = "block";
                educationContent.style.display = "none";

            }
            // educationRadio 선택 시 educationContent만 표시하고, careerContent 숨김
            if (educationRadio.checked) {
                educationContent.style.display = "block";
                careerContent.style.display = "none";
            }
        }

        // 페이지 로딩 시 첫 번째 라디오 버튼 상태로 초기화
        toggleContent();

        // 각 radio 버튼에 클릭 이벤트 추가
        careerRadio.addEventListener("click", toggleContent);
        educationRadio.addEventListener("click", toggleContent);
    });
    document.addEventListener('DOMContentLoaded', () => {
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
                    .then(data => {
                        alert("전송에 성공 했습니다 감사합니다!");
                       location.href = location.href;
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            });
        } else {
            console.error('폼을 찾을 수 없습니다.');
        }
    });
    document.querySelectorAll('a[href="#project"]').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // 기본 동작 방지

            const target = document.querySelector('#project');
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth', // 부드럽게 스크롤
                    block: 'center',    // 스크롤 기준: 화면 중앙에 맞춤
                });
            }
        });
    });

}



/* ########## Include Files ########## */
/* 
fetch('경로')
.then(response => response.text())
.then(data => {
  선택자.innerHTML = data
})
 */
fetch("/include/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector(".header-include").innerHTML = data;
    /* 
  로그인 클릭시 modal 보여지게
  로그인 수행 > header ui 변경
  모달 닫기 클릭 > 모달 닫힘
  트리거 > 메가네비 높이 생겼다가 사라지게
   */
    // 선택자: 로그인버튼, 모달창, 헤더에 로그인 회원가입 유저알람, 트리거, 메가네비, 모달 안에 로그인버튼
    let loginBtn = document.querySelector(".btn-login"); //로그인버튼
    let loginModal = document.getElementById("loginModal"); //모달창
    let closeModal = document.querySelector(".modal-close"); //모달닫기
    let loginResister = document.querySelector(".login-register-buttons"); //로그인 회원가입 섹션
    let userAlarm = document.querySelector(".user-alarm"); //유저알람
    let trigger = document.querySelector(".trigger"); //트리거
    let megaNavi = document.querySelector(".mega-navi"); //메가네비
    let btnMegaNaviClose = document.querySelector(".btn-mega-navi-close"); //메가네비
    let loginSubmit = document.getElementById("loginSubmit"); //로그인제출
    let megaNaviItem = document.querySelectorAll(".mega-navi-item b"); //메가네비 카테고리 타이틀
    /* 페이지 진입시 로그인 전 상태로 만들기 */
    loginResister.style.display = "flex";
    userAlarm.style.display = "none";
    /* 로그인 버튼 클릭시 모달 열기 */
    loginBtn.addEventListener("click", function () {
      loginModal.style.display = "flex";
    });
    /* 닫기 누르면 모달 닫힘 */
    closeModal.addEventListener("click", function () {
      loginModal.style.display = "none";
    });
    /* 로그인 수행하면 헤더 ui 변경 */
    document.addEventListener("click", function (e) {
      if (e.target.id === "loginSubmit") {
        loginModal.style.display = "none";
        loginResister.style.display = "none";
        userAlarm.style.display = "block";
      }
    });
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      megaNavi.classList.toggle("active");
    });
    /* 
  트리거 클릭시 너비가 767 이하일 때만 left0
  클릭시 너비가 737이하이고 btnMegaNaviClose 있다면 left-300px
   */
    trigger.addEventListener("click", function () {
      if (window.innerWidth <= 767) {
        megaNavi.style.add = "active";
      }
    });
    btnMegaNaviClose.addEventListener("click", function () {
      if (window.innerWidth <= 767 && megaNavi.classList.contains("active")) {
        megaNavi.classList.remove("active");
      }
    });

    /* 서브카테고리 펼치기 */
    const megaNaviCategory = Array.from(megaNaviItem);
    megaNaviCategory.forEach(function (i) {
      i.addEventListener("click", function () {
        let megaNaviSubCategory = this.nextElementSibling;
        if (megaNaviSubCategory.style.display === "block") {
          megaNaviSubCategory.style.display = "none";
        } else {
          megaNaviSubCategory.style.display = "block";
        }
      });
    });
  });

fetch("/fastcampus/include/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector(".footer-include").innerHTML = data;
    /* 푸터의 타이틀 클릭시 콘텐츠 보여지게 */
    document.querySelectorAll(".link-item-title").forEach(function (item) {
      item.addEventListener("click", function () {
        let submenu = this.nextElementSibling;
        //현재 서브메뉴 display상태 토글
        if (submenu.style.display === "block") {
          submenu.style.display = "none";
        } else {
          submenu.style.display = "block";
        }
      });
    });
    /* 트리거 클릭시 주소 보이게 */
    document
      .querySelector(".company-info-trigger")
      .addEventListener("click", function () {
        let address = document.querySelector("address");
        if (address.style.display === "block") {
          address.style.display = "none";
        } else {
          address.style.display = "block";
        }
      });
  });

/* ########## Front-event-banner ########## */
let banner = document.querySelector(".front-event-banner-wrap");
let hideBtn = document.querySelector(".btn-hide");
let closeBtn = document.querySelector(".btn-close");
hideBtn.addEventListener("click", function () {
  banner.style.display = "none";
});
closeBtn.addEventListener("click", function () {
  banner.style.display = "none";
});

/* ########## 카운트다운 ########## */
function startCountdown(durationInSeconds) {
  //durationInSeconds 전체타이머시간 (초)
  let timer = durationInSeconds;
  //선택
  let hour1 = document.getElementById("hour1");
  let hour2 = document.getElementById("hour2");
  let minute1 = document.getElementById("minute1");
  let minute2 = document.getElementById("minute2");
  let second1 = document.getElementById("second1");
  let second2 = document.getElementById("second2");
  let interval = setInterval(() => {
    /* 시간 */
    //1시간 = 3600초 -> 전체시간(timer)을 3600으로 나누면 시
    let hours = Math.floor(timer / 3600);
    /* 분 */
    //1시간을 다시 60으로 나누면 분
    let minutes = Math.floor((timer % 3600) / 60);
    /* 초 */
    //타이머 자체를 60으로 나누면 초
    let seconds = timer % 60;
    /* 각 값을 문자열로 변환하고 두자리로 맞춤 */
    //String 문자열 변환 padStart 두자리수 앞자리0 split 나누기
    let [h1, h2] = String(hours).padStart(2, "0").split("");
    let [m1, m2] = String(minutes).padStart(2, "0").split("");
    let [s1, s2] = String(seconds).padStart(2, "0").split("");
    /* 문서의 제자리에 쑤셔넣기 */
    hour1.textContent = h1;
    hour2.textContent = h2;
    minute1.textContent = m1;
    minute2.textContent = m2;
    second1.textContent = s1;
    second2.textContent = s2;
    if (timer > 0) {
      timer--;
    } else {
      clearInterval(interval);
    }
  }, 1000);
}
//7시간 50분 30초 계산
/* 
7 * 3600 = 25200
50 * 60 = 3000
30 = 30
25200 + 3000 + 30 = 28230
*/
startCountdown(3671);

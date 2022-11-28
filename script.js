const song = document.getElementById("song");
const playBtn = document.querySelector(".play-inner");
let isPlaying = true;
let indexSong = 0;
const nextBtn = document.querySelector(".playforward");
const prevBtn = document.querySelector(".playback");
const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");
//const musics = ["Pano.mp3", "273C.mp3", "anhDaQuenVoiCoDon.mp3", "anhDechcanGiNhieuNgoaiEm.mp3", "anotherLove.mp3", "buonThiCuKhocDi.mp3", "doEmBietAnhDangNghiGi.mp3", "gioNoiRoi.mp3", "headInTheClouds.mp3", "iAintWorried.mp3", "ifIAntGotYou.mp3", "ngheNhuTinhYeu.mp3", "nightDancer.mp3", "phiDieuVaVeSau.mp3", "pyscho.mp3", "querry.mp3", "somebodyThatIUseToKnow.mp3", "thisIsAmerica.mp3", "tuEmMaRa.mp3", "whistle.mp3", "whyNotMe.mp3", "worldSmallestViolin.mp3"];
const rangeBar = document.querySelector(".range");
const musicName = document.querySelector(".music-names");
const loveBtn = document.querySelector("lovebtn");
const musicList = document.querySelector(".playlist-musics");
const ulTag = document.querySelector("li");

let musics = [
  {
    id: 1,
    name: "Akuma No Ko",
    src: "akumanoko.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27325a8c1c351f162bb73c8670f.jfif?v=1668659894461"
  },
  {
    id: 2,
    name: "Bài Ca Tôm Cá",
    src: "baicatomca.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27325a8c1c351f162bb73c8670f.jfif?v=1668659894461"
  },
  {
    id: 3,
    name: "Chuyện Đôi Ta",
    src: "chuyendoita.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27325a8c1c351f162bb73c8670f.jfif?v=1668659894461"
  },
  {
    id: 4,
    name: "Comethru",
    src: "comethru.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27325a8c1c351f162bb73c8670f.jfif?v=1668659894461"
  },
  {
    id: 5,
    name: "Cool For The Summer",
    src: "coolforthesummer.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27325a8c1c351f162bb73c8670f.jfif?v=1668659894461"
  },
  {
    id: 6,
    name: "Dancin",
    src: "dancin.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27325a8c1c351f162bb73c8670f.jfif?v=1668659894461"
  },
  {
    id: 7,
    name: "Dolla Sign Smile",
    src: "dollasignsmile.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27325a8c1c351f162bb73c8670f.jfif?v=1668659894461"
  },
  {
    id: 8,
    name: "Dù Cho Mai Về Sau",
    src: "duchomaivesau.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27325a8c1c351f162bb73c8670f.jfif?v=1668659894461"
  },
  {
    id: 9,
    name: "Em Là",
    src: "emla.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27325a8c1c351f162bb73c8670f.jfif?v=1668659894461"
  },
  {
    id: 10,
    name: "I Love You So",
    src: "iloveyouso.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27325a8c1c351f162bb73c8670f.jfif?v=1668659894461"
  },
  {
    id: 11,
    name: "Không Phai",
    src: "khongphai.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27325a8c1c351f162bb73c8670f.jfif?v=1668659894461"
  },
  {
    id: 12,
    name: "Lovely",
    src: "lovely.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27325a8c1c351f162bb73c8670f.jfif?v=1668659894461"
  },
  {
    id: 13,
    name: "Mặt Mộc",
    src: "matmoc.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27325a8c1c351f162bb73c8670f.jfif?v=1668659894461"
  },
  {
    id: 14,
    name: "Một Nhà",
    src: "motnha.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27325a8c1c351f162bb73c8670f.jfif?v=1668659894461"
  },
  {
    id: 15,
    name: "Ngôi Nhà Hoa Hồng Mashup",
    src: "ngoinhahoahong.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27325a8c1c351f162bb73c8670f.jfif?v=1668659894461"
  },
  {
    id: 16,
    name: "Nothing On You",
    src: "nothingonyou.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27325a8c1c351f162bb73c8670f.jfif?v=1668659894461"
  },
  {
    id: 17,
    name: "Savage Love",
    src: "savagelove.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27325a8c1c351f162bb73c8670f.jfif?v=1668659894461"
  },
  {
    id: 18,
    name: "Sing Me To Sleep",
    src: "singmetosleep.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27325a8c1c351f162bb73c8670f.jfif?v=1668659894461"
  },
  {
    id: 19,
    name: "Wake Up In The Sky",
    src: "wakeupinthesky.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27325a8c1c351f162bb73c8670f.jfif?v=1668659894461"
  },
  {
    id: 20,
    name: "What They Want",
    src: "whattheywant.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27325a8c1c351f162bb73c8670f.jfif?v=1668659894461"
  },
  {
    id: 21,
    name: "Your Name",
    src: "yourname.mp3",
    img: "https://cdn.glitch.global/735aef68-fcb0-41f4-9406-1647cf358fb8/ab67616d0000b27325a8c1c351f162bb73c8670f.jfif?v=1668659894461"
  }
];

//controls
song.setAttribute("src", musics[indexSong].src);
nextBtn.addEventListener("click", function(){
  changeSong(1);
});
prevBtn.addEventListener("click", function() {
  changeSong(-1);
});
function changeSong(dir) {
  if(dir == 1) {
    indexSong++;
    if(indexSong >= musics.length) {
      indexSong = 0;
    }
    isPlaying = true;
  } else if(dir == -1){
      indexSong--;
      if (indexSong < 0){
        indexSong = musics.length -1;
      }
      isPlaying = true;
  }
 // song.setAttribute("src", musics[indexSong].src);
  init(indexSong);
  playPause();
}
playBtn.addEventListener("click", playPause);
function playPause() {
  if(isPlaying) {
    song.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    isPlaying = false;
  } else {
    song.pause();
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    isPlaying = true;
  }
}
//auto next
function playSong(index) {
  song.src = musics[index].src;
  song.play();
  
}
song.addEventListener("ended", function playNextS() {
  indexSong++;
  if (indexSong == musics.length) {
    indexSong = 0;
    playSong(indexSong);
    init(indexSong);
  } else {
    playSong(indexSong);
    init(indexSong);
  }
})
//thoi gian chay
function displayTimer() {
  const {duration, currentTime} = song;
  rangeBar.max = duration;
  rangeBar.value = currentTime;
}
displayTimer();
setInterval(displayTimer, 1000);
rangeBar.addEventListener("change", handleChangeBar);
function handleChangeBar() {
  song.currentTime = rangeBar.value;
}
//doi tieu de 
function init(indexSong) {
  song.setAttribute("src", musics[indexSong].src);
  musicName.textContent = musics[indexSong].name;
  playSong(indexSong);
}
init(indexSong);
//chon playlist
const m1 = document.querySelector("#m1");
const m2 = document.querySelector("#m2");
const m3 = document.querySelector("#m3");
const m4 = document.querySelector("#m4");
const m5 = document.querySelector("#m5");
const m6 = document.querySelector("#m6");
const m7 = document.querySelector("#m7");
const m8 = document.querySelector("#m8");
const m9 = document.querySelector("#m9");
const m10 = document.querySelector("#m10");
const m11 = document.querySelector("#m11");
const m12 = document.querySelector("#m12");
const m13 = document.querySelector("#m13");
const m14 = document.querySelector("#m14");
const m15 = document.querySelector("#m15");
const m16 = document.querySelector("#m16");
const m17 = document.querySelector("#m17");
const m18 = document.querySelector("#m18");
const m19 = document.querySelector("#m19");
const m20 = document.querySelector("#m20");
const m21 = document.querySelector("#m21");
const m22 = document.querySelector("#m22");

m1.addEventListener("click", playM0);
function playM0() {
  indexSong =0;
  song.setAttribute("src", musics[0].src);
  playPause(0);
 musicName.innerHTML = 'Akuma No Ko';
}
m2.addEventListener("click", playM1);
function playM1() {
 indexSong = 1;
  song.setAttribute("src", musics[1].src);
  playPause(1);
  musicName.innerHTML = 'Bài Ca Tôm Cá';
}
m3.addEventListener("click", playM2);
function playM2() {
  indexSong =2;
  song.setAttribute("src", musics[2].src);
  playPause(2);
  musicName.innerHTML = 'Chuyện Đôi Ta';
}
m4.addEventListener("click", playM3);
function playM3() {
 indexSong = 3;
  song.setAttribute("src", musics[3].src);
  playPause(3);
  musicName.innerHTML = 'Comethru';
}
m5.addEventListener("click", playM4);
function playM4() {
 indexSong = 4;
  song.setAttribute("src", musics[4].src);
  playPause(4);
  musicName.innerHTML = 'Cool For The Summer';
}
m6.addEventListener("click", playM5);
function playM5() {
 indexSong = 5;
  song.setAttribute("src", musics[5].src);
  playPause(5);
  musicName.innerHTML = 'Dancin';
}
m7.addEventListener("click", playM6);
function playM6() {
 indexSong = 6;
  song.setAttribute("src", musics[6].src);
  playPause(6);
  musicName.innerHTML = 'Dolla Sign Smile';
}
m8.addEventListener("click", playM7);
function playM7() {
 indexSong = 7;
  song.setAttribute("src", musics[7].src);
  playPause(7);
  musicName.innerHTML = 'Dù Cho Mai Về Sau';
}
m9.addEventListener("click", playM8);
function playM8() {
 indexSong = 8;
  song.setAttribute("src", musics[8].src);
  playPause(8);
  musicName.innerHTML = 'Em Là';
}
m10.addEventListener("click", playM9);
function playM9() {
 indexSong = 9;
  song.setAttribute("src", musics[9].src);
  playPause(9);
  musicName.innerHTML = 'I Love You So';
}
m11.addEventListener("click", playM10);
function playM10() {
 indexSong = 10;
  song.setAttribute("src", musics[10].src);
  playPause(10);
  musicName.innerHTML = 'Không Phai';
}
m12.addEventListener("click", playM11);
function playM11() {
 indexSong = 11;
  song.setAttribute("src", musics[11].src);
  playPause(11);
  musicName.innerHTML = 'Lovely';
}
m13.addEventListener("click", playM12);
function playM12() {
 indexSong = 12;
  song.setAttribute("src", musics[12].src);
  playPause(12);
  musicName.innerHTML = 'Mặt Mộc';
}
m14.addEventListener("click", playM13);
function playM13() {
 indexSong = 13;
  song.setAttribute("src", musics[13].src);
  playPause(13);
  musicName.innerHTML = 'Một Nhà';
}
m15.addEventListener("click", playM14);
function playM14() {
 indexSong = 14;
  song.setAttribute("src", musics[14].src);
  playPause(14);
  musicName.innerHTML = 'Ngôi Nhà Hoa Hồng Mashup';
}
m16.addEventListener("click", playM15);
function playM15() {
 indexSong = 15;
  song.setAttribute("src", musics[15].src);
  playPause(15);
  musicName.innerHTML = 'Nothing On You';
}
m17.addEventListener("click", playM16);
function playM16() {
 indexSong = 16;
  song.setAttribute("src", musics[16].src);
  playPause(16);
  musicName.innerHTML = 'Savage Love';
}
m18.addEventListener("click", playM17);
function playM17() {
 indexSong = 17;
  song.setAttribute("src", musics[17].src);
  playPause(17);
  musicName.innerHTML = 'Sing Me To Sleep';
}
m19.addEventListener("click", playM18);
function playM18() {
 indexSong = 18;
  song.setAttribute("src", musics[18].src);
  playPause(18);
  musicName.innerHTML = 'Wake Up In The Sky';
}
m20.addEventListener("click", playM19);
function playM19() {
 indexSong = 19;
  song.setAttribute("src", musics[19].src);
  playPause(19);
  musicName.innerHTML = 'What They Want';
}
m21.addEventListener("click", playM20);
function playM20() {
 indexSong = 20;
  song.setAttribute("src", musics[20].src);
  playPause(20);
  musicName.innerHTML = 'Your Name';
}


// <!-- button buka undangan-->
document.getElementById('btn_page').addEventListener('click', function () {
    var audio = document.getElementById("backsound");
    audio.play();
});

function changePage() {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const containertext2 = document.querySelector('try_text')
    const content = document.getElementById('content')
    const changePageBtn = document.querySelector('btn_page');

    page1.style.opacity = '0'; // Mengubah opacity halaman pertama menjadi 0
    page2.style.display = 'block'; // Menampilkan halaman kedua
    setTimeout(() => {
        page2.style.opacity = '1'; // Mengubah opacity halaman kedua menjadi 1
    }, 100); // Menunggu sedikit sebelum mengubah opacity untuk memberikan efek transisi
    page1.style.display = 'none'; // Menyembunyikan tombol ganti halaman
    containertext2.classList.add('.animate');
}

// <============================================================================================>

// animatescroll
document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");

    function isInView(element) {
      const boxTop = element.getBoundingClientRect().top;
      return boxTop < window.innerHeight - 50 ;
    }

    function applyAnimation(element) {
      element.style.opacity = 1;
      element.classList.add("animate");
    }

    function removeAnimation(element) {
      element.style.opacity = 0;
      element.classList.remove("animate");
    }

    function checkInView() {
      boxes.forEach((box) => {
        if (isInView(box)) {
          applyAnimation(box);
        } else {
          removeAnimation(box);
        }
      });
    }

    // Initial check on page load
    checkInView();

    // Check on scroll
    document.addEventListener("scroll", checkInView);
  });
      
// <============================================================================================>


// <!-- setting countdown.js -->
simplyCountdown('.simply-countdown', {
    year: 2025, // required
    month: 6, // required
    day: 28, // required
    hours: 0, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'day', plural: 'hari' },
        hours: { singular: 'hour', plural: 'jam' },
        minutes: { singular: 'minute', plural: 'menit' },
        seconds: { singular: 'second', plural: 'detik' }
    },
    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: false,
    onEnd: function () {
        // your code
        return;
    },
    refresh: 1000, //default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false, // enable count up if set to true
});

// <============================================================================================>

// <!-- backsound -->
var audio = document.getElementById("backsound");

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function setVolume(volume) {
    audio.volume = volume;
}

// <!-- =============================================== -->
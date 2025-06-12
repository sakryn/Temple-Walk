const audio_01 = document.getElementById("Audio_01");
const audio_02 = document.getElementById("Audio_02");
const audio_03 = document.getElementById("Audio_03");
const audio_04 = document.getElementById("Audio_04");
const audio_05 = document.getElementById("Audio_05");
const audio_06 = document.getElementById("Audio_06");
const audio_07 = document.getElementById("Audio_07");
const audio_08 = document.getElementById("Audio_08");
const audio_09 = document.getElementById("Audio_09");
const audio_10 = document.getElementById("Audio_10");
const audio_11 = document.getElementById("Audio_11");
const audio_12 = document.getElementById("Audio_12");
const audio_13 = document.getElementById("Audio_13");
const audio_14 = document.getElementById("Audio_14");
const audio_15 = document.getElementById("Audio_15");
const audio_16 = document.getElementById("Audio_16");
const audio_17 = document.getElementById("Audio_17");
const audio_18 = document.getElementById("Audio_18");
const audio_silent = document.getElementById("Audio_silent")

function audioPlayer(src) {

    if (src === "01") {
        audio_01.play();
        audio_01.onended = function () { audio_02.play(); };
        audio_02.onended = function () { audio_03.play(); };
        audio_03.onended = function () { window.exitEnabled = true; };
    }


    else if (src === "02") {
        audio_04.play();
        audio_04.onended = function () { audio_05.play(); };
        audio_05.onended = function () { audio_06.play(); };
        audio_06.onended = function () { audio_silent.play(); };
        audio_silent.onended = function () { audio_07.play(); };
        audio_07.onended = function () { window.exitEnabled = true; };
    }


    else if (src === "03") {
        audio_08.play();
        audio_08.onended = function () { audio_09.play(); };
        audio_09.onended = function () { audio_silent.play(); };
        audio_silent.onended = function () { audio_10.play(); };
        audio_10.onended = function () { audio_11.play(); };
        audio_10.onended = function () { window.exitEnabled = true; };
    }


    else if (src === "04") {
        audio_12.play();
        audio_12.onended = function () { audio_13.play(); };
        audio_13.onended = function () { window.exitEnabled = true; };
    }


    else if (src === "05") {
        audio_14.play();
        audio_14.onended = function () { audio_15.play(); };
        audio_15.onended = function () { audio_16.play(); };
        audio_16.onended = function () { audio_17.play(); };
        audio_17.onended = function () { audio_18.play(); };
        audio_18.onended = function () { window.exitEnabled = true; };
    }
}
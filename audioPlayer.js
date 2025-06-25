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
const audio_silent = document.getElementById("Audio_silent");
const audio_plate = document.getElementById("Broken Plate SFX");

function audioPlayer(src) {

    showCaptions();

    if (src === "01") {
        audio_01.play();
        changeModel("speak");
        changeCaptions("01");
        audio_01.onended = function () { audio_02.play(); changeCaptions("02"); };
        audio_02.onended = function () { audio_03.play(); changeCaptions("03"); };
        audio_03.onended = function () { window.exitEnabled = true; hideCaptions(); changeModel("stand"); changeCaptions("04"); };
    }


    else if (src === "02") {
        audio_04.play();
        changeModel("speak");
        audio_04.onended = function () { audio_05.play(); changeCaptions("05"); };
        audio_05.onended = function () { audio_06.play(); changeCaptions("06"); };
        audio_06.onended = function () { audio_silent.play(); timerCountdown(15) };
        audio_silent.onended = function () { audio_07.play(); changeCaptions("07"); };
        audio_07.onended = function () { window.exitEnabled = true; hideCaptions(); changeModel("stand"); changeCaptions("08"); };
    }


    else if (src === "03") {
        audio_08.play();
        changeModel("speak");
        audio_08.onended = function () { audio_09.play(); changeCaptions("09"); };
        audio_09.onended = function () { audio_silent.play(); timerCountdown(15) };
        audio_silent.onended = function () { audio_10.play(); changeCaptions("10"); };
        audio_10.onended = function () {audio_11.play(); changeCaptions("11"); };
        audio_11.onended = function () {stopBackgroundMusic(); changeBowl(); audio_plate.play(); backgroundMusic();
                                        window.exitEnabled = true; hideCaptions(); changeModel("stand"); changeCaptions("12"); };
    }


    else if (src === "04") {
        audio_12.play();
        changeModel("speak");
        audio_12.onended = function () { audio_13.play(); changeCaptions("13"); };
        audio_13.onended = function () { window.exitEnabled = true; hideCaptions(); changeModel("stand"); changeCaptions("14"); };
    }


    else if (src === "05") {
        audio_14.play();
        changeModel("speak");
        audio_14.onended = function () { audio_15.play(); changeCaptions("15"); };
        audio_15.onended = function () { audio_16.play(); changeCaptions("16"); };
        audio_16.onended = function () { audio_17.play(); changeCaptions("17"); };
        audio_17.onended = function () { audio_18.play(); changeCaptions("18"); };
        audio_18.onended = function () { window.exitEnabled = true; hideCaptions(); changeModel("stand"); }
    }
}
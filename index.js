//score:
console.log('100/100\n1.На выбор 4 древних - 20.\n2.На выбор 5 уровней сложности - 25.\n3.Карты замешиваются согласно правилам - 40.\n4.Есть трекер текущего состояния колоды - 20.');

const itemList = document.querySelector('.list');
const items = document.querySelectorAll('.list_item');
const ancientCard = document.querySelector('.ancient_card');
const medium = document.querySelector('.medium');
medium.addEventListener('click', colorCardsNumbers);

const trackerFirst = document.querySelector('.first_stage_tracker');
const trackerSecond = document.querySelector('.second_stage_tracker');

const veryLow = document.querySelector('.veryLow');
veryLow.addEventListener('click', veryEasyNumbers);
const Low = document.querySelector('.low');
Low.addEventListener('click', easyNumbers);
const Hard = document.querySelector('.high');
Hard.addEventListener('click', hardNumbers);
const veryHard = document.querySelector('.veryHigh');
veryHard.addEventListener('click', veryHardNumbers);
const difficultyChoose = document.querySelector('.difficulty_choose');
const tracker = document.querySelector('.current_state');

const currentCard = document.querySelector('.current_card');

const turenedCard = document.querySelector('.turned_deck');
turenedCard.addEventListener('click', firstStageFunc);
const deck = document.querySelector('.deck');
const shuffleBtn = document.querySelector('.shuffle_btn');
shuffleBtn.addEventListener('click', showDeck);


difficultyChoose.addEventListener('click', () => {
    shuffleBtn.classList.remove('unvisible');
    tracker.classList.add('unvisible');
    deck.classList.add('unvisible');
})

const currentCardInfo1 = document.querySelector('.current_card_text1');
const currentCardInfo2 = document.querySelector('.current_card_text2');

var shuffleArr = [];
var shuffledDeck = [];
var greenArr = [];
var brownArr = [];
var blueArr = [];
var easyGreenArr = [];
var normalGreenArr = [];
var hardGreenArr = [];
var easyBrownArr = [];
var normalBrownArr = [];
var hardBrownArr = [];
var easyBlueArr = [];
var normalBlueArr = [];
var hardBlueArr = [];

let currentAncient;
const green1 = document.getElementById('green1');
const green2 = document.getElementById('green2');
const green3 = document.getElementById('green3');
const brown1 = document.getElementById('brown1');
const brown2 = document.getElementById('brown2');
const brown3 = document.getElementById('brown3');
const blue1 = document.getElementById('blue1');
const blue2 = document.getElementById('blue2');
const blue3 = document.getElementById('blue3');

function deleteVariables() {
    trackerFirst.classList.remove('crossed');
    trackerSecond.classList.remove('crossed');
    difficultyChoose.classList.add('unvisible');
    currentCard.style.backgroundImage = 'url()';
    currentCardInfo1.textContent = '';
    currentCardInfo2.textContent = '';
    deck.classList.add('unvisible');
    veryLow.classList.remove('active_item');
    Low.classList.remove('active_item');
    medium.classList.remove('active_item');
    Hard.classList.remove('active_item');
    veryHard.classList.remove('active_item');
    veryLow.classList.remove('unvisible');
    Low.classList.remove('unvisible');
    medium.classList.remove('unvisible');
    Hard.classList.remove('unvisible');
    veryHard.classList.remove('unvisible');
    shuffleBtn.classList.add('unvisible');
    tracker.classList.add('unvisible');
    green1.textContent = '';
    brown1.textContent = '';
    blue1.textContent = '';
    green2.textContent = '';
    brown2.textContent = '';
    blue2.textContent = '';
    green3.textContent = '';
    brown3.textContent = '';
    blue3.textContent = '';
    greenArr = [];
    brownArr = [];
    blueArr = [];
    shuffleArr = [];
    shuffledDeck = [];
    easyGreenArr = [];
    normalGreenArr = [];
    hardGreenArr = [];
    easyBrownArr = [];
    normalBrownArr = [];
    hardBrownArr = [];
    easyBlueArr = [];
    normalBlueArr = [];
    hardBlueArr = [];
}

itemList.addEventListener('click', (event) => {
    deleteVariables();
    difficultyChoose.classList.remove('unvisible');
    if (event.target.classList.contains('azathoth')) {
        currentAncient = 0;
        activeAncient(0);
    }
    if (event.target.classList.contains('cthulthu')) {
        currentAncient = 1;
        activeAncient(1);
    }
    if (event.target.classList.contains('jog_sothoth')) {
        currentAncient = 2;
        activeAncient(2);
    }
    if (event.target.classList.contains('schub_niggurat')) {
        currentAncient = 3;
        activeAncient(3);
    }
    difficultyChoose.classList.remove('unvisible');
    raskladka();
})

function activeAncient(n) {
    for (let item of items) {
        item.classList.remove('active_item');
        items[n].classList.add('active_item');
    }
    let img = `./assets/Ancients/${n}.png`;
    ancientCard.style.backgroundImage = `url(${img})`;
}

import ancientsData from './data/ancients.js';
function raskladka() {
    shuffleArr = [
        ancientsData[currentAncient].firstStage.greenCards,
        ancientsData[currentAncient].firstStage.brownCards,
        ancientsData[currentAncient].firstStage.blueCards,
        ancientsData[currentAncient].secondStage.greenCards,
        ancientsData[currentAncient].secondStage.brownCards,
        ancientsData[currentAncient].secondStage.blueCards,
        ancientsData[currentAncient].thirdStage.greenCards,
        ancientsData[currentAncient].thirdStage.brownCards,
        ancientsData[currentAncient].thirdStage.blueCards
    ]
    return shuffleArr
}

import blueCardsData from './data/mythicCards/blue/index.js'
import brownCardsData from './data/mythicCards/brown/index.js'
import greenCardsData from './data/mythicCards/green/index.js'

function getRandomArr(range, count) {
    let m = {};
    let randomArr = [];
    for (let i = 0; i < count; ++i) {
        let r = Math.floor(Math.random() * (range - i));
        let x;
        if (r in m) {
            x = m[r];
        }
        else {
            x = r;
        }
        randomArr.push(x + 1);
        let l = range - i - 1;
        if (l in m) {
            m[r] = m[l];
        }
        else {
            m[r] = l;
        }
    }
    return randomArr;
}


//card sorting by difficulty

function easyGreen() {
    for (let x = 0; x < greenCardsData.length; x++) {
        if (greenCardsData[x].difficulty === 'easy') {
            easyGreenArr.push(x + 1)
        }
    }
    return easyGreenArr;
}
function normalGreen() {
    for (let i = 0; i < greenCardsData.length; i++) {
        if (greenCardsData[i].difficulty === 'normal') {
            normalGreenArr.push(i + 1);
        }
    }
    return normalGreenArr;
}
function hardGreen() {
    for (let i = 0; i < greenCardsData.length; i++) {
        if (greenCardsData[i].difficulty === 'hard') {
            hardGreenArr.push(i + 1);
        }
    }
    return hardGreenArr;
}


function easyBrown() {
    for (let x = 0; x < brownCardsData.length; x++) {
        if (brownCardsData[x].difficulty === 'easy') {
            easyBrownArr.push(x + 1);
        }
    }
    return easyBrownArr;
}
function normalBrown() {
    for (let i = 0; i < brownCardsData.length; i++) {
        if (brownCardsData[i].difficulty === 'normal') {
            normalBrownArr.push(i + 1);
        }
    }
    return normalBrownArr;
}
function hardBrown() {
    for (let i = 0; i < brownCardsData.length; i++) {
        if (brownCardsData[i].difficulty === 'hard') {
            hardBrownArr.push(i + 1);
        }
    }
    return hardBrownArr;
}

function easyBlue() {
    for (let x = 0; x < blueCardsData.length; x++) {
        if (blueCardsData[x].difficulty === 'easy') {
            easyBlueArr.push(x + 1);
        }
    }
    return easyBlueArr;
}
function normalBlue() {
    for (let i = 0; i < blueCardsData.length; i++) {
        if (blueCardsData[i].difficulty === 'normal') {
            normalBlueArr.push(i + 1);
        }
    }
    return normalBlueArr;
}
function hardBlue() {
    for (let i = 0; i < blueCardsData.length; i++) {
        if (blueCardsData[i].difficulty === 'hard') {
            hardBlueArr.push(i + 1);
        }
    }
    return hardBlueArr;
}
//cards sorting ends

//levels arrays:
//very easy
function veryEeasyDeckGreen() {
    easyGreen();
    normalGreen();
    let tempArr = getRandomArr(easyGreenArr.length, easyGreenArr.length);
    let sum = shuffleArr[0] + shuffleArr[3] + shuffleArr[6];
    if (sum <= easyGreenArr.length) {
        for (let i = 0; i < sum; i++) {
            greenArr[i] = [easyGreenArr[tempArr[i] - 1], 'green'];
        }
        return greenArr;
    }
    else {
        for (let i = 0; i < easyGreenArr.length; i++) {
            greenArr[i] = easyGreenArr[tempArr[i] - 1];
        }
        let delta = sum - easyGreenArr.length;
        let random = getRandomArr(normalGreenArr.length, delta);
        for (let p = 0; p < random.length; p++) {
            greenArr[5 + p] = normalGreenArr[random[p] - 1];
        }
        for (let t = 0; t < greenArr.length; t++) {
            greenArr[t] = [greenArr[t], 'green'];
        }
        return greenArr;
    }
}

function veryEeasyDeckBrown() {
    easyBrown();
    normalBrown();
    let tempArr = getRandomArr(easyBrownArr.length, easyBrownArr.length);
    let sum = shuffleArr[1] + shuffleArr[4] + shuffleArr[7];
    if (sum <= easyBrownArr.length) {
        for (let i = 0; i < sum; i++) {
            brownArr[i] = [easyBrownArr[tempArr[i] - 1], 'brown'];
        }
        return brownArr;
    }
    else {
        for (let i = 0; i < easyBrownArr.length; i++) {
            brownArr[i] = easyBrownArr[tempArr[i] - 1];
        }
        let delta = sum - easyBrownArr.length;
        let random = getRandomArr(normalBrownArr.length, delta);
        for (let p = 0; p < random.length; p++) {
            brownArr[5 + p] = normalBrownArr[random[p] - 1];
        }
        for (let t = 0; t < brownArr.length; t++) {
            brownArr[t] = [brownArr[t], 'brown'];
        }
        return brownArr;
    }
}

function veryEeasyDeckBlue() {
    easyBlue();
    normalBlue();
    let tempArr = getRandomArr(easyBlueArr.length, easyBlueArr.length);
    let sum = shuffleArr[2] + shuffleArr[5] + shuffleArr[8];
    if (sum <= easyBlueArr.length) {
        for (let i = 0; i < sum; i++) {
            blueArr[i] = [easyBlueArr[tempArr[i] - 1], 'blue'];
        }
        return blueArr;
    }
    else {
        for (let i = 0; i < easyBlueArr.length; i++) {
            blueArr[i] = easyBlueArr[tempArr[i] - 1];
        }
        let delta = sum - easyBlueArr.length;
        let random = getRandomArr(normalBlueArr.length, delta);
        console.log(random)
        for (let p = 0; p < random.length; p++) {
            blueArr[5 + p] = normalBlueArr[random[p] - 1];
        }
        console.log(blueArr)
        for (let t = 0; t < blueArr.length; t++) {
            blueArr[t] = [blueArr[t], 'blue'];
        }
        return blueArr;
    }
}
//veryeasy end

//easy level
function easyDeckGreen() {
    easyGreen();
    normalGreen();
    let mixedArr = easyGreenArr.concat(normalGreenArr);
    let sum = shuffleArr[0] + shuffleArr[3] + shuffleArr[6];
    let tempArr = getRandomArr(mixedArr.length, sum);
    for (let i = 0; i < sum; i++) {
        greenArr[i] = [mixedArr[tempArr[i] - 1], 'green'];
    }
    return greenArr;
}
function easyDeckBrown() {
    easyBrown();
    normalBrown();
    let mixedArr = easyBrownArr.concat(normalBrownArr);
    let sum = shuffleArr[1] + shuffleArr[4] + shuffleArr[7];
    let tempArr = getRandomArr(mixedArr.length, sum);
    for (let i = 0; i < sum; i++) {
        brownArr[i] = [mixedArr[tempArr[i] - 1], 'brown'];
    }
    return brownArr;
}

function easyDeckBlue() {
    easyBlue();
    normalBlue();
    let mixedArr = easyBlueArr.concat(normalBlueArr);
    let sum = shuffleArr[2] + shuffleArr[5] + shuffleArr[8];
    let tempArr = getRandomArr(mixedArr.length, sum);
    for (let i = 0; i < sum; i++) {
        blueArr[i] = [mixedArr[tempArr[i] - 1], 'blue'];
    }
    return blueArr;
}
//easy end

//hard level
function hardDeckGreen() {
    hardGreen();
    normalGreen();
    let mixedArr = normalGreenArr.concat(hardGreenArr);
    let sum = shuffleArr[0] + shuffleArr[3] + shuffleArr[6];
    let tempArr = getRandomArr(mixedArr.length, sum);
    for (let i = 0; i < sum; i++) {
        greenArr[i] = [mixedArr[tempArr[i] - 1], 'green'];
    }
    return greenArr;
}

function hardDeckBrown() {
    hardBrown();
    normalBrown();
    let mixedArr = normalBrownArr.concat(hardBrownArr);
    let sum = shuffleArr[1] + shuffleArr[4] + shuffleArr[7];
    let tempArr = getRandomArr(mixedArr.length, sum);
    for (let i = 0; i < sum; i++) {
        brownArr[i] = [mixedArr[tempArr[i] - 1], 'brown'];
    }
    return brownArr;
}

function hardDeckBlue() {
    hardBlue();
    normalBlue();
    let mixedArr = normalBlueArr.concat(hardBlueArr);
    let sum = shuffleArr[2] + shuffleArr[5] + shuffleArr[8];
    let tempArr = getRandomArr(mixedArr.length, sum);
    for (let i = 0; i < sum; i++) {
        blueArr[i] = [mixedArr[tempArr[i] - 1], 'blue'];
    }
    return blueArr;
}
//hard ends

//very hard level
function veryHardDeckGreen() {
    hardGreen();
    normalGreen();
    let tempArr = getRandomArr(hardGreenArr.length, hardGreenArr.length);
    let sum = shuffleArr[0] + shuffleArr[3] + shuffleArr[6];
    if (sum <= hardGreenArr.length) {
        for (let i = 0; i < sum; i++) {
            greenArr[i] = [hardGreenArr[tempArr[i] - 1], 'green'];
        }
        return greenArr;
    }
    else {
        for (let i = 0; i < hardGreenArr.length; i++) {
            greenArr[i] = hardGreenArr[tempArr[i] - 1];
        }
        let delta = sum - hardGreenArr.length;
        let random = getRandomArr(normalGreenArr.length, delta);
        for (let p = 0; p < random.length; p++) {
            greenArr[5 + p] = normalGreenArr[random[p] - 1];
        }
        for (let t = 0; t < greenArr.length; t++) {
            greenArr[t] = [greenArr[t], 'green'];
        }
        return greenArr;
    }
}
function veryHardDeckBrown() {
    hardBrown();
    normalBrown();
    let tempArr = getRandomArr(hardBrownArr.length, hardBrownArr.length);
    let sum = shuffleArr[1] + shuffleArr[4] + shuffleArr[7];
    if (sum <= hardBrownArr.length) {
        for (let i = 0; i < sum; i++) {
            brownArr[i] = [hardBrownArr[tempArr[i] - 1], 'brown'];
        }
        return brownArr;
    }
    else {
        for (let i = 0; i < hardBrownArr.length; i++) {
            brownArr[i] = hardBrownArr[tempArr[i] - 1];
        }
        let delta = sum - hardBrownArr.length;
        let random = getRandomArr(normalBrownArr.length, delta);
        for (let p = 0; p < random.length; p++) {
            brownArr[5 + p] = normalBrownArr[random[p] - 1];
        }
        for (let t = 0; t < brownArr.length; t++) {
            brownArr[t] = [brownArr[t], 'brown'];
        }
        return brownArr;
    }
}
function veryHardDeckBlue() {
    hardBlue();
    normalBlue();
    let tempArr = getRandomArr(hardBlueArr.length, hardBlueArr.length);
    let sum = shuffleArr[2] + shuffleArr[5] + shuffleArr[8];
    if (sum <= hardBlueArr.length) {
        for (let i = 0; i < sum; i++) {
            blueArr[i] = [hardBlueArr[tempArr[i] - 1], 'blue'];
        }
        return blueArr;
    }
    else {
        for (let i = 0; i < hardBlueArr.length; i++) {
            blueArr[i] = hardBlueArr[tempArr[i] - 1];
        }
        let delta = sum - hardBlueArr.length;
        let random = getRandomArr(normalBlueArr.length, delta);
        for (let p = 0; p < random.length; p++) {
            blueArr[5 + p] = normalBlueArr[random[p] - 1];
        }
        for (let t = 0; t < blueArr.length; t++) {
            blueArr[t] = [blueArr[t], 'blue'];
        }
        return blueArr;
    }
}
//very hard ends

//normal level
function greenCardsNumbers() {
    //for green
    let totalGreen = shuffleArr[0] + shuffleArr[3] + shuffleArr[6];
    let tempArr = getRandomArr(greenCardsData.length, totalGreen);
    for (let i = 0; i < tempArr.length; i++) {
        greenArr[i] = [tempArr[i], 'green'];
    }
    return greenArr;
}
function brownCardsNumbers() {
    //for brown
    let totalBrown = shuffleArr[1] + shuffleArr[4] + shuffleArr[7];
    let tempArr = getRandomArr(brownCardsData.length, totalBrown);
    for (let i = 0; i < tempArr.length; i++) {
        brownArr[i] = [tempArr[i], 'brown'];
    }
    return brownArr;
}

function blueCardsNumbers() {
    //for blue
    let totalBlue = shuffleArr[2] + shuffleArr[5] + shuffleArr[8];
    let tempArr = getRandomArr(blueCardsData.length, totalBlue);
    for (let i = 0; i < tempArr.length; i++) {
        blueArr[i] = [tempArr[i], 'blue'];
    }
    return blueArr;
}

function colorCardsNumbers() {
    medium.classList.add('active_item');
    veryLow.classList.add('unvisible');
    Low.classList.add('unvisible');
    Hard.classList.add('unvisible');
    veryHard.classList.add('unvisible');
    let turnedImg = `./assets/mythicCardBackground.png`;
    turenedCard.style.backgroundImage = `url(${turnedImg})`;
    greenCardsNumbers();
    brownCardsNumbers();
    blueCardsNumbers();
    stagesCardsPrepare();
}

function veryEasyNumbers() {
    veryLow.classList.add('active_item');
    Low.classList.add('unvisible');
    medium.classList.add('unvisible');
    Hard.classList.add('unvisible');
    veryHard.classList.add('unvisible');
    let turnedImg = `./assets/mythicCardBackground.png`;
    turenedCard.style.backgroundImage = `url(${turnedImg})`;
    veryEeasyDeckGreen();
    veryEeasyDeckBrown();
    veryEeasyDeckBlue();
    stagesCardsPrepare();
}

function easyNumbers() {
    Low.classList.add('active_item');
    veryLow.classList.add('unvisible');
    medium.classList.add('unvisible');
    Hard.classList.add('unvisible');
    veryHard.classList.add('unvisible');
    let turnedImg = `./assets/mythicCardBackground.png`;
    turenedCard.style.backgroundImage = `url(${turnedImg})`;
    easyDeckGreen();
    easyDeckBrown();
    easyDeckBlue();
    stagesCardsPrepare();
}

function hardNumbers() {
    Hard.classList.add('active_item');
    veryLow.classList.add('unvisible');
    Low.classList.add('unvisible');
    medium.classList.add('unvisible');
    veryHard.classList.add('unvisible');
    let turnedImg = `./assets/mythicCardBackground.png`;
    turenedCard.style.backgroundImage = `url(${turnedImg})`;
    hardDeckGreen();
    hardDeckBrown();
    hardDeckBlue();
    stagesCardsPrepare();
}

function veryHardNumbers() {
    veryHard.classList.add('active_item');
    veryLow.classList.add('unvisible');
    Low.classList.add('unvisible');
    medium.classList.add('unvisible');
    Hard.classList.add('unvisible');
    let turnedImg = `./assets/mythicCardBackground.png`;
    turenedCard.style.backgroundImage = `url(${turnedImg})`;
    veryHardDeckGreen();
    veryHardDeckBrown();
    veryHardDeckBlue();
    stagesCardsPrepare();
}

function showDeck() {
    shuffleBtn.classList.add('unvisible');
    deck.classList.remove('unvisible');
    tracker.classList.remove('unvisible');
    turenedCard.classList.remove('unvisible');
    green1.textContent = shuffledDeck[0][0].length;
    brown1.textContent = shuffledDeck[0][1].length;
    blue1.textContent = shuffledDeck[0][2].length;
    green2.textContent = shuffledDeck[1][0].length;
    brown2.textContent = shuffledDeck[1][1].length;
    blue2.textContent = shuffledDeck[1][2].length;
    green3.textContent = shuffledDeck[2][0].length;
    brown3.textContent = shuffledDeck[2][1].length;
    blue3.textContent = shuffledDeck[2][2].length;
}

function stagesCardsPrepare() {
    shuffledDeck = [];
    let firstStageDeck = [[], [], []];
    let secondStageDeck = [[], [], []];
    let thirdStageDeck = [[], [], []];
    //1st deck
    for (let j = 0; j < shuffleArr[0]; j++) {
        firstStageDeck[0].push(greenArr[j]);
    }
    for (let i = 0; i < shuffleArr[1]; i++) {
        firstStageDeck[1].push(brownArr[i]);
    }
    for (let k = 0; k < shuffleArr[2]; k++) {
        firstStageDeck[2].push(blueArr[k]);
    }
    //2nd deck
    for (let q = shuffleArr[0]; q < shuffleArr[3] + shuffleArr[0]; q++) {
        secondStageDeck[0].push(greenArr[q]);
    }
    for (let m = shuffleArr[1]; m < shuffleArr[4] + shuffleArr[1]; m++) {
        secondStageDeck[1].push(brownArr[m]);
    }
    for (let p = shuffleArr[2]; p < shuffleArr[5] + shuffleArr[2]; p++) {
        secondStageDeck[2].push(blueArr[p]);
    }
    //3rd deck
    for (let r = shuffleArr[3] + shuffleArr[0]; r < shuffleArr[0] + shuffleArr[3] + shuffleArr[6]; r++) {
        thirdStageDeck[0].push(greenArr[r]);
    }
    for (let u = shuffleArr[1] + shuffleArr[4]; u < shuffleArr[1] + shuffleArr[4] + shuffleArr[7]; u++) {
        thirdStageDeck[1].push(brownArr[u]);
    }
    for (let b = shuffleArr[2] + shuffleArr[5]; b < shuffleArr[2] + shuffleArr[5] + shuffleArr[8]; b++) {
        thirdStageDeck[2].push(blueArr[b]);
    }
    shuffledDeck.push(firstStageDeck, secondStageDeck, thirdStageDeck);
    return shuffledDeck;
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}
var smallImg;
function firstStageFunc() {
    if (shuffledDeck[0][0].length + shuffledDeck[0][1].length + shuffledDeck[0][2].length != 0) {
        let x = getRandomNumber(0, 2);
        if (shuffledDeck[0][x].length === 0) {
            firstStageFunc();
        }
        let shifted = shuffledDeck[0][x].shift();
        console.log(shifted);
        smallImg = `./assets/MythicCards/${shifted[1]}/${shifted[1]}${shifted[0]}.png`
        currentCard.style.backgroundImage = `url('${smallImg}')`;
        currentCardInfo1.textContent = `id: ${shifted[1]}${shifted[0]}`;
        if (shifted[1] === 'green') {
            green1.textContent = shuffledDeck[0][0].length;
            currentCardInfo2.textContent = `difficulty: ${greenCardsData[shifted[0] - 1].difficulty}`;
        }
        if (shifted[1] === 'brown') {
            brown1.textContent = shuffledDeck[0][1].length;
            currentCardInfo2.textContent = `difficulty: ${brownCardsData[shifted[0] - 1].difficulty}`;
        }
        if (shifted[1] === 'blue') {
            blue1.textContent = shuffledDeck[0][2].length;
            currentCardInfo2.textContent = `difficulty: ${blueCardsData[shifted[0] - 1].difficulty}`;
        }
    }
    else {
        trackerFirst.classList.add('crossed');
        secondStageFunc();
    }
}
function secondStageFunc() {
    if (shuffledDeck[1][0].length + shuffledDeck[1][1].length + shuffledDeck[1][2].length != 0) {
        let x = getRandomNumber(0, 2);
        if (shuffledDeck[1][x].length === 0) {
            secondStageFunc();
        }
        let shifted = shuffledDeck[1][x].shift();
        console.log(shifted)
        smallImg = `./assets/MythicCards/${shifted[1]}/${shifted[1]}${shifted[0]}.png`
        currentCard.style.backgroundImage = `url('${smallImg}')`;
        currentCardInfo1.textContent = `id: ${shifted[1]}${shifted[0]}`;
        if (shifted[1] === 'green') {
            green2.textContent = shuffledDeck[1][0].length;
            currentCardInfo2.textContent = `difficulty: ${greenCardsData[shifted[0] - 1].difficulty}`;

        }
        if (shifted[1] === 'brown') {
            brown2.textContent = shuffledDeck[1][1].length;
            currentCardInfo2.textContent = `difficulty: ${brownCardsData[shifted[0] - 1].difficulty}`;
        }
        if (shifted[1] === 'blue') {
            blue2.textContent = shuffledDeck[1][2].length;
            currentCardInfo2.textContent = `difficulty: ${blueCardsData[shifted[0] - 1].difficulty}`;
        }
    }
    else {
        trackerSecond.classList.add('crossed');
        thirdStageFunc();
    }
}
function thirdStageFunc() {
    if (shuffledDeck[2][0].length + shuffledDeck[2][1].length + shuffledDeck[2][2].length != 0) {
        turenedCard.classList.remove('unvisible');
        let x = getRandomNumber(0, 2);
        if (shuffledDeck[2][x].length === 0) {
            thirdStageFunc();
        }
        let shifted = shuffledDeck[2][x].shift();
        smallImg = `./assets/MythicCards/${shifted[1]}/${shifted[1]}${shifted[0]}.png`
        currentCard.style.backgroundImage = `url('${smallImg}')`;
        currentCardInfo1.textContent = `id: ${shifted[1]}${shifted[0]}`;
        if (shifted[1] === 'green') {
            green3.textContent = shuffledDeck[2][0].length;
            currentCardInfo2.textContent = `difficulty: ${greenCardsData[shifted[0] - 1].difficulty}`;
        }
        if (shifted[1] === 'brown') {
            brown3.textContent = shuffledDeck[2][1].length;
            currentCardInfo2.textContent = `difficulty: ${brownCardsData[shifted[0] - 1].difficulty}`;

        }
        if (shifted[1] === 'blue') {
            blue3.textContent = shuffledDeck[2][2].length;
            currentCardInfo2.textContent = `difficulty: ${blueCardsData[shifted[0] - 1].difficulty}`;
        }
    }
    else {
        deleteVariables();
    }
}
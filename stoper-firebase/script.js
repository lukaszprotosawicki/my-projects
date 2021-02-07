
const btnStart = document.getElementById('start')
const btnNext = document.getElementById('next')
const btnStop = document.getElementById('stop')
const btnPause = document.getElementById('pause')
const btnSave = document.getElementById('save')
const btnReset = document.getElementById('reset')
const panelTime = document.getElementById('time')
const panelScores = document.getElementById('scores')
const closePopup = document.getElementById('close_popup');
const popup = document.getElementById('popup');
const oldScores = document.getElementById('oldscores');

let time = 0;
btnNext.disabled = true;
let idI;
let pauseStatus = false;
let data = [];

// const fetchData = () => {
//     firebase.firestore().collection('data').onSnapshot((data) => getDataFromFirebase(data));
// }

window.onload = function () {
    getDataFromFirebase();
}

const getDataFromFirebase = () => {
    // const dataTimes = firebase.database().ref('data').limitToLast(1);
    oldScores.innerHTML = "";
    db.collection('data').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            console.log(doc.data())
            let dataTime = doc.data()
            let scoresItem = (dataTime.times).join('<br>');
            let score = document.createElement('div');
            score.className = "score";
            score.innerHTML = `<div class="title">${dataTime.title}</div><div class="times">${scoresItem}</div>`;
            oldScores.appendChild(score);
        })
    })
}

const start = () => {
    if (btnStart.style.display === "block") {
        btnStart.style.display = "none";
        btnStop.style.display = "block";
        btnSave.style.display = "none";
        idI = setInterval(startTime, 10);
        btnNext.disabled = false;
        pauseStatus = false;
    } else {
        btnStart.style.display = "none";
        btnStop.style.display = "block";
        idI = setInterval(startTime, 10);
        btnNext.disabled = false;
    }
}

const startTime = () => {
    time++
    panelTime.textContent = (time / 100).toFixed(2).replace('.', ':');
}

const stopp = () => {
    if (btnStop.style.display === "block") {
        btnStop.style.display = "none";
        btnStart.style.display = "block";
        btnSave.style.display = "block";
        clearInterval(idI);
        btnNext.disabled = true;
    } else {
        btnStop.style.display = "none";
        btnStart.style.display = "block";
    }
}

const reset = () => {
    time = 0;
    panelTime.textContent = "0:00"
    clearInterval(idI);
    btnStop.style.display = "none";
    btnStart.style.display = "block";
    document.getElementById('scores').innerHTML = "";
}

const pause = () => {

    if (btnStart.style.display === "none") {
        clearInterval(idI);
        btnStart.style.display = "block";
        btnStop.style.display = "none";
        // btnNext.disabled = true;
        pauseStatus = true;
        btnSave.style.display = "block";
    } else {
        idI = setInterval(startTime, 10);
        btnStart.style.display = "none";
        btnStop.style.display = "block";
        btnNext.disabled = false;
        pauseStatus = false;
        btnSave.style.display = "none";
    }
}

const next = () => {
    if (pauseStatus === false) {
        let tableScores = document.getElementById("scores");
        let newPlayer = document.createElement("div");
        let names = ['Lukasz', 'Angelika', 'Justyna', 'Kamil', 'Grzesiek', 'Dawid', 'Agnieszka', 'Pawel', 'Dominik', 'Beata', 'Renata', 'Karolina', 'Judit', 'Ewa', 'Klaudia', 'Monika', 'Oskar', 'Bartek', 'Helena', 'Anna', 'Emanuela', 'Jessica', 'Brajanek', 'Cesar', 'Julian'];
        let randomNames = "";
        // console.log(pauseStatus)
        randomNames = names[Math.floor(Math.random() * names.length)];
        // newPlayer.innerHTML = (time / 100).toFixed(2) + " " + randomNames;
        newPlayer.innerHTML = ((time / 100).toFixed(2)).replace('.', ':') + " " + randomNames;
        tableScores.appendChild(newPlayer);
        data = [...data, ((time / 100).toFixed(2)).replace('.', ':')]
    } else {
        pauseStatus = true;
        alert("Zapauzowałeś stoper, nie możesz zapisać rekordu")
    }
}

const close = () => {
    popup.classList.remove('active');
    let postName = document.getElementById('post_name').value;
    const newData = {
        times: data,
        title: postName
    };
    firebase.firestore().collection('data').add(newData);
    postName.value = "";
    data = [];
    reset();
    getDataFromFirebase();
}

btnStart.addEventListener('click', start);
btnNext.addEventListener('click', next);
btnStop.addEventListener('click', stopp);
btnPause.addEventListener('click', pause);
btnSave.addEventListener('click', function () {
    popup.classList.add('active');
});
btnReset.addEventListener('click', reset);
closePopup.addEventListener('click', close)


// let inputKey = document.getElementById("scores");
// let inputValue = document.getElementById("scores");
// let btnSave1 = document.getElementById("save");

// reloadData();
// btnSave1.addEventListener("click", event => {
//     let key = inputKey;
//     let value = inputValue;

//     localStorage.setItem(key, value);


// })
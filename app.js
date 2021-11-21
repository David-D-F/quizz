const form         = document.querySelector('form');
const btn          = document.querySelector('button');
const reload       = document.querySelector('.reload');
const bonneRep     = document.querySelector('.bonneRep');
const arrayReponse = ['a', 'c', 'b'];
let count          = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let choice      = [];
    let reponseUn   = document.querySelector('input[name=q1]:checked').value;
    let reponseDeux = document.querySelector('input[name=q2]:checked').value;
    let reponseTrois = document.querySelector('input[name=q3]:checked').value;
    choice.push(reponseUn);
    choice.push(reponseDeux);
    choice.push(reponseTrois);

    for(let i = 0; i < arrayReponse.length; i++) {
        if(arrayReponse[i] !== choice[i]) {
            let bloc = document.querySelector(`.q${i+1}`);
            bloc.classList.add('mauvaiseReponse');
        } else {
            count++;
            let bloc = document.querySelector(`.q${i+1}`);
            bloc.style.backgroundColor = "green";
        }
    }

    bonneRep.classList.add('pRep');

    if(count <= 1) {
        bonneRep.textContent = `Aïe, va falloir revoir ses classiques sur le sport !
        ${count} bonne réponse !`;
    } else if (count > 1 && count <= 3) {
        bonneRep.textContent = `Vous avez obtenu ${count} bonne réponses`;
    }

    btn.setAttribute('disabled', true);
});

reload.addEventListener('click', (e) => {
    e.preventDefault();
    location.reload();
})
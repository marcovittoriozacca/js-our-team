const team = [
    {
        name: 'Wane Barnett',
        role: 'Founder & CEO',
        photo: './assets/img/wayne-barnett-founder-ceo.jpg',
        
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: './assets/img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: './assets/img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: './assets/img/angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: './assets/img/scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: './assets/img/barbara-ramos-graphic-designer.jpg',
    },
]

const mainHtml = document.querySelector('main .container .row');

//ciclo che mostra l'intero oggetto in console e nel DOM stampato momentaneamente nel body
//usiamo name per iterare il ciclo con gli elementi in base a quante volte è presente la key "name" negli oggetti. es: 5 oggetti con "nome", il ciclo viene eseguito 5 volte.
//ha anche funzione di indice quindi la usiamo come valore di indice nell'array per stampare i valori relativi a quello specifico oggetto in ordine
for(name in team){
    //per vedere gli oggetti dell'array in console
    // console.log(team[name]);

    mainHtml.innerHTML += `
        <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card text-center">
                <img class="card-img-top p-1 " src="${team[name].photo}" alt="team member"/>
                <div class="card-body">
                    <h4 class="card-title fw-bolder">${team[name].name}</h4>
                    <p class="card-text fw-bold ">${team[name].role}</p>
                </div>
            </div>
        </div>
    `
}
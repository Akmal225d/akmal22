const catalog = [
    {
        img: 'https://s1.livelib.ru/boocover/1003317448/200x305/2954/boocover.jpg',
        name: 'Гарри Поттер',
        years: '2021',
        description: 'very good',
        Price: '50 000'
    },
    {
        img: 'https://school.kontur.ru/Files/userfiles/file/2360-2.png',
        name: 'Монстр продаж',
        years: '2019',
    description: 'sad',
        Price: '133 000'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/5/5f/Steve-jobs.jpg/250px-Steve-jobs.jpg',
        name: 'Стив Джобс',
        years: '2011',
        description: 'good',
        Price: '33 000'
    }
]

const wrapper = document.querySelector('.wrapper')


catalog.forEach(card => {
        wrapper.innerHTML += `
        <div class="card">
                     <img src="${card.img}" alt="">
                    <h1>${card.name}</h1>
                    <h3>${card.years}</h3>
                    <p>${card.description}</p>
                    <h4>${card.Price}</h4>
                </div>
        `
})
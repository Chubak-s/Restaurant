import Vuex from 'vuex';
import dish1URL from '/src/assets/dish1.png'
import dish2URL from '/src/assets/dish2.png'
import dish3URL from '/src/assets/dish3.png'
import pilaf1URL from '/src/assets/pilaf1.png'
import pilaf2URL from '/src/assets/pilaf1.png'

export const store = new Vuex.Store({
    state: {
        weekDishList: [
            {id: 1, name: 'Плов узбекский', price:'590', description:'', img: dish1URL},
            {id: 2, name: 'Плов чайханский', price:'550', description:'', img: dish2URL},
            {id: 3, name: 'Плов самаркандский', price:'690', description:'', img: dish3URL}
        ],
        categories:[
            {name:'Плов', items: []},
            {name:'Горячие блюда', items: []},
            {name:'Салаты', items: []},
            {name:'Закуски', items: []},
            {name:'Японская кухня', items: []},
            {name:'Пицца', items: []},
            {name:'Супы', items: []},
            {name:'Мангал', items: []},
            {name:'Напитки', items: []},
            {name:'Соусы', items: []},
            {name:'Десерты', items: []},
        ],
        menu:[
            {id: 'dish1', name: 'Плов ташкентский с телятиной', price: 590, description:'Рассыпчатый плов из узбекского риса Лазер с обжаренной телятиной, жёлтой и красной морковью, гороха нут и репчатого лука.', img:pilaf1URL, category: 'pilaf'},
            {id: 'dish2', name: 'Плов ташкентский с бараниной', price: 590, description:'Рассыпчатый плов из узбекского риса Лазер с обжаренной бараниной, жёлтой и красной морковью, гороха нут и репчатого лука.', img:pilaf2URL, category: 'pilaf'}
        ],
        sum: 10,
        cart:[],
        loadMap(){
            const map = document.getElementById('map')
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0564d7dca7e402db66ebc08b8c44f1b5662ff8c5d15f27ce9b4b745e97791821&amp;width=979&amp;height=599&amp;lang=ru_RU&amp;scroll=true";
            map.appendChild(script)
        },

    },
    getters: {
        getWeekDishesList: state => {
            return state.weekDishList;
        },
        getCategoriesList: state => {
            state.menu.forEach((item)=> {
                if (item.category === 'pilaf')
                    state.categories[0].items.push(item)
                if (item.category === 'meals')
                    state.categories[1].items.push(item)
                if (item.category === 'salad')
                    state.categories[2].items.push(item)
                if (item.category === 'snacks')
                    state.categories[3].items.push(item)
                if (item.category === 'japan')
                    state.categories[4].items.push(item)
                if (item.category === 'pizza')
                    state.categories[5].items.push(item)
                if (item.category === 'soups')
                    state.categories[6].items.push(item)
                if (item.category === 'grill')
                    state.categories[7].items.push(item)
                if (item.category === 'drinks')
                    state.categories[8].items.push(item)
                if (item.category === 'souses')
                    state.categories[9].items.push(item)
                if (item.category === 'dessert')
                    state.categories[10].items.push(item)
            })
            return []
        },
        getMap: state => {
            return state.loadMap;
        },
        getCategories: state => {
            return state.categories;
        },
    },
    mutations: {},
    actions: {
    },
});
import Vuex from 'vuex';
import dish1URL from '/src/assets/dish1.png'

import salad from '/src/assets/categories/salad.jpg'
import japan from '/src/assets/categories/japan.jpg'
import pizza from '/src/assets/categories/pizza.jpg'
import soup from '/src/assets/categories/soup.jpg'
import mangal from '/src/assets/categories/mangal.jpg'
import drink from '/src/assets/categories/drink.jpg'
import desert from '/src/assets/meals/manti.jpg'

import pilaf1URL from '/src/assets/pilaf1.png'
import pilaf2URL from '/src/assets/pilaf1.png'
import manti from '/src/assets/meals/manti.jpg'
import cezar from '/src/assets/salad/cezar.jpg'
import hachapuri from '/src/assets/snacks/hachapuri.jpg'
import shah from '/src/assets/mangal/shah.jpg'
import cake from '/src/assets/desert/cake.jpg'

import sale from '/src/assets/sale.png'

export const store = new Vuex.Store({
    state: {
        DishList: [
            {title: "Горячие блюда", img: dish1URL},
            {title: "Салаты", img: salad},
            {title: "Японская кухня", img: japan},
            {title: "Пицца", img: pizza},
            {title: "Супы", img: soup},
            {title: "Мангал", img: mangal},
            {title: "Напитки", img: drink},
            {title: "Десерты", img: desert},

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
            {id: '1', name: 'Плов ташкентский с телятиной', price: 590, description:'Рассыпчатый плов из узбекского риса Лазер с обжаренной телятиной, жёлтой и красной морковью, гороха нут и репчатого лука.', img:pilaf1URL, category: 'pilaf'},
            {id: '2', name: 'Плов ташкентский с бараниной', price: 590, description:'Рассыпчатый плов из узбекского риса Лазер с обжаренной бараниной, жёлтой и красной морковью, гороха нут и репчатого лука.', img:pilaf2URL, category: 'pilaf'},
            {id: '3', name: 'Манты с бараниной', price: 590, description:'Традиционные узбекские манты, приготовленные на пару из тонкого домашнего теста и рубленого мяса молодого барашка с луком и специями. Подаются со сметаной', img:manti, category: 'meals'},
            {id: '4', name: 'Цезарь с курицей', price: 590, description:'Салат с хрустящими листьями Романо в сочетании с розовыми помидорами, сыром Пармезан и пшеничными гренками с обжаренным куриным филе. Заправляется фирменным соусом Цезарь', img:cezar, category: 'salad'},
            {id: '5', name: 'Хачапури по-аджарски', price: 590, description:'Мягкое воздушное хачапури с яйцом, сливочным маслом, моцареллой и молодым сулугуни с добавлением сливок', img:hachapuri, category: 'snacks'},
            {id: '6', name: 'Шашлык из телятины', price: 590, description:'Мякоть телятины, приготовленная на мангале. Подается на хрустящем лаваше с маринованным луком, зернами граната и свежей зеленью', img:shah, category: 'grill'},
            {id: '7', name: 'Три шоколада', price: 590, description:'Торт с насыщенным шоколадным брауни и нежным муссом из белого, молочного и черного шоколада. Украшается лепестком из шоколада', img:cake, category: 'dessert'},
        ],
        stocks:[
            sale, sale, sale, sale, sale,
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
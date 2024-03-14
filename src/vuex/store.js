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
        pilaf:[
            {id: 1, name: 'Плов ташкентский с телятиной', price: '590', description:'Рассыпчатый плов из узбекского риса Лазер с обжаренной телятиной, жёлтой и красной морковью, гороха нут и репчатого лука.', img:pilaf1URL},
            {id: 2, name: 'Плов ташкентский с бараниной', price: '590', description:'Рассыпчатый плов из узбекского риса Лазер с обжаренной бараниной, жёлтой и красной морковью, гороха нут и репчатого лука.', img:pilaf2URL}
        ]

    },
    getters: {
        getWeekDishesList: state => {
            return state.weekDishList;
        },
        getPilafList: state => {
            return state.pilaf;
        }
    },
    mutations: {},
    actions: {},
});
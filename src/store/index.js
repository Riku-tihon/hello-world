import { createApp } from 'vue'
import { createStore } from 'vuex'
import router from '../router/index.js'
import axios from "axios";
const store = createStore({
    state () {
        return{
        inventory:[
            {
                id: 1,
                car_make: "Lincoln",
                car_model: "Navigator",
                car_year: 2009,
                url:
                    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-lincoln-navigator-mmp-1-1603478280.jpg?crop=1.00xw:0.752xh;0,0.0843xh&resize=1200:*"
            },
            {
                id: 2,
                car_make: "Mazda",
                car_model: "Miata MX-5",
                car_year: 2001,
                url:
                    "https://upload.wikimedia.org/wikipedia/commons/9/95/Mazda_Roadster_%28MX-5%29_by_Negawa_Bridge_%28cropped%29.jpg"
            },
            {
                id: 3,
                car_make: "Land Rover",
                car_model: "Defender Ice Edition",
                car_year: 2010,
                url:
                    "https://i.pinimg.com/originals/90/4e/40/904e40064cfce38e4d16c93417b97ea1.jpg"
            },
            {
                id: 4,
                car_make: "Honda",
                car_model: "Accord",
                car_year: 1983,
                url:
                    "https://upload.wikimedia.org/wikipedia/commons/2/22/2018_Honda_Accord_front_4.1.18.jpg"
            },
            {
                id: 5,
                car_make: "Mitsubishi",
                car_model: "Galant",
                car_year: 1990,
                url:
                    "https://i.pinimg.com/originals/96/3f/81/963f818a84c8c916ab7e1f8da487fc01.jpg"
            },
            {
                id: 6,
                car_make: "Honda",
                car_model: "Accord",
                car_year: 1995,
                url:
                    "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Accord_1995.jpg"
            },
            {
                id: 7,
                car_make: "Smart",
                car_model: "Fortwo",
                car_year: 2009,
                url:
                    "https://cimg3.ibsrv.net/ibimg/hgm/1920x1080-1/100/553/2017-smart-fortwo-brabus_100553179.jpg"
            },
            {
                id: 8,
                car_make: "Audi",
                car_model: "4000CS Quattro",
                car_year: 1987,
                url:
                    "https://germancarsforsaleblog.com/wp-content/uploads/2018/12/CSQ1.jpg"
            },
            {
                id: 9,
                car_make: "Ford",
                car_model: "Windstar",
                car_year: 1996,
                url:
                    "https://upload.wikimedia.org/wikipedia/commons/5/57/2001-2003_Ford_Windstar_Limited.jpg"
            },
            {
                id: 10,
                car_make: "Mercedes-Benz",
                car_model: "E-Class",
                car_year: 2000,
                url:
                    "https://img.drivemag.net/jato_car_photos/MERCEDES%2FE-CLASS%2Fsedan%2F4%2F2000%2Fexterior-photos%2Fo%2Fmercedes-e-class-sedan-4-doors-2000-model-exterior-photos-9.jpg"
            },
            {
                id: 11,
                car_make: "Infiniti",
                car_model: "G35",
                car_year: 2004,
                url:
                    "https://upload.wikimedia.org/wikipedia/commons/8/8d/Infiniti_G37X_sedan_--_03-16-2012.JPG"
            },
            {
                id: 12,
                car_make: "Lotus",
                car_model: "Esprit",
                car_year: 2004,
                url:
                    "https://www.mad4wheels.com/img/free-car-images/mobile/324/lotus-esprit-v8-2002-198598.jpg"
            },
            {
                id: 13,
                car_make: "Chevrolet",
                car_model: "Cavalier",
                car_year: 1997,
                url:
                    "https://upload.wikimedia.org/wikipedia/commons/c/c3/VogeysCavalier.JPG"
            },
            {
                id: 14,
                car_make: "Dodge",
                car_model: "Ram Van 1500",
                car_year: 1999,
                url: "https://www.cstatic-images.com/car-pictures/xl/u8dvgej1.jpg"
            },
            {
                id: 15,
                car_make: "Dodge",
                car_model: "Intrepid",
                car_year: 2000,
                url:
                    "http://img.autoabc.lv/Dodge-Intrepid/Dodge-Intrepid_1997_Sedans_163125159.jpg"
            },
            {
                id: 16,
                car_make: "Mitsubishi",
                car_model: "Montero Sport",
                car_year: 2001,
                url:
                    "https://upload.wikimedia.org/wikipedia/commons/0/02/2017_Mitsubishi_Pajero_Sport_2.4_Dakar_Ultimate_wagon_%28KR1W%3B_12-22-2018%29%2C_South_Tangerang.jpg"
            },
            {
                id: 17,
                car_make: "Buick",
                car_model: "Skylark",
                car_year: 1987,
                url:
                    "https://upload.wikimedia.org/wikipedia/commons/1/1d/1972_Buick_Skylark_Front.jpg"
            },
            {
                id: 18,
                car_make: "Geo",
                car_model: "Prizm",
                car_year: 1995,
                url:
                    "https://upload.wikimedia.org/wikipedia/commons/6/65/2nd-Geo-Prizm.JPG"
            },
            {
                id: 19,
                car_make: "Oldsmobile",
                car_model: "Bravada",
                car_year: 1994,
                url:
                    "https://consumerguide.com/wp-content/uploads/2014/07/02128271990003.jpg"
            },
            {
                id: 20,
                car_make: "Mazda",
                car_model: "Familia",
                car_year: 1985,
                url:
                    "https://upload.wikimedia.org/wikipedia/commons/9/94/Mazda_Familia_S-Wagon_001.jpg"
            },
            {
                id: 21,
                car_make: "Chevrolet",
                car_model: "Express 1500",
                car_year: 2003,
                url:
                    "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/03q2/267345/chevy-express-awd-short-take-road-test-photo-5911-s-original.jpg"
            },
            {
                id: 22,
                car_make: "Jeep",
                car_model: "Wrangler",
                car_year: 1997,
                url:
                    "https://upload.wikimedia.org/wikipedia/commons/b/b9/2018_Jeep_Wrangler_Sahara_Unlimited_Multijet_2.1_Front.jpg"
            },
            {
                id: 23,
                car_make: "Eagle",
                car_model: "Talon",
                car_year: 1992,
                url:
                    "https://i.pinimg.com/originals/a7/a5/9e/a7a59e0240b3524339e3e39c244e8f3e.jpg"
            },
            {
                id: 24,
                car_make: "Toyota",
                car_model: "MR2",
                car_year: 2003,
                url:
                    "http://garagedreams.net/wp-content/uploads/2020/01/Toyota-MR2-W10-700x434.jpg"
            },
            {
                id: 25,
                car_make: "BMW",
                car_model: "525",
                car_year: 2005,
                url:
                    "https://i.pinimg.com/originals/7f/33/62/7f33629630a9106cbb7d5cd15e6f5e3e.jpg"
            },
            {
                id: 26,
                car_make: "Cadillac",
                car_model: "Escalade",
                car_year: 2005,
                url:
                    "https://media.ed.edmunds-media.com/cadillac/escalade-esv/2021/oem/2021_cadillac_escalade-esv_4dr-suv_premium-luxury-platinum_fq_oem_1_815.jpg"
            },
            {
                id: 27,
                car_make: "Infiniti",
                car_model: "Q",
                car_year: 2000,
                url:
                    "https://i.pinimg.com/originals/a2/66/94/a2669429ea1d135e860fb8282333912e.jpg"
            },
            {
                id: 28,
                car_make: "Suzuki",
                car_model: "Aerio",
                car_year: 2005,
                url:
                    "https://image-cdn.beforward.jp/files/pictures/201307/134317/BF139439_1.jpg"
            },
            {
                id: 29,
                car_make: "Mercury",
                car_model: "Topaz",
                car_year: 1993,
                url:
                    "https://cdn3.focus.bg/autodata/i/mercury/topaz/topaz/large/430938dfa16df7e8fc6dd3a2bb78ca6c.jpg"
            },
            {
                id: 30,
                car_make: "BMW",
                car_model: "6 Series",
                car_year: 2010,
                url: "https://images.hgmsites.net/hug/2018-bmw-6-series_100609718_h.jpg"
            },
            {
                id: 31,
                car_make: "Pontiac",
                car_model: "GTO",
                car_year: 1964,
                url:
                    "https://assets.catawiki.nl/assets/2020/10/13/7/0/c/70ca9411-04d4-4d56-b64f-b380b67bcf63.jpg"
            },
            {
                id: 32,
                car_make: "Dodge",
                car_model: "Ram Van 3500",
                car_year: 1999,
                url:
                    "https://di-uploads-pod15.dealerinspire.com/orangecoastchryslerjeepdodgeram/uploads/2020/01/Ram-Dealership-Orange-County-2020-Ram-2500-White.jpg"
            },
            {
                id: 33,
                car_make: "Jeep",
                car_model: "Wrangler",
                car_year: 2011,
                url:
                    "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/10q4/368263/2011-jeep-wrangler-unlimited-sahara-4x4-review-car-and-driver-photo-369895-s-original.jpg"
            },
            {
                id: 34,
                car_make: "Ford",
                car_model: "Escort",
                car_year: 1991,
                url:
                    "https://i.pinimg.com/originals/8c/70/96/8c709679537e05c4b103fcb9010f80d8.jpg"
            },
            {
                id: 35,
                car_make: "Chrysler",
                car_model: "300M",
                car_year: 2000,
                url:
                    "https://i.pinimg.com/originals/b2/0d/79/b20d7945539f13d4561b0e70797f2a97.jpg"
            },
            {
                id: 36,
                car_make: "Volvo",
                car_model: "XC70",
                car_year: 2003,
                url:
                    "https://images.ctfassets.net/dnsblpiud3hq/4Q8Il51xX2S2aCQySaaCek/b02c12481dd22830e6ae0b155da6a01d/Vovlo_XC70.jpg"
            },
            {
                id: 37,
                car_make: "Oldsmobile",
                car_model: "LSS",
                car_year: 1997,
                url:
                    "https://upload.wikimedia.org/wikipedia/commons/6/61/1996-1999_Oldsmobile_Eighty-Eight.jpg"
            },
            {
                id: 38,
                car_make: "Toyota",
                car_model: "Camry",
                car_year: 1992,
                url:
                    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-toyota-camry-hybrid-xle-mmp-1-1603215410.png?crop=0.796xw:1.00xh;0.103xw,0&resize=640:*"
            },
            {
                id: 39,
                car_make: "Ford",
                car_model: "Econoline E250",
                car_year: 1998,
                url:
                    "https://aximages.s3.amazonaws.com/1534/4420/03634_3_4420-1_120038.jpg"
            },
            {
                id: 40,
                car_make: "Lotus",
                car_model: "Evora",
                car_year: 2012,
                url:
                    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-lotus-evora-gt-mmp-1-1606234124.jpg"
            },
            {
                id: 41,
                car_make: "Ford",
                car_model: "Mustang",
                car_year: 1965,
                url:
                    "https://www.motortrend.com/uploads/sites/11/2019/09/2020-Ford-Mustang-2.3-Liter-High-Performance-Package-1742.jpg"
            },
            {
                id: 42,
                car_make: "GMC",
                car_model: "Yukon",
                car_year: 1996,
                url:
                    "https://media.ed.edmunds-media.com/gmc/yukon-xl/2021/oem/2021_gmc_yukon-xl_4dr-suv_denali_fq_oem_1_1600.jpg"
            },
            {
                id: 43,
                car_make: "Mercedes-Benz",
                car_model: "R-Class",
                car_year: 2009,
                url:
                    "https://mercedes-benz-publicarchive.com/marsClassic/scr/1576178349000/179292341v-2tv3/251-series-R-Class-Grand-Sports-Tourer-2005---2010.jpg"
            },
            {
                id: 44,
                car_make: "Audi",
                car_model: "Q7",
                car_year: 2012,
                url:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Audi_Q7_%28Facelift%29_front_20110115.jpg/1200px-Audi_Q7_%28Facelift%29_front_20110115.jpg"
            },
            {
                id: 45,
                car_make: "Audi",
                car_model: "TT",
                car_year: 2008,
                url:
                    "https://upload.wikimedia.org/wikipedia/commons/f/f5/Audi_TT_Coup%C3%A9_2.0_TFSI_quattro_S-line_%288S%29_%E2%80%93_Frontansicht%2C_3._April_2015%2C_D%C3%BCsseldorf.jpg"
            },
            {
                id: 46,
                car_make: "Oldsmobile",
                car_model: "Ciera",
                car_year: 1995,
                url:
                    "https://0.cdn.autotraderspecialty.com/Car-101320381-44ffc6e71e453125ae45b61bfbf1019f.jpg"
            },
            {
                id: 47,
                car_make: "Volkswagen",
                car_model: "Jetta",
                car_year: 2007,
                url:
                    "https://upload.wikimedia.org/wikipedia/commons/d/d7/2019_Volkswagen_Jetta_front_7.11.18.jpg"
            },
            {
                id: 48,
                car_make: "Dodge",
                car_model: "Magnum",
                car_year: 2008,
                url:
                    "https://upload.wikimedia.org/wikipedia/commons/2/2b/2008_Dodge_Magnum_SE.jpg"
            },
            {
                id: 49,
                car_make: "Chrysler",
                car_model: "Sebring",
                car_year: 1996,
                url:
                    "https://upload.wikimedia.org/wikipedia/commons/7/71/Chrysler_Sebring_front_20090302.jpg"
            },
            {
                id: 50,
                car_make: "Lincoln",
                car_model: "Town Car",
                car_year: 1999,
                url: "https://a.d-cd.net/425422es-960.jpg"
            }
        ],
        pagination:50,
            favoriteCars:[],
            token:0,
            paginationFavorites:50,
            noCar:{},
            gridsOrTable:'table',
        }
    },
    mutations: {
        setToken(state) {
            state.token = 0;
        },
        plusToken(state)
        {
            state.token=1
        },
        changeCar(state,car)
        {
          state.inventory[state.inventory.findIndex(item=>item.id===car.id)]=car;
        },
        newPagination(state,newPages)
        {
            state.pagination=newPages;
        },
        newPaginationFavorite(state,newPages)
        {
            state.paginationFavorites=newPages;
        },
        addFavorite(state,favorite)
        {
            state.favoriteCars.push(favorite)
        },
        removeFavorite(state,favorite) {
            state.favoriteCars.splice(state.favoriteCars.findIndex(item => item.id === favorite.id), 1)
        },
        price(state)
        {
            console.log(state.inventory[0].price)
            if (state.inventory[0].price===undefined){
            state.inventory=state.inventory.map(item=>item=({...item,price:Math.round(Math.random()*96000+4000)}))}
        },
        newCar(state,car)
        {
            state.inventory.push(car);
        },
        updateNoCar(state,car)
        {
            state.noCar=car
        },
        gridsOrTable(state,no)
        {
            state.gridsOrTable=no;
        }
    },
    getters: {
    },
    actions: {
        login({ commit }, data){
            axios.post('https://reqres.in/api/login', data)
                .then((response) => {
                    commit("setToken", response.data.token)
                    router.push("/1")
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        logout({commit})
        {
            commit("plusToken");
            router.push("/login")
        },
      newCar({commit},car)
      {
          commit('changeCar',car)
      },

    }
})

const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
app.use(store)
export default store
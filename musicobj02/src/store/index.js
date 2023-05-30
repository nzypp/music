import { createStore } from 'vuex'

export default createStore({
  state: {
    playlist:[   //音乐播放列表
      {
        name: "断桥残雪", 
        id: 167937, 
        al:{
          id: 16960,
          name: "断桥残雪",
          pic: 19061133579343590,
          picUrl: "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
          pic_str: "19061133579343591",
        }
      } 
    ],
    // 当前播放音乐在播放列表中的下标
    playCurrentIndex:0
  },
  getters: {
  },
  mutations: {
    setPlayList(state,value){  //定义一个函数用来修改state中播放列表的数据
      state.playlist = value;
    },
    setPlayIndex(state,value){
      state.playCurrentIndex = value;
    }
  },
  actions: {
  },
  modules: {
  }
})

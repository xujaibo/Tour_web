

var topics = [
    {
        'img_url': 'topic/topic01.jpg',
        'p': '吃货必去—旅途中那些不断诱惑我们味蕾的美食',
        'num_01': '45',
        'num_02': '34'
    },
    {
        'img_url': 'topic/topic02.png',
        'p': '朝圣之旅—把心灵交给信仰 ',
        'num_01': '73',
        'num_02': '44'
    },
    {
        'img_url': 'topic/topic03.jpg',
        'p': '小镇菇凉—总有那么一个身影，让你见之不忘。',
        'num_01': '41',
        'num_02': '55'
    },
    {
        'img_url': 'topic/topic04.jpg',
        'p': '爱在旅途—穿着婚纱去旅行',
        'num_01': '65',
        'num_02': '41'
    },
    {
        'img_url': 'topic/topic05.jpg',
        'p': '世界各地的天空',
        'num_01': '96',
        'num_02': '63'
    },
    {
        'img_url': 'topic/topic06.jpg',
        'p': '古城寻梦—穿越千年的记忆，只为寻一个奇迹',
        'num_01': '155',
        'num_02': '88'
    },
    {
        'img_url': 'topic/topic07.jpg',
        'p': '恋物情结—旅途中那些让人怦然心动的小玩意儿',
        'num_01': '21',
        'num_02': '17'
    },
    {
        'img_url': 'topic/topic08.jpg',
        'p': '电影印象—镜头内外的美丽，跟着电影去旅行',
        'num_01': '22',
        'num_02': '19'
    },
    {
        'img_url': 'topic/topic09.jpg',
        'p': '徒步去走—享受一场灵魂的天堂之旅',
        'num_01': '65',
        'num_02': '38'
    },
    {
        'img_url': 'topic/topic10.jpg',
        'p': '角落里的情怀—只想找个地儿，静静的发呆。',
        'num_01': '135',
        'num_02': '74'
    },
    {
        'img_url': 'topic/topic11.jpg',
        'p': '休职旅行—飞去看看外面的世界，找找流浪的自己。',
        'num_01': '15',
        'num_02': '14'
    },
    {
        'img_url': 'topic/topic12.jpg',
        'p': '感受年味—一起来分享春节旅行中那些的吃喝玩乐',
        'num_01': '36',
        'num_02': '21'
    },
    {
        'img_url': 'topic/topic13.png',
        'p': '最忆是杭州—让我们看看你眼里的杭州',
        'num_01': '65',
        'num_02': '44'
    },
    {
        'img_url': 'topic/topic14.jpg',
        'p': '那些年，见过的大山大水',
        'num_01': '130',
        'num_02': '85'
    },
    {
        'img_url': 'topic/topic15.jpg',
        'p': '最美的自己，在路上',
        'num_01': '49',
        'num_02': '36'
    },
    {
        'img_url': 'topic/topic16.jpg',
        'p': '12星座的旅行幸运目的地',
        'num_01': '86',
        'num_02': '79'
    },
    {
        'img_url': 'topic/topic17.jpg',
        'p': '人生，就是要跳起来才好看',
        'num_01': '25',
        'num_02': '14'
    },
    {
        'img_url': 'topic/topic18.jpg',
        'p': '最想去旅行的地方',
        'num_01': '46',
        'num_02': '33'
    },
    {
        'img_url': 'topic/topic19.jpg',
        'p': '端午临中夏-6月精选分享',
        'num_01': '19',
        'num_02': '16'
    },
    {
        'img_url': 'topic/topic20.png',
        'p': '带我去看世界各地的大海',
        'num_01': '66',
        'num_02': '48'
    },
    {
        'img_url': 'topic/topic21.jpg',
        'p': '那些人少好玩的小众目的地',
        'num_01': '55',
        'num_02': '47'
    }
]
var titles = document.querySelector('.titles');
// alert(666)
for (var topic of topics) {
    if(topic.p.length>12){
        p=topic.p.substr(0,12)+'...'
    }else {
        p=topic.p
    }
    titles.innerHTML += `<div class="article">
                        <img src="images/${topic.img_url}" alt="">
                        <a href="">${p}</a>
                        <span class="num_01">${topic.num_01} </span><span>分享</span><span class="sepline">|</span>
                        <span class="num_02">${topic.num_02} </span><span>人参与</span>
                    </div>`
}

// alert(11)
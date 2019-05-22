export const baseInfo = {
    // 基础个人信息
    // name: '姓名：肖雄', // 姓名
    // age: '年龄：27',
    // sex: '性别：男',
    // adresse: '地址：北京市昌平区回龙观东大街龙锦苑东二区',
    // geburtsort: '籍贯：湖北·武汉', // 籍贯
    // email: '邮箱：xiong.xiao@aispeech.com',
    // tel: '手机：18672360115',
    // imageUrl: ''
    name: '肖雄', // 姓名
    age: '27',
    sex: '男',
    adresse: '北京市昌平区回龙观东大街龙锦苑东二区',
    geburtsort: '湖北·武汉', // 籍贯
    email: 'xiong.xiao@aispeech.com',
    tel: '18672360115',
    imageUrl: ''
};

export const erwartungen = {
    // 期望
    position: '',
    type: '',
    gehalt: '',
    ankunftTime: ''
};

const _GRAD = {
    '1': '了解',
    '2': '掌握',
    '3': '熟练',
    '4': '精通'
};

export const technologie = [
    // 技能
    {
        grad: _GRAD['3'], // 程度
        content: ''
    },
    {
        grad: _GRAD['3'],
        content: ''
    }
];

export const experience = [
    // 经历
    {
        timeSlot: '2019.3-至今',
        company: 'Aispeech',
        responsibility: 'SSML', // 亮点
        position: '智能客服',
        content: '这个人很懒，什么也没留下'
    },
    {
        timeSlot: '2018.7-2019.3',
        company: 'HT',
        responsibility: 'MK', // 亮点
        position: 'WEB',
        content: '这个人很懒，什么也没留下'
    },
    {
        timeSlot: '2017.6-2018-7',
        company: 'Stywin',
        responsibility: 'CMDB', // 亮点
        position: 'WEB',
        content: '这个人很懒，什么也没留下'
    }
];

const _SCHOOL_TYPE = {
    '1': '',
    '2': '',
    '3': '',
    '4': ''
}
export const education = [
    // 教育
    {
        time: '',
        type: _SCHOOL_TYPE['2'],
        school: ''
    }
]

export const recommend = {
    // 推荐
    content: [
        '',
        '',
        ''
    ]
}

export const urls = [
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
]

export const book = [
    {
        bookName: 'web',
        grad: '90'
    },
    {
        bookName: 'js',
        grad: '90'
    },
    {
        bookName: 'vue',
        grad: '100'
    },
    {
        bookName: 'react',
        grad: '100'
    },
    {
        bookName: 'ts',
        grad: '90'
    },
    {
        bookName: 'wechat',
        grad: '80'
    }
]

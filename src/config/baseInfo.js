export const baseInfo = {
    // 基础个人信息
    name: '姓名：肖雄', // 姓名
    age: '年龄：27',
    sex: '性别：男',
    adresse: '地址：北京市昌平区回龙观东大街龙锦苑东二区',
    geburtsort: '籍贯：湖北·武汉', // 籍贯
    email: '邮箱：xiong.xiao@aispeech.com',
    tel: '手机：18672360115',
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
        timeSlot: '',
        company: '',
        responsibility: '', // 亮点
        position: '',
        content: ''
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

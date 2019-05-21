export const baseInfo = {
    // 基础个人信息
    name: '', // 姓名
    age: '',
    sex: '',
    adresse: '',
    geburtsort: '', // 籍贯
    email: '',
    tel: '',
    bildungsstand: '',
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

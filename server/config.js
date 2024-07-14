/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 0,
    title: "",
    text: ""
},
  {
    type: 1,
    count: 1,
    text: "Special Prize",
    title: "Black Myth: Wukong",
    img: "../img/secrit.jpg"
  },
  {
    type: 2,
    count: 2,
    text: "",
    title: "Mice",
    img: "../img/mbp.jpg"
  },
  {
    type: 3,
    count: 10,
    text: "",
    title: "Power Bank",
    img: "../img/huawei.png"
  },
  {
    type: 4,
    count: 100,
    text: "",
    title: "M365 Mouse Mat",
    img: "../img/ipad.jpg"
  },

];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [0,1, 1, 5, 10];

/**
 * 卡片公司名称标识
 */
const COMPANY = "M365 GIVE";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};

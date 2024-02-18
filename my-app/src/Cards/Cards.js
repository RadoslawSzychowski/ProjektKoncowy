class Card {
    constructor(name, hp, attack, defense, stars) {
        this.name = name;
        this.hp = hp;
        this.maxHp = hp;
        this.attack = attack;
        this.defense = defense;
        this.stars = stars;
    }
}

const yaeMiko = new Card("Yae Miko", 100, 12, 3, 6);
const raidenShogun = new Card("Raiden Shogun", 80, 17, 2, 6);
const eula = new Card("Eula", 150, 3, 4, 4);
const keqing = new Card("Keqing", 100, 4, 3, 4);
const ganyu = new Card("Ganyu", 110,8,3,5 );
const alhaitham = new Card("Alhaitham", 130, 5, 1, 3);
const zhongli = new Card("Zhongli", 86, 15, 3, 5);
const dehya = new Card("Dehya", 50, 22, 0, 4);
const yelan = new Card("Yelan", 90, 9, 6, 4);
const chongyun = new Card("Chongyun", 75, 9, 2, 4);


export const deck = [yaeMiko, raidenShogun, eula, keqing, ganyu, alhaitham, zhongli, dehya, yelan, chongyun];





class Card {
    constructor(name, hp, attack, defense, stars) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.stars = stars;
    }
}

const yaeMiko = new Card("Yae Miko", 100, 12, 3, 5);
const raidenShogun = new Card("Raiden Shogun", 80, 17, 2, 5);
const eula = new Card("Eula", 150, 7, 8, 4);
const keqing = new Card("Keqing", 200, 4, 16, 4);
const ganyu = new Card("Ganyu", 110,8,8,4 );
const alhaitham = new Card("Alhaitham", 130, 5, 9, 3);
const zhongli = new Card("Zhongli", 86, 15, 3, 4);
const dehya = new Card("Dehya", 50, 22, 1, 4);
const yelan = new Card("Yelan", 90, 13, 6, 5);
const chongyun = new Card("Chongyun", 75, 9, 9, 4);


export const deck = [yaeMiko, raidenShogun, eula, keqing, ganyu, alhaitham, zhongli, dehya, yelan, chongyun];





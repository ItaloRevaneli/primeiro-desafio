let nome = "Ítalo Revaneli"
let XP = 0;
let level = "Ferro";

while (XP <= 10000) {
    XP += 500;

    if (XP >= 10001) {
        level = "Radiante";
        console.log("XP totais: " + XP + " XP")
    } else if (XP >= 9001) {
        level = "Imortal";
        console.log("XP totais: " + XP + " XP")
    } else if (XP >= 8001) {
        level = "Platina";
        console.log("XP totais: " + XP + " XP")
    } else if (XP >= 6001) {
        level = "Ouro";
        console.log("XP totais: " + XP + " XP")
    } else if (XP >= 2001) {
        level = "Prata";
        console.log("XP totais: " + XP + " XP")
    } else if (XP >= 1001) {
        level = "Bronze";
        console.log("XP totais: " + XP + " XP")
    } else {
        level = "Ferro";
        console.log("XP totais: " + XP + " XP")
    }

    console.log("O Herói de nome " + nome + " está no nível de: " + level);
    console.log("XP totais: " + XP + " XP")
}
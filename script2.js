"use strict";
var _a;
const colors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black",
    "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral",
    "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey",
    "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon",
    "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink",
    "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia",
    "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink",
    "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue",
    "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink",
    "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue",
    "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid",
    "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed",
    "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab",
    "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip",
    "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue",
    "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue",
    "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise",
    "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen",];
(_a = window.document.getElementById("comecar")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', jogar);
function jogar() {
    var cores = colors;
    var corUsuario = ' ';
    var coresAleatorias = [];
    var chances = 5;
    var acabou = false;
    var resp = document.querySelector('p#mensagem');
    while (coresAleatorias.length < 10) {
        coresAleatorias[coresAleatorias.length] = cores[Math.floor(Math.random() * (cores.length - 1)) + 1];
        coresAleatorias = [...new Set(coresAleatorias)];
    }
    coresAleatorias.sort();
    var corGerada = coresAleatorias[Math.floor(Math.random() * (coresAleatorias.length - 1)) + 1].toLowerCase();
    //alert(corGerada);
    var coresAleatorias2 = coresAleatorias.map(coresAleatorias => coresAleatorias.toLowerCase());
    while (!acabou) {
        corUsuario = prompt(`Eu estou pensando em uma dessas cores: \n\n  ${coresAleatorias.join(', ')}  \n\nEm qual delas eu estou pensando?\n\n  Você tem ${chances} vidas restantes`).toLowerCase();
        if (chances == 1) {
            acabou = true;
            resp.innerHTML = "Não foi dessa vez, mas tente novamente.";
            alert("Suas chances acabaram! \nFim de jogo.");
        }
        else {
            corUsuario = String(corUsuario);
            if (!coresAleatorias2.includes(corUsuario)) {
                alert("Esta cor não consta na lista.");
            }
            else if (corUsuario == corGerada) {
                alert("Certa resposta!");
                acabou = true;
                document.body.style.background = corUsuario;
                resp.innerHTML = `A cor correta é: ${corGerada}`;
            }
            else {
                let resposta = corUsuario.localeCompare(coresAleatorias2[coresAleatorias2.indexOf(corGerada)]);
                let pista = "Dica: a cor escolhida é alfabeticamente ";
                if (resposta == -1) {
                    pista += "maior que a escolhida";
                }
                else {
                    pista += "menor que a escolhida";
                }
                chances--;
                alert(`Desculpe! Resposta incorreta!\n${pista}\nPor favor, tente novamente.`);
            }
        }
    }
}

let pokemonID1 = Math.floor(Math.random() * 898) + 1; //1 to 905 pokemon IDs on pokemon API
let pokemonID2 = Math.floor(Math.random() * 898) + 1; //1 to 898 pokemon images 
let pokemonData = ['',''];

const pokeDivs = [$("#img1"), $("#img2")], infoDivs = [$("#info1"), $("#info2")]
const mainDiv = document.querySelector("#main")
const winner = $("#winner"), button = $("#button")
let totalStat = 0, totalArr = [0, 0], colorInd = [0, 0]

async function pokemonCall(url, pokemonNo) {
    try {
        let res = await axios.get(url)
        pokemonData[pokemonNo] = res.data;
        console.log(res.data);
        console.log("Pokemon called - No errors")
        colorSet(pokemonData)
        pokeDivs[pokemonNo].append(`<img style='background-color: ${pokeColors[colorInd[pokemonNo]]};' loading='lazy' class="object-contain p-1 h-[100%] w-[100%] border-t-2 border-l-2 border-r-2" src='${pokemonData[pokemonNo].sprites.other.home.front_default}'/><h1 style='background-color: ${pokeColors[colorInd[pokemonNo]]};' class='pt-1 text-[0.9rem] text-black [530px]:text-[1.6rem] font-light border-t-[0.2rem] border-l-2 border-r-2 border-t-white'>${pokemonData[pokemonNo].name.toUpperCase()}</h1>`)
        setPokemonType(pokemonData[pokemonNo], pokemonNo)
        pokemonStatsCount(pokemonData[pokemonNo], pokemonNo)
    } catch(err) {
        console.error(err)
    }
}

async function pokemonStatsCount(data, n) {
    totalStat = 0
    let pokemonStats = data.stats
    let hp = pokemonStats[0].base_stat
    let attack = pokemonStats[1].base_stat
    let defense = pokemonStats[2].base_stat
    let specialAttack = pokemonStats[3].base_stat
    let specialDefense = pokemonStats[4].base_stat
    let speed = pokemonStats[5].base_stat
    totalStat = hp + attack + defense + specialAttack + specialDefense + speed
    totalArr[n] = totalStat
    infoDivs[n].append(`<div style='background-color: ${pokeColors[colorInd[n]]};' class='px-[1rem] pt-[0.5rem] pb-[1rem] flex flex-col justify-center text-center align-middle items-center text-black font-semibold border-r-2 border-l-2 border-b-2'>
                            <h3 class='w-[100%] font-bold text-[1.5rem]'>${totalStat}</h3>
                            <div class='pt-[0.2rem] w-[100%] flex justify-between'><h4>HP</h4><h4>${hp}</h4></div>
                            <div class='pt-[0.2rem] w-[100%] flex justify-between'><h4>Attack</h4><h4>${attack}</h4></div>
                            <div class='pt-[0.2rem] w-[100%] flex justify-between'><h4>Defense</h4><h4>${defense}</h4></div>
                            <div class='pt-[0.2rem] w-[100%] flex justify-between'><h4>Spl Attack</h4><h4>${specialAttack}</h4></div>
                            <div class='pt-[0.2rem] w-[100%] flex justify-between'><h4>Spl Defense</h4><h4>${specialDefense}</h4></div>
                            <div class='pt-[0.2rem] w-[100%] flex justify-between'><h4>Speed</h4><h4>${speed}</h4></div>
                        </div>`)
}

async function colorSet(data) {
    for (let i = 0; i<2; i++) {
        let index = pokemonTypes.indexOf(data[i].types[0].type.name)
        console.log("index ", pokeColors[index])
        colorInd[i] = index
    }
}

async function setPokemonType(data, n) {
    let ss = ''
    for (let i = 0; i < data.types.length; i++) {
        let type = data.types[i].type.name
        ss += `<img class='w-[2.5rem] border-[3px] rounded-full' src=${imgUrl[pokemonTypes.indexOf(type)]} />`
    }
    pokeDivs[n].append(`<div style='background-color: ${pokeColors[colorInd[n]]};' class='flex justify-center gap-2 border-l-2 border-r-2'>${ss}</div>`)
}

async function main() {
    try {
        await pokemonCall(`https://pokeapi.co/api/v2/pokemon/${pokemonID1}/`, 0)
        await pokemonCall(`https://pokeapi.co/api/v2/pokemon/${pokemonID2}/`, 1)
        console.log()
    } catch(e) {
        console.error(e)
    } finally {
        console.log("Pokemon 1 - ",pokemonData[0].name)
        console.log("Pokemon 2 - ",pokemonData[1].name)
        mainDiv.classList.add("flex","justify-center");
        mainDiv.classList.toggle("hidden")
        button.removeClass("hidden")
        button.addClass("flex")
        $("body").css("background-image", `linear-gradient(to right, ${pokeColors[colorInd[1]]} , ${pokeColors[colorInd[0]]})`)
        winner.empty();
        if (totalArr[0] === totalArr[1]) {
            winner.append(`<span class='text-[1.8rem] p-4 rounded-[2rem] bg-black text-white'>Duel Tied</span>`);
        } else {
            let z = Math.max(...totalArr)
            let i = totalArr.indexOf(z)
            winner.append(`<span class='text-[1.8rem] p-4 rounded-[2rem] bg-black text-white'>Trainer ${i+1} WON</span>`);
        }
    }
}

$("#duel-btn").on("click", () => {
    pokemonData = ['', '']; colorInd = [0, 0]; totalArr = [0, 0]
    pokeDivs[0].empty(); pokeDivs[1].empty();
    infoDivs[0].empty(); infoDivs[1].empty();
    mainDiv.classList.toggle("hidden")
    button.toggleClass("hidden")
    pokemonID1 = Math.floor(Math.random() * 898) + 1
    pokemonID2 = Math.floor(Math.random() * 898) + 1
    winner.empty()
    winner.append(`<span class='text-[1.8rem]'>&nbsp;</span>`)
    main()
})

$("#first").on("click", () => {
    main()
    $("#zero").addClass("hidden")
    $("#second").toggleClass("hidden")
})
const pokemonTypes = ['bug', //18 types
                        'fire',
                        'grass',
                        'water',
                        'normal',
                        'dark',
                        'poison',
                        'electric',
                        'fairy',
                        'ground',
                        'fighting',
                        'psychic',
                        'rock',
                        'steel',
                        'flying',
                        'ghost',
                        'dragon',
                        'ice']

const pokeColors = ['rgba(171, 186, 34, 0.75)',
                    'rgba(252, 67, 35, 0.5)',
                    'rgba(119, 204, 85, 0.75)',
                    'rgba(51, 153, 254, 0.9)',
                    'rgba(171, 171, 153, 0.75)',
                    'rgba(119, 84, 69, 0.5)',
                    'rgba(170, 84, 152, 0.6)',
                    'rgba(255, 205, 55, 0.6)',
                    'rgba(239, 152, 238, 0.75)',
                    'rgba(221, 187, 85, 0.75)',
                    'rgba(186, 85, 69, 0.75)',
                    'rgba(254, 85, 152, 0.75)',
                    'rgba(187, 170, 102, 0.6)',
                    'rgba(170, 170, 187, 0.75)',
                    'rgba(137, 152, 255, 0.75)',
                    'rgba(103, 102, 186, 0.6)',
                    'rgba(118, 102, 239, 0.75)',
                    'rgba(102, 205, 254, 0.75)']


const imgUrl = ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/512px-Pok%C3%A9mon_Bug_Type_Icon.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/512px-Pok%C3%A9mon_Fire_Type_Icon.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/512px-Pok%C3%A9mon_Grass_Type_Icon.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/512px-Pok%C3%A9mon_Water_Type_Icon.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/512px-Pok%C3%A9mon_Normal_Type_Icon.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/512px-Pok%C3%A9mon_Dark_Type_Icon.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/512px-Pok%C3%A9mon_Poison_Type_Icon.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/512px-Pok%C3%A9mon_Electric_Type_Icon.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/512px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/512px-Pok%C3%A9mon_Ground_Type_Icon.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/512px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/512px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/512px-Pok%C3%A9mon_Rock_Type_Icon.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/512px-Pok%C3%A9mon_Steel_Type_Icon.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/512px-Pok%C3%A9mon_Flying_Type_Icon.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/512px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/512px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/512px-Pok%C3%A9mon_Ice_Type_Icon.svg.png']
let emojiArr = [
    {'Grinning Face': '1F600'},
    {'Smiley Face': '1F604'},
    {'Beaming Face': '1F601'},
    {'Laughing Tears': '1F602'},
    {'ROFL': '1F923'},
    {'Exercise': '1F605'},
    {'Big Grin': '1F606'},
    {'Slightly Sad': '1F641'},
    {'Sleepy Face': '1F62A'},
    {'Sleeping Face': '1F634'},

    {'Money-Mouth Face': '1F911'},
    {'Face with Stuck-Out Tongue': '1F61B'},
    {'Face Blowing a Kiss': '1F618'},
    {'Shushing Face': '1F92B'},
    {'Yawning Face': '1F971'},
    {'Face Screaming in Fear': '1F631'},
    {'Smiling Face with Sunglasses': '1F60E'},
    {'Vomiting Face': '1F92E'},
    {'Sad Pensive Face': '1F614'},
    {'Smiling Face with Heart-Eyes': '1F60D'},

    {'Lion': '1F981'},
    {'Unicorn': '1F984'},
    {'Crab': '1F980'},
    {'Popcorn': '1F37F'},
    {'Burrito': '1F32F'},
    {'Taco': '1F32E'},
    {'Hotdog': '1F32D'},
    {'Cheese': '1F9C0'},
    {'Celebration': '1F37E'},
    {'Turkey': '1F983'},

    {'Crane': '1F3D7'},
    {'Classical Building': '1F3DB'},
    {'Stadium': '1F3DF'},
    {'National Park': '1F3DE'},
    {'Desert Island': '1F3DD'},
    {'Desert': '1F3DC'},
    {'Beach with Umbrella': '1F3D6'},
    {'Camping': '1F3D5'},
    {'Snow Capped Mountain': '1F3D4'},
    {'World Map': '1F5FA'},

    {'Rabbit Face': '1F430'},
    {'Mouse Face': '1F42D'},
    {'Pig Face': '1F437'},
    {'Horse Head': '1F434'},
    {'Tiger Face': '1F42F'},
    {'Cat Face': '1F431'},
    {'Raccoon': '1F99D'},
    {'Wolf Face': '1F43A'},
    {'Dog Face': '1F436'},
    {'Monkey Face': '1F435'}
]

function setEmoji(){
    const result = [];
    const oUl = document.createElement('ul');
    for(let i = 0; i < emojiArr.length; i++){
        for(const key in emojiArr[i]){
            const codeNum = emojiArr[i][key];
            const decimal = parseInt(codeNum, 16);
            const oLi = '<li title="'+key+'" data-code="'+codeNum+'"><span>&#x'+codeNum+'</span><code>'+codeNum+'<br>'+decimal+'</code></li>';
            result.push(oLi);
        }
    }
    oUl.innerHTML = result.join('');
    return oUl;
}
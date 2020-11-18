let stories = [
    {"title": "Keep One's Resolve ", "words": ["noun 1", "adv", "num", "noun 2"], "content" : "Nothing in the ## is ## for ## who sets his ## to it."},
    {"title": "The Ways Of The World", "words": ["verb 1", "verb 2", "num", "adv"], "content" : "Not to ## what ## before ## was born is ## to be a child."},
    {"title": "The Boy", "words": ["noun 1", "Quantifiers 1", "noun 2", "Quantifiers 2", "adverbial"], "content" : "One ## is ## boy, two ## half ## boy, three boys ## boy."},
];

/**
 * Show Title List
 */
function showStoryTitle() {
    let titlesTemp = "";
    document.getElementById('sub-title').innerHTML = "Choose a story";
    for (let i = 0; i < stories.length; ++i) {
        titlesTemp += "<div class='item' onclick='createStory(" + i + ")'>" + stories[i].title + "</div>";
    }
    document.getElementById('stories-main').innerHTML = titlesTemp;
}

/**
 * Create a story page
 * @param id Story number
 */
function createStory(id) {
    document.getElementById('sub-title').innerHTML = "Provide the following words";
    let words = stories[id].words;
    let inputsTemp = "";
    for (let i = 0; i < words.length; ++i) {
        inputsTemp += "<input type='text' id='" + words[i] + "' placeholder='" + words[i] + "'>";
    }
    inputsTemp += "<div class='item' onclick='readStory(" + id + ")'>Read Story</div>";
    document.getElementById('stories-main').innerHTML = inputsTemp;
}

/**
 * Read the story page
 * @param id Story number
 */
function readStory(id) {
    let title = stories[id].title;
    let content = "";
    let sentence_arr = stories[id].content.split("##");
    let i = 0;
    for (; i < stories[id].words.length; ++i) {
        let value = document.getElementById(stories[id].words[i]).value;
        if (value === "") {
            // alert("Please input " + stories[id].words[i]);
            // return false;
        }
        content += sentence_arr[i];
        content += "<span class='input-value'>" + value + "</span>"
    }
    content += sentence_arr[i];
    let stories_main = "<div id='stories-main-temp'>" + content + "</div>";
    stories_main += "<div class='item item-add' onclick='showStoryTitle()'>Create another story</div>";
    document.getElementById('sub-title').innerHTML = title;
    document.getElementById('stories-main').innerHTML = stories_main;
}

showStoryTitle();
// Initialize Profiles (Characters)
// => id, username, name, picture="default.jpg", header="default.jpg", description, location,
//    following, followers
var Profiles = [], j = 0;
var alhaitham   = new Profile(++j, "scribealhaitham", "Al Haitham", "alhaitham.jpeg", "alhaitham.jpeg", "I was forced to partake in this.", "Sumeru", 28);
var childe      = new Profile(++j, "tartartartaglia", "Childe 🐳", "childe.jpeg", "childe.jpeg", "Stay still girlie ;) | pfp @tart____a", "Liyue");
var cyno        = new Profile(++j, "gm_cyno", "Cyno", "cyno.jpeg", undefined, "Be careful of the religious group who has been going around to make people's life harder on purpose: The Diffi Cult.");
var kaveh       = new Profile(++j, "kavvvvveh", "🌻 Kaveh 🌹", "kaveh.png");
var nahida      = new Profile(++j, "dendro_archon", "🍀 Lesser Lord Kusanali 🌵", "nahida.jpeg", "nahida.jpeg", "Sumeru's Dendro Archon. It is nice to meet you!", "Sanctuary of Surasthana");
var tighnari    = new Profile(++j, "bigtallears", "Tighnari 🌳🏕", "tighnari.jpeg", "tighnari.jpeg", "Chief Officer of the Forest Rangers", "Avidya Forest");
var xiao        = new Profile(++j, "demonconqueror", "Xiao", "xiao.jpeg", "", undefined, "Liyue");
var yunjin      = new Profile(++j, "yunjin_yunhanopera", "云堇 | Yun-Han Opera Troupe", "yunjin.jpeg", "yunjin.jpeg", "Director, playwright, and singer of the Yun-Han Opera Troupe. Follow to get notified of our next performance at Heyu Tea House!", "Liyue Harbor");
var zhongli     = new Profile(++j, "notrexlapis", "Zhongli 🔸 Wangsheng Funeral Parlor Consultant", "zhongli.jpeg", "zhongli.jpeg", "Greetings. Wangsheng Funeral Parlor welcomes you anytime (Director Hu asked me to put this).", "Liyue Harbor", 45);

// Initialize Profiles (People)
var meirin      = new Profile(++j, "zhongrinofficial", "✾ mei/rin ✾", "meirin.png", "meirin.jpeg", "developer. zhongrin teahouse co-owner. wife of <span class='tag'>@notrexlapis</span> 💍💞", "Liyue");

Profiles.push(alhaitham, childe, cyno, kaveh, nahida, tighnari, xiao, yunjin, zhongli);
Profiles.push(meirin);

// Initialize Tweets
// => id, profile, content, timestamp, image=null, likes, replies
var Tweets = [], i = 0;

Tweets.push(new Tweet(
    ++i,
    zhongli,
    "Today's tale is as curious to listen to as usual.",
    "30m",
    "images/tweet/zhongli1.jpeg",
    0,
    [
        new Tweet(
            ++i,
            meirin,
            "❤️🥰💞💘💐🌼💗",
            "12m",
        ),
        new Tweet(
            ++i,
            yunjin,
            "Yes, today's story is such an intriguing tale!",
            "24m",
        ),
        
    ]
))

Tweets.push(new Tweet(
    ++i,
    meirin,
    "can zhongli <span class='tag'>@notrexlapis</span> date me? (please)",
    "43m",
    null,
    0,
    [
        new Tweet(
            ++i,
            zhongli,
            "My love, we are married.",
            "42m",
        ),
        new Tweet(
            ++i,
            childe,
            "ARCHONS ABOVE GET A ROOM",
            "40m",
        ),
        
    ]
))


Tweets.push(new Tweet(
    ++i,
    alhaitham,
    "What is a \"gym thirst trap\" and why are people demanding it from me in my Private Messages?",
    "1h",
    null,
    0,
    [
        new Tweet(
            ++i,
            kaveh,
            "Nobody tell him",
            "1h",
        ),
        new Tweet(
            ++i,
            meirin,
            "step one: record your workout routine. step two: upload on this app. you're welcome.",
            "1h",
        ),
        new Tweet(
            ++i,
            cyno,
            "Please tell me this app has a mute or a block function.",
            "1h",
        ),
        new Tweet(
            ++i,
            tighnari,
            "Oh dear archons",
            "1h",
        ),
    ]
))

Tweets.push(new Tweet(
    ++i,
    tighnari,
    "Did you know that Shroomboars, according to researchers' studies, relies on the parasitic mushrooms perched on them for natural camouflage, which allows them to evade predators and survive in the jungles?",
    "1h",
    "images/tweet/tighnari1.jpeg",
    0,
    [
        new Tweet(
            ++i,
            tighnari,
            "However, this has also made it popular on the dinner table as naturally-occurring pre-made food. They're still quite dangerous, however. Please approach them with caution and always remember to hunt responsibly.",
            "1h",
        ),
        new Tweet(
            ++i,
            cyno,
            "Your Honor, he's nerding out again.",
            "1h",
        ),
        new Tweet(
            ++i,
            tighnari,
            "I will bash you with a book.",
            "1h",
        ),
        new Tweet(
            ++i,
            nahida,
            "The Shroomboar originated because a Forest Boar fell in love with a Shroom-Kin, and the Forest Boar changed its form to ensure the Shroom-Kin's survival. It is quite a prime example of acting irrationally to pursue one's interests, in my opinion!",
            "1h",
        ),
        new Tweet(
            ++i,
            tighnari,
            "What an interesting fact. I shall add this to my observation journal. Your knowledge and wisdom is as unparalleled as always. Thank you <span class='tag'>@dendro_archon</span>",
            "1h",
        ),
    ]
))

Tweets.push(new Tweet(
    ++i,
    meirin,
    "throwback to our last lantern rite date bc oh my god look at him he's so ??????????????",
    "3h",
    "images/tweet/meirin1.jpeg",
    0,
    [
        new Tweet(
            ++i,
            zhongli,
            "I'm sorry dearest, I cannot seem to upload your photo. The world would have to stay deprived of your beauty for now.",
            "3h",
        ),
        new Tweet(
            ++i,
            childe,
            "get a room you two",
            "3h",
        ),
        new Tweet(
            ++i,
            meirin,
            "are you jealous i get to tap that ass everyday <span class='tag'>@tartartartaglia</span>",
            "3h",
        ),
        new Tweet(
            ++i,
            childe,
            "teucer give me strength",
            "3h",
        ),
    ]
))
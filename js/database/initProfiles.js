// Initialize Profiles (Characters)
// => id, username, name, picture="default.jpg", header="default.jpg", description, location,
//    following, followers
// 
// var xxx = new Profile(++j, "xxx", "name", "xxx.jpeg", undefined, "", "");
// 
var Profiles = [], j = 0;
var albedo      = new Profile(++j, "kof_albedo", "Albedo Kreideprinz ⟡ KOF", "albedo.jpeg", "albedo.jpeg", "Greetings.", "Mondstadt", 12);
var alhaitham   = new Profile(++j, "scribealhaitham", "Al Haitham", "alhaitham.jpeg", "alhaitham.jpeg", "I was forced to partake in this.", "Sumeru", 28);
var childe      = new Profile(++j, "tartartartaglia", "Childe 🐳", "childe.jpeg", "childe.jpeg", "Stay still girlie ;) | pfp @tart____a", "Liyue");
var cyno        = new Profile(++j, "gm_cyno", "Cyno", "cyno.jpeg", undefined, "Be careful of the religious group who has been going around to make people's life harder on purpose: The Diffi Cult.");
var diluc       = new Profile(++j, "diluc_ragnvindr", "Diluc Ragnvindr", "diluc.jpeg", "diluc.jpeg", "Angel Share & Dawn Winery owner. Please stop messaging me, I will never give 'special discounts' to any mortal or gods alike.", "Mondstadt");
var jean        = new Profile(++j, "jean_gunnhildr", "Jean Gunnhilder / KOF Acting Grand Master", "jean.jpeg", "jean.jpeg", "I am not active much on this app. Please report issues directly through a Knights of Favonius personnel, we will look into it as fast as possible.", "KOF Headquarters, Mondstadt");
var kaveh       = new Profile(++j, "kavvvvveh", "🌻 Kaveh 🌷", "kaveh.jpeg", "kaveh.jpeg", "Kshahrewar graduate | Master architect | Wine connoiseour | Palace of Alcazarzaray my beloved magnum opus | Follow for aesthetic photos and beauty tips!", "Sumeru");
var kaeya       = new Profile(++j, "kaeyalberich", "Oh woe is me", "kaeya.jpeg", "kaeya.jpeg", "If Jean is seeing this - I'm most definitely not skipping work!", "Fieldwork ;)");
var lisa        = new Profile(++j, "librarianlady", "🌹", "lisa.jpeg", "lisa.jpeg", "Just your average librarian lady 😘<br>Return your books on time or else~", "Mondstadt");
var nahida      = new Profile(++j, "dendro_archon", "🍀 Lesser Lord Kusanali 🌵", "nahida.jpeg", "nahida.jpeg", "Sumeru's Dendro Archon. It is nice to meet you!", "Sanctuary of Surasthana");
var tighnari    = new Profile(++j, "bigtallears", "Tighnari 🌳🏕", "tighnari.jpeg", "tighnari.jpeg", "Chief Officer of the Forest Rangers", "Avidya Forest");
var wanderer    = new Profile(++j, "yourworstnightmare", "x", "wanderer.jpeg", undefined, "What a farce", undefined);
var xiao        = new Profile(++j, "demonconqueror", "Xiao", "xiao.jpeg", "", undefined, "Liyue");
var yunjin      = new Profile(++j, "yunjin_yunhanopera", "云堇 | Yun-Han Opera Troupe", "yunjin.jpeg", "yunjin.jpeg", "Director, playwright, and singer of the Yun-Han Opera Troupe. Follow to get notified of our next performance at Heyu Tea House!", "Liyue Harbor");
var zhongli     = new Profile(++j, "notrexlapis", "Zhongli 🔸 Wangsheng Funeral Parlor Consultant", "zhongli.jpeg", "zhongli.jpeg", "Greetings. Wangsheng Funeral Parlor welcomes you anytime (Director Hu asked me to put this).", "Liyue Harbor", 45);

// Initialize Profiles (People)
var meirin      = new Profile(++j, "zhongrinofficial", "✾ mei/rin ✾", "meirin.png", "meirin.jpeg", "developer. zhongrin teahouse co-owner. wife of <span class='tag'>@notrexlapis</span> 💍💞", "Liyue");
var albedoshusband = new Profile(++j, "albedoshusband", "misha <3", "albedoshusband.jpeg", undefined, "i'm totally straight ", "albedo's DMs");
var StarySkies = new Profile(++j, "StarySkies", "Starz", "StarySkies.jpeg", undefined, "The moon sure is beautiful, huh? <br></br>(Beware I will go batshit insane one day L)", "TEYVAT I DONT KNOW SOBS");
var BitesTheDust = new Profile(++j, "BitesTheDust", "Dust", "BitesTheDust.jpeg", undefined, "", "Mondstadt");
var heartstringed_boo = new Profile(++j, "heartstringed_boo", "boo", "heartstringed_boo.jpeg", undefined, "adventurer!!! i do fun things", "Inazuma");
var soleilune = new Profile(++j, "soleilune", "Aly!", "soleilune.jpeg", undefined, "in my sleep deprived era", "in ur house");
var Kalpalata2107 = new Profile(++j, "Kalpalata2107", "Lily ❀°。", undefined, undefined, "Just another sleep-deprived Akademiya student", "Sumeru City");
var celestiebestie = new Profile(++j, "celestiebestie", "Celeste🩷🫧✨", "celestiebestie.jpeg", undefined, "don’t ask me how i got my pfp 🫶", "Liyue");
var taromao = new Profile(++j, "taromao", "taromao", "taromao.jpeg", undefined, "local mondstadt alchemist!", "mondstadt");
var kaeyatiddiesgobrrr = new Profile(++j, "kaeyatiddiesgobrrr", "mika <3", "kaeyatiddiesgobrrr.jpeg", undefined, "*to the tune of the mcdonald's jingle accompanied by a broken kazoo sound* i'm losing it", "sumeru");
var stonyballs = new Profile(++j, "stonyballs", "this is fine", "stonyballs.jpeg", undefined, "stuck in the chasm || who knew the chasm had free wifi", "The Chasmussy");
var Crystalflygeo = new Profile(++j, "Crystalflygeo", "Crys", "Crystalflygeo.jpeg", undefined, "Proud Haravatat student. Dying bc of my thesis. Crystalfly gazer.", "Guili plains");
var dinasaurusrex = new Profile(++j, "dinasaurusrex", "dinaaaaa", "dinasaurusrex.jpeg", undefined, "the aranara have eyes everywhere 👀 | haitham's bestie ", "Puspa Cafe, Sumeru");
var solxilynx = new Profile(++j, "solxilynx", "chxrry_noon 🌙 otr from a rat", "solxilynx.jpeg", undefined, "On the run from Pantalone and Wanderer. What's new?", "Anywhere and everywhere");
var graybun = new Profile(++j, "graybun", "Gray", undefined, undefined, "", "Sumeru");
var Explodingalchemist = new Profile(++j, "Explodingalchemist", "Luz ❄", undefined, undefined, "Ice ice babyyyy~<br></br>If you see Diona around alone don't freak out!! Don't tell me where you saw her all the time, I know where my sister is 😭😭", "The cat's tail backroom");
var YingYue = new Profile(++j, "YingYue", "Ying Yue", "YingYue.jpeg", undefined, "", "Li Yue");
var tsumimin13 = new Profile(++j, "tsumimin13", "tsu(ru)mi", undefined, undefined, "cryin and dyin (dramatically)", "the damned Akademiya");
var lilyluvs = new Profile(++j, "lilyluvs", "lily", "lilyluvs.jpeg", undefined, "someone save me from uni </3", "mondstadt");
var amurtacoco = new Profile(++j, "amurtacoco", "coco!♡", "amurtacoco.jpeg", undefined, "sexy, suffering, sleepy akademiya student . . zZzZ", "sumeru city");
var Reicrane = new Profile(++j, "Reicrane", "ReinDOM", "Reicrane.jpeg", undefined, "Coffee?", undefined);
var wwflwr = new Profile(++j, "ww-flwr", "ang is currently going insane", "ww-flwr.jpeg", undefined, "call me a hydro vision user with the way I make things wet.", undefined);
var xxx = new Profile(++j, "xxx", "name", "xxx.jpeg", undefined, "", "");

Profiles.push(albedo, alhaitham, childe, cyno, diluc, jean, kaveh, kaeya, nahida, tighnari, wanderer, xiao, yunjin, zhongli);
Profiles.push(meirin, albedoshusband, StarySkies, BitesTheDust, heartstringed_boo, soleilune, Kalpalata2107, 
    celestiebestie, taromao, kaeyatiddiesgobrrr, stonyballs, Crystalflygeo, dinasaurusrex, solxilynx,
    graybun, Explodingalchemist, YingYue, tsumimin13, lilyluvs, amurtacoco, Reicrane, wwflwr, xxx);

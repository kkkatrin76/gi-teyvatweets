// console.log("getTweets", Tweets);

let showPage = "tweets"; // "tweet-thread"
let selectedTweetId = null, selectedTweet = null, selectedProfile = null;
let tweetsPageScrollTop = 0;
let modalShown = false;

function resetScroll() {
    window.scrollTo(0, 0);
}

function changePage(newPage, tweetId=null) {
    if (modalShown) {
        return;
    }

    // console.log("changePage", {newPage, tweetId});

    let tweets = document.getElementById("tweets");
    let replies = document.getElementById("replies");

    if (tweetId) {
        tweetsPageScrollTop = window.scrollY;
        
        findTweet(tweetId);
    } else {
        selectedTweet = null;
    }

    showPage = newPage;
    selectedTweetId = tweetId;

    if (showPage === "tweets") {
        constructTweets();
        tweets.classList.remove("hidden");
        replies.classList.add("hidden");
        window.scrollTo(0, tweetsPageScrollTop);
    } else if (showPage === "tweet-thread") {
        constructTweetThread();
        tweets.classList.add("hidden");
        replies.classList.remove("hidden");
        window.scrollTo(0, 0);
    }
}

function findTweet(id) {
    for (let i = 0; i < Tweets.length; i++) {
        let tweet = Tweets[i];
        // console.log("tweet", {tweet});
        // console.log("tweet.getId()", tweet.getId());
        // console.log("id", id);
        if (tweet.getter("id") === Number(id)) {
            selectedTweet = tweet;
        }
    }
    // console.log("selectedTweet", selectedTweet);
}

function constructTweets() {
    let tweets = document.getElementById("tweets");
    let tweetsHTML = ``;

    for (let i = 0; i < Tweets.length; i++) {
        let tweet = Tweets[i];
        // console.log("tweet", {tweet});
        tweetsHTML += constructATweet(tweet);
    }

    tweets.innerHTML = tweetsHTML;
}

function constructATweet(tweet, type="") {
    let html = "";
    if (type === "reply") {
        html += `
            <div class="${type} tweet">
        `;
    } else {
        html += `
            <div class="${type} tweet" onclick="changePage('tweet-thread', '${tweet.getter('id')}')">
        `;
    }
    html += `
            <img src="${tweet.getter('profile').getter('picture')}" class="pfp50" onclick="toggleModal('${tweet.getter('profile').getter('id')}')" />
            <div class="right">
                <div class="row1">
                    <span id="name" class="name" onclick="toggleModal('${tweet.getter('profile').getter('id')}')">${tweet.getter('profile').getter('name')}</span>
                    <span id="username" class="username grey" onclick="toggleModal('${tweet.getter('profile').getter('id')}')"><span>@</span>${tweet.getter('profile').getter('username')}</span>
                    <span class="grey">·</span>
                    <span class="grey">${tweet.getter('timestamp')}</span>
                </div>
                <div class="row2">${tweet.getter('content')}</div>
    `;
    if (tweet.getter('image')) {
        html += `
                    <div class="row3">
                        <img src="${tweet.getter('image')}" class="contentimg" />
                    </div>
        `;
    }
    html += `
                <div class="row4">
                    <span class="col1">
                        <img src="images/icons/reply.svg" class="icon" />
                        <span>${tweet.getter('replies').length}</span>
                    </span>
                    <span class="col2">
                        <img src="images/icons/like.svg" class="icon" />
                        <span>${tweet.getter('likes')}</span>
                    </span>
                </div>
            </div>
        </div>
    `;
    return html;
}

function constructTweetThread() {
    let replies = document.getElementById("replies");

    let repliesHTML = `
        <div class="back">
            <span onclick="changePage('tweets')">←</span>
        </div>
    `;

    repliesHTML += `
        <div class="header tweet" style="display: block;">
            <div style="display: flex;">
                <img src="${selectedTweet.getter('profile').getter('picture')}" class="pfp50" onclick="toggleModal('${selectedTweet.getter('profile').getter('id')}')" />
                <div class="right">
                    <div class="row1">
                        <div id="name" class="name" onclick="toggleModal('${selectedTweet.getter('profile').getter('id')}')">${selectedTweet.getter('profile').getter('name')}</div>
                        <div id="username" class="username grey" onclick="toggleModal('${selectedTweet.getter('profile').getter('id')}')"><span>@</span>${selectedTweet.getter('profile').getter('username')}</div>
                    </div>
                </div>
            </div>
            <div style="height:20px;"></div>
            <div class="row2">${selectedTweet.getter('content')}</div>
    `;
    if (selectedTweet.getter('image')) {
        repliesHTML += `
                    <div class="row3">
                        <img src="${selectedTweet.getter('image')}" class="contentimg" />
                    </div>
        `;
    }
    repliesHTML += `
            <div class="row4">
                <span><span style="font-weight: 700; color: #e7e9ea">${selectedTweet.getter('likes')}</span> Likes</span>
            </div>
        </div>
    `;

    let Replies = selectedTweet.getter('replies');
    for (let i = 0; i < Replies.length; i++) {
        let reply = Replies[i];
        // console.log("reply", {reply});
        repliesHTML += constructATweet(reply, "reply");
    }
    
    replies.innerHTML = repliesHTML;
}

function constructProfile() {
    let profileElement = document.getElementById("profile");

    let profileHTML = `
        <div class="header"><img src="${selectedProfile.getter('header')}" /></div>
        <img src="${selectedProfile.getter('picture')}" class="pfp100" />
        <div class="details">
            <div class="name">${selectedProfile.getter('name')}</div>
            <div class="username">@${selectedProfile.getter('username')}</div>
            <div class="description">${selectedProfile.getter('description')}</div>
            <div class="location">
                <img src="images/icons/location.svg" class="icon" />
                <span>${selectedProfile.getter('location')}</span>
            </div>
            <div class="follow-count">
                <strong>${selectedProfile.getter('following')}</strong>
                <span class="grey">Following</span>
                <strong>${selectedProfile.getter('followers')}</strong>
                <span class="grey">Followers</span>
            </div>
        </div>
    `;

    profileElement.innerHTML = profileHTML;
}

// Profile modal popup
function findProfile(id) {
    for (let i = 0; i < Profiles.length; i++) {
        let profile = Profiles[i];
        // console.log("profile", {profile});
        // console.log("profile.getId()", profile.getId());
        // console.log("id", id);
        if (profile.getter("id") === Number(id)) {
            selectedProfile = profile;
        }
    }
    // console.log("selectedProfile", selectedProfile);
}

function toggleModal(profileId) {
    // console.log("toggleModal");
    var modal = document.getElementById("modal");
    modal.classList.toggle("show-modal");
    modalShown = !modalShown;

    findProfile(profileId);
    constructProfile();
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

window.addEventListener("click", windowOnClick);
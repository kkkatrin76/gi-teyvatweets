class Tweet {
    constructor(id, profile, content, timestamp="0s", image=null, likes=0, replies=[]) {
        this.id = id;
        this.profile = profile;
        this.content = content;
        this.timestamp = timestamp;
        this.image = image;
        this.likes = likes ? likes : Math.floor(Math.random() * 1000);
        this.replies = replies;
    }
    getter(varName) {
        return this[varName];
    }
}
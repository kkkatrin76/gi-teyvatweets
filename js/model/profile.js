class Profile {
    constructor(
        id, username, name,  
        picture="default.jpg",
        header="default.jpg",
        description="", location="Teyvat", following=0, followers=0,
    ) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.description = description;
        this.location = location;
        this.following = following ? following : Math.floor(Math.random() * 500);
        this.followers = followers ? followers : Math.floor(Math.random() * 1000);
        this.header = "images/header/" + header;
        this.picture = "images/pfp/" + picture;
    }
    getter(varName) {
        return this[varName];
    }
}

// TODO: Loop through Profiles and preload images
// let preloadedImageMax = 0, preloadedImageNumber = 0;
// function imagePreloaded() {
//     ++preloadedImageNumber;
//     if (preloadedImageMax === preloadedImageNumber) {
//         console.log("DONE PREOADING ALL IMAGES")
//     }
// }
// async function preload_image(im_url) {
//     if (im_url) {
//         // ++preloadedImageMax;
//         let img = new Image();
//         img.src = im_url;
//         // img.onload = imagePreloaded;
//     }
//     return "Ok";
// }

// how to do loading screen?? any listeners we can listen to??
// Profiles.map(async(p) => {
//     await preload_image(p.getter("picture"));
//     await preload_image(p.getter("header"));
//     return p;
// });

// or do the top ones only?
// preload_image("images/pfp/zhongli.jpeg");
// preload_image("images/pfp/meirin.jpeg");
// preload_image("images/pfp/albedoshusband.jpeg");
// preload_image("images/pfp/alhaitham.jpeg");





// TODO: Loop through Tweets and preload images
// Tweets.map(async(t) => {
//     await preload_image(t.getter("image"));
//     return t;
// });

// or do the top ones only?
// preload_image("images/tweet/zhongli1.jpeg");

// or might need to do pagination? ;w;
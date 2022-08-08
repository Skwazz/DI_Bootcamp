// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)

class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  // Create a method called watch() which displays a string as follows:
  // “uploader parameter watched all time parameter of title parameter!”

  watch() {
    return `${this.uploader} watched all ${this.time} of ${this.title}`;
  }
}

let firstVideo = new Video(`Star Wars`, `Lucasfilms`, `3.5 hours`);
console.log(firstVideo.watch());

let secondVideo = new Video(`Lord Of The Rings`, `Slava`, `12 hours`);
console.log(secondVideo.watch());

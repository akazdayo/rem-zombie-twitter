window.addEventListener("load", main, false);

class Detect {
	constructor() {
		this.readedTweet = 0;
		this.spamText = "Block Message";
		this.deleteTweet = this.deleteTweet.bind(this);
	}

	checkTweet(tweet) {
		if (tweet.textContent.includes(this.spamText)) {
			console.log(tweet.textContent);
			return true;
		}
		return false;
	}

	deleteTweet() {
		const tweets = document.querySelectorAll('[data-testid="tweetText"]');

		for (let i = 0; i < tweets.length; i++) {
			if (this.checkTweet(tweets[i]) === true) {
				console.log("ツイートを削除しました");
				tweets[i].parentNode.removeChild(tweets[i]);
			}
		}
		//this.readedTweet = tweets.length;
		console.log(tweets);
		console.log(tweets.length, "個のツイートを精査しました。");
	}

	start() {
		setInterval(this.deleteTweet, 500);
	}
}

function main(e) {
	const detect = new Detect();
	detect.start();
}

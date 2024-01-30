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
		const tweetBorders = document.querySelectorAll(
			'[data-testid="cellInnerDiv"]',
		);

		for (let i = 0; i < tweets.length; i++) {
			if (this.checkTweet(tweets[i]) === true) {
				tweets[i].parentNode.removeChild(tweets[i]);
			}
		}
	}

	start() {
		setInterval(this.deleteTweet, 1500);
	}
}

function main(e) {
	const detect = new Detect();
	detect.start();
}

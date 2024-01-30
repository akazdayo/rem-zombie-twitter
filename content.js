window.addEventListener("load", main, false);

class Detect {
	constructor() {
		this.readedTweet = 0;
		this.spamText = "Block Message";
		this.deleteTweet = this.deleteTweet.bind(this);
	}

	checkTweet(tweet) {
		if (tweet.innerText.includes(this.spamText)) {
			console.log(tweet.textContent);
			return true;
		}
		return false;
	}

	deleteTweet() {
		//const tweets = document.querySelectorAll('[data-testid="tweetText"]');
		const tweetBorders = document.querySelectorAll(
			'[data-testid="cellInnerDiv"]',
		);

		for (let i = 0; i < tweetBorders.length; i++) {
			let nowTweet;
			try {
				nowTweet =
					tweetBorders[i].children[0].children[0].children[0].children[0]
						.children[0].children[1].children[1].children[1].children[0];
			} catch (e) {
				continue;
			}

			if (this.checkTweet(nowTweet) === true) {
				//nowTweet[i].parentNode.removeChild(nowTweet[i]);
				tweetBorders[i].parentNode.removeChild(tweetBorders[i]);
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

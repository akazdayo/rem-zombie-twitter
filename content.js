const sleep = (waitTime) =>
	new Promise((resolve) => setTimeout(resolve, waitTime));
window.addEventListener("load", main, false);

class Detect {
	constructor() {
		this.readedTweet = 0;
		this.spamText = "Context";
		this.deleteTweet = this.deleteTweet.bind(this);
	}

	checkTweet(tweet) {
		if (tweet === null || tweet === undefined) {
			console.log("Tweet is null or undefined");
			return true;
		}
		if (tweet.innerText.includes(this.spamText)) {
			return true;
		}
		return false;
	}

	createDummyTweet(tweet) {
		const dummyTweet = document.createElement("div");
		dummyTweet.setAttribute("data-testid", "cellInnerDiv");
		dummyTweet.setAttribute("style", tweet.getAttribute("style"));
		return dummyTweet;
	}

	deleteTweet() {
		//const tweets = document.querySelectorAll('[data-testid="tweetText"]');
		const tweetBorders = document.querySelectorAll(
			'[data-testid="cellInnerDiv"]',
		);
		const allTweet = [];

		for (let i = 0; i < tweetBorders.length; i++) {
			let nowTweet;
			try {
				nowTweet =
					tweetBorders[i].children[0].children[0].children[0].children[0]
						.children[0].children[1].children[1].children[1].children[0];
				nowTweet.innerText;
			} catch (e) {
				continue;
			}

			if (
				this.checkTweet(nowTweet) === true ||
				allTweet.includes(nowTweet.innerText) === true
			) {
				console.log("Tweet deleted: ", nowTweet);
				const newElement = this.createDummyTweet(tweetBorders[i]);
				sleep(3000).then(() => {
					tweetBorders[i].parentNode.replaceChild(newElement, tweetBorders[i]);
				});
			}
			allTweet.push(nowTweet.innerText);
		}
	}

	start() {
		setInterval(this.deleteTweet, 3000);
	}
}

function main(e) {
	const detect = new Detect();
	detect.start();
}

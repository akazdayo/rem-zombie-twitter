const spamText = ".";
const newElement = document.createElement("div");
let readedTweet = 0;
newElement.innerHTML = '<p>スパムツイートを見つけました</p>';


window.addEventListener("load", main, false);


function main(e) {
    console.log("Hello, World!");
    const jsInitCheckTimer = setInterval(jsLoaded, 3000);

    function getAllTweet() {
        // XPathを使用して要素を取得
        const xpath = "/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/section/div/div";
        const iterator = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);

        return iterator.iterateNext();
    }

    function jsLoaded() {
        // ツイートを取得
        const elements = document.getElementsByClassName('css-1rynq56 r-8akbws r-krxsd3 r-dnmrzs r-1udh08x r-bcqeeo r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-bnwqim');
        //console.log("elements: ", elements);
        if (elements !== null){
            const allTweet = getAllTweet();
            //clearInterval(jsInitCheckTimer); 一旦コメントアウト
            // 取得した要素のテキスト内容をすべて表示
            for (let i = readedTweet; i < elements.length; i++) {
                console.log("elements: ", elements[i].textContent);
                if (elements[i].textContent.includes(spamText)) {
                    console.log("スパムツイートを見つけました");
                    // ツイートを削除
                    //allTweet.removeChild(allTweet.childNodes[i]);
                    //allTweet.replaceChild(newElement, allTweet.childNodes[i]);

                    elements[i].parentNode.removeChild(elements[i]);
                    //elements[i].parentNode.replaceChild(newElement, elements[i]);
                }
            }
            readedTweet = elements.length;
        }
    };
}
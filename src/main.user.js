// ==UserScript==
// @name         Mirrativ CM
// @namespace    mirrativ_CM
// @version      2.3
// @description  Adds an "Auto Stream" button to the Mirrativ broadcast page and types "でいりー" in the input field when clicked.
// @author       suke
// @match        https://www.mirrativ.com/broadcast/*
// @exclude      https://www.mirrativ.com/broadcast/history
// @exclude      https://www.mirrativ.com/broadcast/prepare
// @require      https://raw.githubusercontent.com/suke0930/Mirattiv_cm/main/src/yomiage.mjs
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    /**
 * 接続先
 */
    const fun = 0;//おふざけモード
    const randomfunny = {
        1: "ごみらてぃぶ",
        2: "うぉーふれーむ",
        3: "エーペックスレジェンズ",
        4: "フォートナイト",
        5: "フォールガイズ",
        6: "ピーユービージー",


    }

    // MutationObserverの設定オブジェクトを作成


    // MutationObserverのインスタンスを生成し、監視を開始する

    async function a() {

        const callback = function (mutationsList,) {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    // 新しいli要素が追加された場合に、イベントをトリガーする
                    if (mutation.addedNodes.length > 0 && mutation.addedNodes[0].nodeName === 'LI') {
                        // イベントをトリガーする処理を記述
                        mutation.addedNodes.forEach(function (node) {
                            if (node.nodeName === 'LI') {
                                //  console.log(node.id);


                                let path = "#" + node.id + ">div.m-user-comment>" //ここまでは共通

                                //_commentGift_1m6ac_3 _back0_1m6ac_13
                                /**
                                                       * @param {string} pathname コメントをくれた人の名前
                                                       * @param {string} pathtext コメントの内容
                                                       * @param {string} giftpath ギフトかコメントか判断するフラグ
                                                       * @param {string} giftgivename ギフトをくれた人の名前
                                                       * @param {string} giftname ギフトの種類。名前
                                                       * @param {string} giftmany ギフトの数.
                                                       */
                                try {


                                    const giftgivename = path + "p._commentText_nzdco_19>div>a>span"//ギフトをくれた人
                                    const giftname = path + "p._commentText_nzdco_19>div>a>span._accent_1m6ac_45"//ギフトの名前
                                    const giftmany = path + "p._commentText_nzdco_19>div>a>span>span"//ギフトの数
                                    const giftpath = path + "p._commentText_nzdco_19>div"//ギフト証明パス
                                    console.log(document.querySelector(giftpath))
                                    // console.log(text1 + "さん:" + text2)
                                    // _commentGift_1m6ac_3 _back0_1m6ac_13
                                    // 棒読みちゃんにコメントを送信する
                                    // console.log(cmnStr)

                                    // /#comment-16545 > div.m-user-comment > p > div > a > span:nth-child(1)
                                    /**
                                     * @param {string} pathname コメントをくれた人の名前
                                     * @param {string} pathtext コメントの内容
                                     * @param {string} giftpath ギフトかコメントか判断するフラグ
                                     * @param {string} giftgivename ギフトをくれた人の名前
                                     * @param {string} giftname ギフトの種類。名前
                                     * @param {string} giftmany ギフトの数.
                                     */


                                    if (fun !== 1) {//ギフト処理

                                        //   console.log("PATHってなぁに？")

                                        //       const pathname2 = document.querySelector(pathname).textContent
                                        //        const pathtext2 = document.querySelector(pathtext).textContent
                                        const giftpath2 = document.querySelector(giftpath).textContent
                                        const giftgivename2 = document.querySelector(giftgivename).textContent
                                        const giftname2 = document.querySelector(giftname).textContent
                                        const giftmany2 = document.querySelector(giftmany).textContent
                                        console.log("あんでぃふぁいんど？")
                                        console.log(giftgivename2)
                                        let text3 = document.querySelector(giftgivename).textContent + document.querySelector(giftmany).textContent + document.querySelector(giftname).textContent + "をぶん投げました。" + "ありがとね！";
                                        console.log(text3)
                                        let bouyomiChanClient = new BouyomiChanClient();
                                        bouyomiChanClient.talk(text3);
                                        sendservergift(giftpath2, giftgivename2, giftname2, giftmany2);
                                    }

                                    if (fun === 1) {//おふざけもーど
                                        console.log("おふざけ")
                                        //const looperman = getRandomNumber(1, 10)
                                        const looperman = 10
                                        let text3 = document.querySelector(giftgivename).textContent;
                                        let keylen = Object.keys(randomfunny).length

                                        for (let i = 0; i < looperman; i++) {
                                            let random = getRandomNumber(1, keylen)
                                            console.log(random)
                                            text3 = text3 + randomfunny[random]

                                            // 繰り返す処理を書く
                                        }
                                        console.log("は？：" + text3)





                                        let text4 = text3 + "をぶん投げました。ありがとね！"
                                        console.log(text4)
                                        let bouyomiChanClient = new BouyomiChanClient();
                                        bouyomiChanClient.talk(text4);
                                    }




                                } catch (error) {
                                    console.log("エラーだよ！")
                                    console.log(error)
                                    const pathname = path + "p._commentUserName_nzdco_11"

















                                    // 棒読みちゃんにコメントを送信する

                                    // console.log(cmnStr)

                                    const pathtext = path + "p._commentText_nzdco_19"
                                    let text1 = document.querySelector(pathname).textContent//名前
                                    let text2 = document.querySelector(pathtext).textContent//本文

                                    if (pathtext === 'さんにフォローされました') {
                                        //ここにフォロー時の処理をなんとか書く



                                        console.log(text1 + "さんにフォローされました！")
                                        let bouyomiChanClient = new BouyomiChanClient();
                                        bouyomiChanClient.talk(text1 + "さんがフォローしてくれました！ありがとねぇぇぇぇぇぇぇｌ");
                                        //ここにobsとの連携を指せるコードを書く

                                    } else {

                                        console.log(text1 + "さん:" + text2)
                                        let bouyomiChanClient = new BouyomiChanClient();
                                        bouyomiChanClient.talk(text1 + "さん:" + text2);
                                    }







                                }








                            }
                        });
                        //                    console.log("新しいli要素が追加されました" + mutation.addedNodes.className);
                        //                     console.log(mutation.addedNodes);
                    }
                }

            }
        };
        const observer = new MutationObserver(callback);
        const ul = document.querySelector('.mrChatList__list');
        const config = { childList: true };
        observer.observe(ul, config);
    }
    async function comment(once) {
        setTimeout(() => {
            console.log(document.querySelector('.mrChatList__list'))
            if (null != document.querySelector('.mrChatList__list')) {
                console.log(once)
                if (once === true) {
                    comment(false);
                } else {
                    a();
                }

            } else {
                console.log("米みつかんないよ")
                comment(true)
            }

        }, 7000);
    }

    /**
 * @param {string} pathname コメントをくれた人の名前
 * @param {string} pathtext コメントの内容
 * @param {string} giftpath ギフトかコメントか判断するフラグ
 * @param {string} giftgivename ギフトをくれた人の名前
 * @param {string} giftname ギフトの種類。名前
 * @param {string} giftmany ギフトの数.
 */



    async function sendservergift(giftpath, giftgivename, giftname, giftmany) {

        const SENDDATA = JSON.stringify({
            status: "commentlisner",
            effect: "gift",
            value: giftmany,
            data: giftname
        });
        const ws = new WebSocket('ws://localhost:8877');
        ws.addEventListener('open', function (event) {
            ws.send(SENDDATA);//鯖にデータ転送
        });

    }
    comment(true);
})();

// クリックした回数をカウントする変数
let clickCount = 0;

// ポイントを表示する要素を取得
const pointsElement = document.getElementById("points");

// クリックボタンの要素を取得
const clickButton = document.getElementById("clickButton");

// クリックイベントのリスナーを設定
clickButton.addEventListener("click", function() {
  // クリックした回数を増やす
  clickCount++;

  // ポイントを表示するテキストを更新
  pointsElement.textContent = "ポイント: " + clickCount;
});

//50Pを超えたら通知
if (point > 50) {
    alert('50を超えた！！');
}

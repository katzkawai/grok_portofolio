// ナビゲーションリンクにスムーズスクロールを追加
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// デモンストレーション用のシンプルなコンソールログ
console.log("ポートフォリオサイトが読み込まれました！");

# profilepage

自己紹介ページです。 [このページ](http://www.sic.shibaura-it.ac.jp/~al19078) です

## 使用技術

- Vue2系 CDN
- vue-router CDN
- http-vue-loader CDN

その他、JavaScript・CSS(BEM)・font awsome・Google Fonts

詳細はこちら [Qiita記事『Node/Vue-CLI/Viteを使わずに最速でVueのSPAを作る』](https://qiita.com/OhDyla/items/aa00f829fd4d22a6af35)

## 技術選定
普段は Vue3 + Composition-API + Vite を使用しておりますが、nodeをインストールできないサーバを利用するにあたり、全てCDNで完結する環境を構築しました。<br>
SCSSもCDN上で実行できるとのことでしたが、パフォーマンス上の懸念や今後のバージョン対応も含めCSSをBEMライクな記法でベタ打ちしスタイリングしました。

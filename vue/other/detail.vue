<template>
  <div class="details">
    <div class="title">This Page ...</div>
    <div class="details__textbox">
      このページについて解説するよ。
    </div>
    <div class="details__textbox">
      このページはCDN形式のVue2系でSPAを実装しているよ。
    </div>
    <div class="details__textbox">
      Q. 具体的に教えて<br>
      A. Vue2系、vue-router、http-vue-loader、の CDN を使っているよ。
      その他、font awesome や Google Fonts も使っているよ。
      UIコンポーネントは使わず、ベタの CSS でスタイリングしているよ。

    </div>
    <div class="details__textbox">
      Q. なぜCDNなの？<br>
      A. 大学のサーバー(無料)でSPAを実現する過程で、node やそれに伴う Vue-CLI / Vite を構築できないからだよ。
    </div>
    <div class="details__textbox">
      Q. なぜ業務で3系を使っているのに2系なの？<br>
      A. まだ3系で vue-router を始めとしてちゃんとした CDN が存在しないからだよ。本当は3系で書きたいよ。もしかしたら見逃してるだけの可能性もあるよ。
    </div>
    <div class="details__textbox">
      Q. SCSSなどは使わないの？<br>
      A. SCSS も CDN で実装できるらしいけど、BEM記法を使っているからまあいっかってなったよ。
    </div>
    <div class="details__null-sec"></div>
    <div class="title">S.I.T. Server</div>
    <div class="details__textbox">
      大学のサーバを用いたHP構築方法について解説するよ。
    </div>
    <div class="details__textbox">
      マークダウンで書かないと分かりづらいからQiitaのリンクを貼るよ。
    </div>
    <a href="#" target="_blank" class="details__a-qiita">
        <i class="fas fa-external-link-alt"></i>
        <span style="text-decoration: underline">Qiitaリンク</span>
    </a>
  </div>
</template>
<script>
module.exports = {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.details {
  padding: 20px;

}

.details__null-sec {
  height: 20px;
}

.details__textbox {
  font-size: 14px;
  margin-bottom: 20px;
  line-height: 24px;
}

.details__a-qiita {
  padding: 8px 14px;
  font-size: 14px;
  border: 1px solid #999;
  border-radius: 8px;
}

</style>
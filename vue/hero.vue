<template>
  <div class="first-profile">
    <div class="first-profile__top">
      <div class="first-profile__top-left">
        <div class="first-profile__photo-wrapper">
          <img src="./static/index/hanabi_cir.png" class="first-profile__myphoto">
        </div>
      </div>
      <div class="first-profile__top-right">
        <div class="first-profile__top-ffbox">
          <div class="first-profile__top-ff-num">400+</div>
          <div class="first-profile__top-ff-dtl">視聴映画数</div>
        </div>
        <div class="first-profile__top-ffbox">
          <div class="first-profile__top-ff-num">35</div>
          <div class="first-profile__top-ff-dtl">都道府県制覇</div>
        </div>
        <div class="first-profile__top-ffbox">
          <div class="first-profile__top-ff-num">0725</div>
          <div class="first-profile__top-ff-dtl">誕生日</div>
        </div>
      </div>
    </div>
    <div class="first-profile__middle">
      <div class="first-profile__middle-name">Kentaro&nbsp;OHDAIRA&nbsp;&nbsp;大平 健太郎</div>
      <div class="first-profile__middle-attr">
        - 芝浦工業大学 工学部情報工学科 学部3年<br>- 第49回芝浦祭実行委員会実行委員長<br>- 株式会社エニーアップ フロント/バックエンドエンジニア<br>
      </div>
    </div>
    <div class="first-profile__bottom">
      <router-link tag="div" to="/page2" class="first-profile__bottom-button">
        プロフィール
      </router-link>
      <a href="https://qiita.com/OhDyla" target="_blank" class="first-profile__bottom-button is-qiita">
        <i class="fas fa-external-link-alt"></i>
        <span class="first-profile__bottom-button-span">Qiita</span>
      </a>
    </div>
  </div>
</template>

<script>
module.exports = {
    data: function() {
        return {

        }
    }
}
</script>

<style scoped>
.first-profile__bottom-button.is-qiita {
  color: #32cd32;
}

.first-profile__bottom-button-span {
  display: inline-block;
  margin-left: 8px;
}
</style>
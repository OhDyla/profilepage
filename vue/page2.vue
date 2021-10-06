<template>
<div>
  <Hero></Hero>
  <Jumper activater=2></Jumper>
  <div class="who">
    <div class="who__title-box">
      <img class="who__title-img" src="../static/page2/cat.jpg">
      <div class="who__title-title">プロフィール</div>
    </div>
    <div class="who__details">
      <div class="who__detail">
        新潟県新潟市出身
      </div>
      <div class="who__detail">
        芝浦工業大学&nbsp;工学部情報工学科に在学中。23卒。大学院進学予定なし。
      </div>
      <div class="who__detail">
        学部ではCSと数値解析を専攻。
      </div>
      <div class="who__detail">
        その傍ら弊学大学祭「芝浦祭」の実行委員会に所属。2020年11月より第49回芝浦祭実行委員長に就任。
      </div>
      <div class="who__detail">
        Web系開発会社に就業中。<br>業務歴合計約1年半。主にフロント側が Vue3 + TypeScript (/JS) バック側が Go + Revel を使用。
      </div>
    </div>

    <div class="who__title-box">
      <img class="who__title-img" src="../static/page2/beer.jpg">
      <div class="who__title-title">情報工学科での活動</div>
    </div>
    <div class="who__details">
      <div class="who__detail">
        芝浦工業大学工学部情報工学科在学。<br>現在学部3年。
      </div>
      <div class="who__detail">
        コンピュータサイエンス(CS)と数値計算を学修中。
      </div>
      <div class="who__detail">
        主な使用言語は<br>
        { メイン : C言語,<br>
        &nbsp;&nbsp;数値画像解析系 : Python3,<br>
        &nbsp;&nbsp;アプリケーション系 : Java }<br>
        その他、ShellScriptやアセンブリ言語なども使用。
      </div>
    </div>

    <div class="who__title-box">
      <img class="who__title-img" src="../static/page2/suica.jpg">
      <div class="who__title-title">芝浦祭実行委員会での活動</div>
    </div>
    <div class="who__details">
      <div class="who__detail">
        第49回芝浦祭実行委員会実行委員長
      </div>
      <div class="who__detail">
        広報局Web部門出身。元Web部門長
      </div>
      <div class="who__detail">
        2021年11月5(Fri)〜7(Sun)日、第49回芝浦祭開催。<br>
        キャンパス開催 (在学生のみ対象) およびオンライン開催によるハイブリッド形式。<br>
      </div>
      <div class="who__detail">
        <a href="http://shibaurasai.com/" target="_blank" class="who__detail-a">
        <i class="fas fa-external-link-alt"></i>
        <span style="text-decoration: underline">第49回芝浦祭公式HP</span>
        </a>
      </div>
      <div class="who__detail">
        ぜひ見てね。
      </div>
    </div>

    <div class="who__title-box">
      <img class="who__title-img" src="../static/page2/panda.jpg">
      <div class="who__title-title">エンジニアとしての活動</div>
    </div>
    <div class="who__details">
      <div class="who__detail">
        主な活動内容は以下を参照
      </div>
    <router-link tag="div" to="/page3" class="who__detail is-link">
      <i class="fas fa-link who__detail-icon"></i>
      <span style="text-decoration: underline">JUMP!</span>
    </router-link>
    </div>
  </div>
</div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      title: '自己紹介'
    }
  },
  components: {
    'Hero': httpVueLoader('./hero.vue'),
    'Jumper': httpVueLoader('./jumper.vue')
  }
}
</script>

<style scoped>
.who {
  padding: 20px;
  min-height: 60vh;
}

.who__title-box {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.who__title-img {
  margin-right: 8px;
  width: 28px;
  height: 28px;
  /* あとで消す↓ */
  border: 1px solid #DDDDDD;
  /* あとで消す↑ */
  border-radius: 50%;
}

.who__title-title {
  display: inline-block;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 16px;
  background-color: #EBEBEB;
}

.who__details {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 28px;
}

.who__detail {
  display: inline-block;
  margin-bottom: 2px;
  padding: 8px 12px;
  max-width: 270px;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  background-color: #9932CC;
  border-radius: 16px 4px 4px 16px;
}

.who__detail:first-child {
  border-top-right-radius: 16px;
}

.who__detail:last-child {
  border-bottom-right-radius: 16px;
}

.who__detail.is-link {
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
}

.who__detail-a {
  color: white;
}

.who__detail-icon {
  font-size: 22px;
}

</style>
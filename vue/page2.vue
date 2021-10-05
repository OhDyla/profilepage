<template>
<div>
  <Hero></Hero>
  <Jumper activater=2></Jumper>
  <div class="who">
    <div class="title">Who is ...</div>
    <div class="who__title-box">
      <img>
      <div class="who__title-title">自己紹介</div>
    </div>
    <div class="who__details">
      <div class="who__detail">
        新潟県新潟市出身
      </div>
      <div class="who__detail">
        芝浦工業大学&nbsp;工学部情報工学科に在学中。<br>
        23卒。大学院進学予定はありません。
      </div>
      <div class="who__detail">
        大学ではCSと数値解析を専攻。<br>その傍ら弊学大学祭「芝浦祭」の実行委員会に所属。2020年11月より第49回芝浦祭実行委員長に就任。
      </div>
      <div class="who__detail">
        業務委託エンジニアとして、Web系開発会社の株式会社エニーアップに就業中。<br>
        業務歴約1年半。主にフロント側が Vue3 + TypeScript(/JS)、バックが Go + Revel を使用。
      </div>
    </div>

    <div class="who__title-box">
      <img>
      <div class="who__title-title">情報工学科での活動</div>
    </div>

    <div class="who__title-box">
      <img>
      <div class="who__title-title">芝浦祭実行委員会での活動</div>
    </div>



    <div class="who__box">
      <div class="who__box-title"><span>自己紹介</span></div>
      <div class="who__box-detail">
        新潟県新潟市出身。<br>
        芝浦工業大学&nbsp;工学部情報工学科在学<br>23卒。大学院進学予定はありません
        <div class="null-space"></div>
        大学ではCSと数値解析を専攻し、その傍ら弊学大学祭「芝浦祭」の実行委員会に所属<br>
        2020年11月より<span class="underline r">第49回芝浦祭実行委員長</span>に就任。
        <div class="null-space"></div>
        業務委託エンジニアとして、Web系開発会社の株式会社エニーアップにて<span class="underline b">フロント/バックエンドエンジニア</span>として就業中。業務歴約1年半。主にフロント側が Vue3 + TypeScript(/JS)、バックが Go + Revel を使用。
      </div>
    </div>
    <div class="who__box">
      <div class="who__box-title">情報工学科での活動</div>
      <div class="who__box-detail">
        芝浦工業大学&nbsp;工学部情報工学科在学。現在学部3年。23卒。大学院進学予定なし(0%)<br>
        コンピュータサイエンス(CS)と数値計算を学修中。主な使用言語は、メインがC言語、数値画像解析系でPython3、アプリケーション系でJava。その他、ShellScriptやアセンブリ言語なども使用。
      </div>
    </div>
    <div class="who__box">
      <div class="who__box-title">芝浦祭での活動</div>
      <div class="who__box-detail">

      </div>
    </div>
    <div class="who__box">
      <div class="who__box-title">エンジニアとしての活動</div>
      <div class="who__box-detail">
        <router-link tag="div" to="/page3" class="">詳細はこちら</router-link>
      </div>
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
  margin-bottom: 8px;
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
}

.who__detail {
  display: inline-block;
  margin-bottom: 2px;
  padding: 8px 12px;
  max-width: 300px;
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
  margin-bottom: 12px;
  border-bottom-right-radius: 16px;
}

.who__box {
  margin-bottom: 52px;
  width: 80%;
}

.who__box:nth-child(2n+1) {
    margin-left: auto;
}

.who__box-title {
  margin-bottom: 8px;
  padding-bottom: 4px;
  display: inline-block;
  font-size: 16px;
  border-bottom: 4px double #FFFFFF;
}

.who__box-detail {
  font-size: 14px;
  line-height: 20px;
}

.null-space {
  height: 10px;
}

.underline.r {
  background: linear-gradient(transparent 60%, #FF6347 0%);
}
.underline.b {
  background: linear-gradient(transparent 60%, #1E90FF 0%);
}

</style>
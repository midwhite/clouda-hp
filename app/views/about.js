import React, {Component} from 'react';
import { Link } from 'react-router';

const Header = require('./header.js');
const Tool   = require('./tool.js');

class Activity extends Component {
  render(){
    return(
      <div>
        <Header />
        <section id="activity" className="contentWrapper layout-1">
          <div className="css-wrapper css-bg-about">
            <div className="css-content">
              <p className="css-title">よく学び、よく動き、よく遊ぶ。</p>
              <div className="css-description">
                <p>Cloud.Aは学術と社会活動の融合を目標に、3つの柱で活動している。</p>
                <p>第一に、社会問題を分析する知識と思考法を学ぶための勉強会。</p>
                <p>第二に、学んだ知識を用いて具体的なアクションを起こす社会活動プロジェクト。</p>
                <p>第三に、会員間のコミュニケーションと創発を促進する交流会だ。</p>
              </div>
            </div>

            <div className="css-content">
              <h2>勉強会</h2>
              <p className="css-title">月に1度、テーマを設けて議論する。</p>
              <div className="css-description">
                <p>Cloud.Aの勉強会は、月に1回程度、特定のテーマを設けて議論する形式を採る。テーマは何らかの社会問題について多角的に切り込む内容でも良し、何らかの学問領域について入門編を学ぶ内容でも良し。参加は強制ではなく自由参加で、そのテーマに関心がある者が集まる。</p>
                <p>発表担当は挙手制で、自分が関心を持つテーマについて知識を深めたいと思う者が自由に担当する。1年生など発表に慣れていない場合は、学術サポート班がリサーチ方法や発表の論理構成など、本人および参加者が質の高い学びを得られるよう手厚く支援する。そのため過去には高校生がTPPについてリサーチして発表した例もあるなど、意欲があれば積極的に挑戦できる体制が整っている。</p>
                <p>発表のためのリサーチや当日の議論が、その後のプロジェクトに繋がることもある。いま関心を持っている問題や分野がある人は、気軽に代表や学術サポート部に相談してほしい。</p>
              </div>
              <Link to="/about/workshop" className="css-next-link">過去のテーマを見る</Link>
            </div>
          </div>

          <div className="css-wrapper css-bg-snow">
            <div className="css-content">
              <h2>激論三原則</h2>
              <div className="css-description">
                <p>Cloud.Aの勉強会では、誰でも議論に参加して学びを深めることができるよう、次の三原則を掲げている。</p>
              </div>
              <p className="css-title">一、説得と傾聴を心がける。</p>
              <div className="css-description">
                <p>自分の中で理が通っていると思うことを主張しても、周囲が理解できなければただの自己満足だ。意見が異なる相手に対して、同意まではできなくとも、「理解」することを諦めないこと。相手を説得するつもりで丁寧な説明を心がけること。</p>
                <p>また、相手の意見を聞かずに一方的に主張してもいけない。発言が苦手そうな参加者に対しても、丁寧に意見を聞きながら議論を進めること。良質な議論のためには、こうした姿勢が必要だ。</p>
                <p>これらを徹底すれば、発言にあたり自分の意見を整理し、短く要点をまとめて発言する技術が身についてくる。就職活動の面接でも役立つだろうし、立場が異なる相手と協力しながら仕事を進める力にもなる。Cloud.Aはただ知識を学ぶだけではなく、知識を通してそういった技術を身につけられるように活動している。</p>
              </div>
              <p className="css-title">二、相手の意見の否定を恐れず、自分の意見を尊重する。</p>
              <div className="css-description">
                <p>よく「相手の意見を否定してはいけない」と言われるが、Cloud.Aでは逆に相手の意見と自分の意見が異なった場合、なあなあで「みんな違ってみんな良い」などと流すのではなく、意見が異なる理由を探して相手に説明することを善とする。</p>
                <p>もちろん相手の人格を否定することは許されないが、相手の意見は人格ではない。異なる意見を持つ者とこそ積極的に議論しなければ、その問題について真に深く理解することはできない。</p>
              </div>
              <p className="css-title">三、具体的な感想を持ち帰る。</p>
              <div className="css-description">
                <p>学力とは「学ぶ力」である。仮に勉強時間をx、知識量をyとした時、y=ax+bの切片bが大学入学時点の知識量、傾きaが学力である。つまり学力とは、知の獲得効率であると言い換えることができる。</p>
                <p>Cloud.Aは、この意味での「学力」を高める勉強会サークルでありたいと考えている。そのために必要なものの1つが、具体的な感想を持ち帰るという姿勢だ。</p>
                <p>勉強会に参加した後の感想として「考えさせられた」「勉強になった」と話す人がよくいる。しかし「考えさせられた」ではなく、「何を」考えたのか。「何を」新しく知ったのか。今後、その問題についてどういった立場をとるか。最後に振り返って、これらのうち1つも言うことができないのならば、勉強会に参加した時間は無意味だったことになる。</p>
                <p>勉強会を通して、具体的に何を得たのかをその場で言語化すること。知らなかった知識は何か、触れたことのなかった考え方は何だったか、新たに生まれた考え方は何だったか。それを具体的に言うことができて初めて、意味のある勉強会だったと言うことができる。1回1回の勉強会で「学ぶ」ための訓練をすることで、入学時点での知識量に関係なく自分の能力を伸ばしていくことができる。</p>
              </div>
            </div>
          </div>

          <div className="css-wrapper css-bg-star">
            <div className="css-content">
              <h2>プロジェクト活動</h2>
              <p className="css-title">チームで選んだ社会問題を分析する。</p>
              <div className="css-description">
                <p>月に1度の勉強会や全体の交流会を通して興味のある領域が近い仲間を見つけたら、チームを組んで詳細な分析を始めよう。</p>
                <p>社会問題が長く解決されないことには必ず理由がある。安直な、誰でも思いつく解決策など役に立たない。その問題の本質を突き詰め、解決困難な構造の全体を見通して初めて、有効な手立てが見えてくる。</p>
              </div>
              <p className="css-title">解決のためのアクションを起こす。</p>
              <div className="css-description">
                <p>その問題についてサークル内で誰よりも詳しいと言えるくらい調査が進んだら、改めてチームを編成して具体的なアクションを起こそう。少人数のチームで社会全体への影響力を最大化するためには、インターネットのテクノロジーを使いこなす必要がある。そのためWebマーケティングやWebエンジニアリング等、広く必要な技術を学ぶ研修の機会も用意されている。</p>
                <p>これからの時代、Web上で広く考えを発信したり、インターネット上にアプリケーションを構築するプロジェクトを進めたりする技術は、どんな場面でも役に立つスキルになる。文系・理系に関わらず、希望すれば簡単なサービスを自分で作れるように勉強することもできる。</p>
              </div>
              <p className="css-title">CivicTechのフロンティアを開拓する。</p>
              <div className="css-description">
                <p>いま社会問題や公共活動の分野にテクノロジーを導入することで解決を図ろうとする運動はCivicTechと呼ばれ、ソーシャルビジネスの一分野として注目を集めている。まだまだ参入者が少ないこの分野は、社会問題の解決に関心があり、かつインターネットを使いこなすことができるデジタルネイティブ世代が活躍するフロンティア状態だ。Cloud.Aはこの潮流に最速で追随し、この領域における地位をいち早く確立できる位置にいる。共に最前線を開拓し、先進事例と呼べる作品を残していくことに関心があれば、ぜひプロジェクトに参加してみてほしい。</p>
              </div>
              <Link to="/about/projects" className="css-next-link">プロジェクト例を見る</Link>
            </div>
          </div>

          <div className="css-wrapper">
            <div className="css-content">
              <h2>交流会企画</h2>
              <p className="css-title">学ぶだけじゃない。遊ぶ時は全力で遊ぼう。</p>
              <div className="css-description">
                <p>せっかく集まった気の合う仲間同士、遊ぶ時も全力で遊ばなければ勿体無い。そのため、運営チームの中に交流会企画を担当する部署を設け、飲み会やお好み焼き会、花見やバーベキュー、忘年会やスキー合宿といった様々なイベントを企画している。</p>
                <p>Cloud.Aは活動内容からも推察できる通り、全体的に落ち着いたメンバーが多く、よくあるテニサー等のように大騒ぎして飲み散らかすようなことは決して無い。夜中までくだらないことを話す日もあれば、注目のトピックについて熱く議論し合うこともある。学問と社会に向き合うという共通の志があるからこそ、卒業後も長く続く信頼関係を築くことができる。</p>
                <p>せっかくの大学生活を遊び倒すのではなく、真剣に学問と社会に向き合いたい人。飲み会で記憶を失くすまで騒ぐよりも、落ち着いて考えをぶつけ合うことができる仲間を得たい人。そういった人にとって、Cloud.Aは一度だけでも顔を出す価値が必ずある。真剣な自分を偽らずに済む居場所に魅力を感じるならば、1日だけでいい、まずは説明会を覗いてみてほしい。</p>
              </div>
              <Link to="/recruit" className="css-next-link">新歓情報を見る</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

module.exports = Activity;
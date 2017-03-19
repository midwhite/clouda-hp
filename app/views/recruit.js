import React, {Component} from 'react';
import { Link } from 'react-router';

const Header = require('./header.js');
const Tool = require('./tool.js');

class Recruit extends Component {
  constructor(){
    super();
    this.state = {
      currentMenu: 'all',
      currentContent: 'schedule'
    }
  }
  openMenu(name){
    if (window.screen.width > 500){
      return;
    }
    if(this.state.currentMenu === name){
      name = 'none';
    }
    this.setState({
      currentMenu: name
    });
  }
  openContent(name){
    this.setState({
      currentMenu: (window.screen.width < 500) ? 'none' : 'all',
      currentContent: name
    });
  }
  render(){
    return(
      <div className="layout-3">
        <Header />
        <div id="recruit" className="contentWrapper">
          <div className="css-sidebar">
            <h2>新歓情報</h2>
            <h3 onClick={this.openMenu.bind(this, 'info')}>新歓情報</h3>
            {(()=>{
              if(this.state.currentMenu === 'info' || this.state.currentMenu === 'all'){
                return(
                  <ul className="css-side-menu">
                    <li onClick={this.openContent.bind(this, 'schedule')}>
                      <p className="css-menu-title">スケジュール</p>
                    </li>
                    <li>
                      <p className="css-menu-title"><a href="https://goo.gl/forms/rAjSSPh4LlEg4kX53" target="_blank">応募フォーム</a></p>
                    </li>
                    <li onClick={this.openContent.bind(this, 'faq')}>
                      <p className="css-menu-title">よくあるご質問</p>
                    </li>
                  </ul>
                );
              }
            })()}
            <h2>参加の種類</h2>
            <h3 onClick={this.openMenu.bind(this, 'admin')}>運営</h3>
            {(()=>{
              if(this.state.currentMenu === 'admin' || this.state.currentMenu === 'all'){
                return(
                  <ul className="css-side-menu">
                    <li onClick={this.openContent.bind(this, 'pr')}>
                      <p className="css-menu-title">広報・企画部</p>
                    </li>
                    <li onClick={this.openContent.bind(this, 'academic')}>
                      <p className="css-menu-title">学術統括部</p>
                    </li>
                    <li onClick={this.openContent.bind(this, 'project')}>
                      <p className="css-menu-title">プロジェクト統括部</p>
                    </li>
                  </ul>
                );
              }
            })()}
            <h3 onClick={this.openMenu.bind(this, 'workshop')}>勉強会</h3>
            {(()=>{
              if(this.state.currentMenu === 'workshop' || this.state.currentMenu === 'all'){
                return(
                  <ul className="css-side-menu">
                    <li onClick={this.openContent.bind(this, 'presenter')}>
                      <p className="css-menu-title">発表者</p>
                    </li>
                    <li onClick={this.openContent.bind(this, 'participant')}>
                      <p className="css-menu-title">参加者</p>
                    </li>
                  </ul>
                );
              }
            })()}
            <h3 onClick={this.openMenu.bind(this, 'project')}>プロジェクト</h3>
            {(()=>{
              if(this.state.currentMenu === 'project' || this.state.currentMenu === 'all'){
                return(
                  <ul className="css-side-menu">
                    <li onClick={this.openContent.bind(this, 'joinProject')}>
                      <p className="css-menu-title">既存プロジェクト</p>
                    </li>
                    <li onClick={this.openContent.bind(this, 'newProject')}>
                      <p className="css-menu-title">新規プロジェクト</p>
                    </li>
                  </ul>
                );
              }
            })()}
          </div>
          <MainContent currentContent={this.state.currentContent} />
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}

class MainContent extends Component {
  render(){
    switch(this.props.currentContent){
      case 'schedule':
        return(
          <div className="css-main-content">
            <h2>スケジュール</h2>
            <div className="css-section">
              <h3>お花見（4/2）</h3>
              <div className="css-description">
                <p>メンバーとの交流を兼ねて、代々木公園で新歓お花見をします。まずは気軽にどんな雰囲気のメンバーがいるのか見に来てみてください。</p>
                <p> >> <a href="https://www.facebook.com/events/1656012578027733/" target="_blank">イベントページ</a></p>
              </div>
            </div>
            <div className="css-section">
              <h3>体験勉強会（日程調整中）</h3>
              <div className="css-description">
                <p>4月に新入生が体験参加できる勉強会を開催します。</p>
                <p>事前知識なしで気軽に学問を楽しめるコンテンツを用意しますので、お楽しみに！</p>
              </div>
            </div>
            <div className="css-section">
              <h3>学問相談会（日程調整中）</h3>
              <div className="css-description">
                <p>現時点で関心のある学問分野や社会問題について聞きながら、大学生活4年間の勉強や活動の計画について先輩が相談に乗ります。その中でCloud.A会員に近いテーマを持つメンバーやプロジェクトがあれば紹介します。</p>
                <p>学問や社会問題に詳しい先輩と話しながら4年間の計画を立てるだけでも非常に役立つので、Cloud.Aへの参加をまだ迷っている方でも気軽にお越しください！</p>
              </div>
            </div>
            <div className="css-apply">
              <iframe src="https://goo.gl/forms/zkULg5PvH8zXWpxj2" className="css-apply-iframe" frameBorder="0"></iframe>
            </div>
          </div>
        );
        break;
      case 'faq':
        return(
          <div className="css-main-content">
            <h2>よくあるご質問</h2>
            <div className="css-section">
              <h3>1. インカレですか？</h3>
              <div className="css-description">
                <p>はい、都内を中心に数多くの大学からメンバーが集まっています。普段はなかなか出会う機会が無い他大学の学生と交流できることも大きな魅力の1つです。</p>
                <Link to="/members" className="css-link-btn">メンバー情報を見る</Link>
              </div>
              <h3>2. 理系でも参加できますか？</h3>
              <div className="css-description">
                <p>はい、もちろん理系学生も多く参加しています。理系の場合、学部内では自分の専攻以外に興味を持つ友人を見つけづらいので、より広く人文学や社会科学についても学びたいという理由でCloud.Aに参加するメンバーが多いようです。</p>
              </div>
              <h3>3. 入会費などはありますか？</h3>
              <div className="css-description">
                <p>入会費や年会費などは一切ありません。</p>
              </div>
            </div>
          </div>
        );
        break;
      case 'pr':
        return(
          <div className="css-main-content">
            <h2>広報・企画部</h2>
            <div className="css-section">
              <div className="css-description">
                <p>広報・企画部は、最新のマーケティング手法を活用した勉強会の告知・集客や、Cloud.A内の交流会イベントの企画を担当します。</p>
                <p>広報活動ではWebマーケティング施策の他に、学生団体が開催する勉強会や交流会などに積極的に参加して活動を宣伝するため、広い人脈を築くことができます。</p>
                <p>企画運営では、飲み会やお好み焼き会だけでなく、お花見やバーベキュー、スキー合宿といった大きなイベントを企画して、工夫しながら運営することができるため、企画実行力が身につきます。</p>
              </div>
            </div>
            <div className="css-section">
              <h3>仕事内容</h3>
              <div className="css-description">
                <p className="css-list">勉強会の告知・集客</p>
                <p className="css-list">新規会員の募集</p>
                <p className="css-list">交流会イベントの立案・運営</p>
                <p className="css-list">マーケティング研究会の運営</p>
                <p className="css-list">SNSアカウントの管理</p>
                <p className="css-list">ホームページの更新</p>
              </div>
            </div>
            <div className="css-section">
              <h3>身につく能力</h3>
              <div className="css-description">
                <p className="css-list">タスク管理・マネジメントスキル</p>
                <p className="css-list">企画立案・運営スキル</p>
                <p className="css-list">アイデアを考え、実現するスキル</p>
                <p className="css-list">Webマーケティングのスキル</p>
                <p className="css-list">基本的なWord・Excelスキル</p>
                <p className="css-list">Webサイト管理のスキル</p>
              </div>
            </div>
            <div className="css-section">
              <h3>こんな人にオススメ</h3>
              <div className="css-description">
                <p className="css-list">広報やマーケティングに興味がある</p>
                <p className="css-list">相手のニーズを想像しながら、心に響くメッセージを考えるのが好き</p>
                <p className="css-list">大学生活を通して広い人脈を築きたい</p>
                <p className="css-list">みんなが楽しめる企画やイベントを作るのが好き</p>
                <p className="css-list">HTMLやホームページ管理ツールに触れたことがある</p>
              </div>
            </div>
          </div>
        );
        break;
      case 'academic':
        return(
          <div className="css-main-content">
            <h2>学術統括部</h2>
            <div className="css-section">
              <div className="css-description">
                <p>学術統括部は、勉強会の発表者に初めて挑戦する人向けに、発表テーマの選定やリサーチ、プレゼンテーションの構成などを総合的にサポートします。</p>
                <p>主に勉強会での発表経験を積んだ上級生が担当します。</p>
              </div>
            </div>
            <div className="css-section">
              <h3>仕事内容</h3>
              <div className="css-description">
                <p className="css-list">発表希望者とテーマの相談</p>
                <p className="css-list">発表内容の構成・整理</p>
                <p className="css-list">リサーチの補助</p>
                <p className="css-list">ディスカッションの設計</p>
                <p className="css-list">プレゼン作成のサポート</p>
              </div>
            </div>
            <div className="css-section">
              <h3>身につく能力</h3>
              <div className="css-description">
                <p className="css-list">広範な学術分野の基礎知識</p>
                <p className="css-list">論理的に発表を構成するスキル</p>
                <p className="css-list">根拠に基づいて結論を導くスキル</p>
                <p className="css-list">学術的なリサーチのスキル</p>
                <p className="css-list">相手に分かりやすく説明するスキル</p>
              </div>
            </div>
            <div className="css-section">
              <h3>こんな人にオススメ</h3>
              <div className="css-description">
                <p className="css-list">自分の専門分野だけでなく、どんな分野でも通じる論理的思考力やエビデンスベーストな構成力を身につけたい</p>
              </div>
            </div>
          </div>
        );
        break;
      case 'project':
        return(
          <div className="css-main-content">
            <h2>プロジェクト統括部</h2>
            <div className="css-section">
              <div className="css-description">
                <p>プロジェクト統括部は、Cloud.A内で動いている各プロジェクトの進捗や課題を把握し、チーム間でノウハウの共有や協力できるポイントの調整を行います。</p>
                <p>またプロジェクト参加者向けに、プロジェクトマネジメントやプレゼンテーション、ロジカルシンキングやマーケティング等のスキル研修を企画し、実施します。</p>
              </div>
            </div>
            <div className="css-section">
              <h3>仕事内容</h3>
              <div className="css-description">
                <p className="css-list">プロジェクト定例会の運営</p>
                <p className="css-list">メンバー研修の実施</p>
                <p className="css-list">新規プロジェクト立ち上げの支援</p>
              </div>
            </div>
            <div className="css-section">
              <h3>身につく能力</h3>
              <div className="css-description">
                <p className="css-list">マネジメントやマーケティングのスキル</p>
                <p className="css-list">会議体の効率的な運営や決定プロセス管理のスキル</p>
                <p className="css-list">プロジェクト経営の俯瞰的な把握と方針策定のスキル</p>
              </div>
            </div>
            <div className="css-section">
              <h3>こんな人にオススメ</h3>
              <div className="css-description">
                <p className="css-list">プロジェクト管理やマーケティングに興味がある</p>
                <p className="css-list">分野に関わらず社会問題の解決に取り組むリーダーたちをサポートしたい</p>
              </div>
            </div>
          </div>
        );
        break;
      case 'presenter':
        return(
          <div className="css-main-content">
            <h2>発表者</h2>
            <div className="css-section">
              <div className="css-description">
                <p>自分の興味のある社会問題について調べ、会員が参加する勉強会で発表します。また、自分が感じている課題意識についてディスカッションテーマを設定し、多くの参加者と共に考え、議論できます。</p>
                <p>初めて挑戦する場合は学術統括部がテーマの選定からリサーチ方法、プレゼンテーションの構成など総合的にサポートするので、学生生活で最初に挑戦する登竜門として最適です。</p>
              </div>
            </div>
            <div className="css-section">
              <h3>身につく能力</h3>
              <div className="css-description">
                <p className="css-list">関心のある学問分野や社会問題についての知識・分析能力</p>
                <p className="css-list">分かりやすく伝えるためのプレゼンテーション能力</p>
              </div>
            </div>
            <div className="css-section">
              <h3>こんな人にオススメ</h3>
              <div className="css-description">
                <p className="css-list">何となく関心がある社会問題がある</p>
                <p className="css-list">勉強してみたい学問分野がある</p>
                <p className="css-list">誰かに伝えたい、一緒に考えたい問題がある</p>
                <p className="css-list">人前で自分の考えを発信する練習をしてみたい</p>
              </div>
            </div>
          </div>
        );
        break;
      case 'participant':
        return(
          <div className="css-main-content">
            <h2>参加者</h2>
            <div className="css-section">
              <div className="css-description">
                <p>Cloud.Aでは月に1度程度、学問や社会問題に関する勉強会を開催しています。参加は自由となっており、その回のテーマに関心があれば参加します。</p>
                <p>グループに加入していれば勉強会開催の連絡が届くので、それを見て参加の可否を連絡できます。</p>
              </div>
            </div>
            <div className="css-section">
              <h3>こんな人にオススメ</h3>
              <div className="css-description">
                <p className="css-list">様々な関心や専攻の人と交流したい</p>
                <p className="css-list">学術や社会問題について議論したい</p>
                <p className="css-list">自分の専門分野だけでなく、広く教養を培いたい</p>
              </div>
            </div>
          </div>
        );
        break;
      case 'joinProject':
        return(
          <div className="css-main-content">
            <h2>既存プロジェクト</h2>
            <div className="css-section">
              <h3>MatchLab</h3>
              <div className="css-description">
                <p>MatchLabは、少子化や未婚率の上昇、特に高学歴の若者に多い「忙しくて出会いが無く、結婚できない」という問題に対して立ち上げられたプロジェクトです。高学歴者向けのマッチングサービスを開発・運営する他、実際に異性と会うことができるリアルイベントを開催しています。</p>
                <p>このプロジェクトでは現在、マーケティングポジションを募集しています。</p>
              </div>
            </div>

            <div className="css-section">
              <h3>LifeWatch</h3>
              <div className="css-description">
                <p>LifeWatchは2015年12月の電通の過労自殺事件を受け、長時間労働とメンタルヘルス問題に焦点を当てて立ち上げられたプロジェクトです。労働時間の記録・管理アプリを開発・運営し、業界・企業別の労働時間データの収集や働く人の声を傾聴するサービスを提供しています。</p>
                <p>このプロジェクトでは現在、エンジニア・マーケティングポジションを募集しています。</p>
              </div>
            </div>

            <div className="css-section">
              <h3>Clue</h3>
              <div className="css-description">
                <p>Clueは不登校児の自殺やキャリアの問題を解決するため、<a href="http://piaport.jp/" target="_blank">株式会社Marianne</a>と提携して開発したサービスです。</p>
                <p>このプロジェクトでは現在、エンジニア・マーケティングポジションを募集しています。</p>
              </div>
            </div>

            <div className="css-section">
              <h3>得られる経験</h3>
              <div className="css-description">
                <p className="css-list">対象とする社会問題に対する深い見識</p>
                <p className="css-list">問題を解決するための具体的な行動経験</p>
                <p className="css-list">チームで協力しながらプロジェクトを推進する経験</p>
              </div>
            </div>
            <div className="css-section">
              <h3>こんな人にオススメ</h3>
              <div className="css-description">
                <p className="css-list">プロジェクトが対象とする社会問題に興味がある</p>
                <p className="css-list">社会問題を解決するために具体的なアクションを実行したい</p>
              </div>
            </div>
          </div>
        );
        break;
      case 'newProject':
        return(
          <div className="css-main-content">
            <h2>新規プロジェクト</h2>
            <div className="css-section">
              <h3>立ち上げ方法</h3>
              <div className="css-description">
                <p>Cloud.A会員内もしくは自分の知り合いからプロジェクトのメンバーを集め、最低3名のチームを作ります。</p>
                <p>対象となる問題領域を定義し、原因の分析と解決策の提案をまとめ、プロジェクト定例会に提出します。</p>
                <p>分析の妥当性と解決策の独自性が認められれば、正式にプロジェクトとして承認され、活動を開始できます。</p>
              </div>
            </div>
            <div className="css-section">
              <h3>身につく能力</h3>
              <div className="css-description">
                <p className="css-list">社会課題の分析と解決策の提案スキル</p>
                <p className="css-list">チームを牽引するリーダーシップ</p>
                <p className="css-list">プロジェクトを0から作り上げる経験</p>
              </div>
            </div>
            <div className="css-section">
              <h3>こんな人にオススメ</h3>
              <div className="css-description">
                <p className="css-list">解決したい社会問題がある</p>
                <p className="css-list">複数人をまとめてプロジェクトをリードする経験がほしい</p>
              </div>
            </div>
          </div>
        );
        break;
      case 'default':
        return(
          <div className="css-main-content">
            <h2>その他</h2>
          </div>
        );
        break;
    }
  }
}

module.exports = Recruit;
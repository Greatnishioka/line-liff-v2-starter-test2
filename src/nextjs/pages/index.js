import Head from "next/head";
import Answers from "./components/answer-tab";
import Decoration_Image from "./components/decoration-image";
import Scroll from "./components/scroll";
// import '../styles/questions-pages.css'


export default function Home(props) {

  return (
    <main class="question-page">
      <Head>
        <title>KASHIDASHIKUN questionnaire</title>
      </Head>
      <div className="main-container">
          <div className="top-view">
            <Decoration_Image className="page-top-image" />
            <div className="top-view-content">
              <h1 className="page-title">アンケートフォーム</h1>
              <div className="top-view-texts">
                <ul className="top-view-text">
                  <li>貸出くんをご利用いただきありがとうございます。<br />皆様により良いサービスを提供するために、簡単なアンケートにご協力いただけないでしょうか？</li>
                  <li> お答えいただいたアンケートの結果は、LINEメッセージにてお知らせいたします。</li>
                  <li>所要時間はxxx分ほどです。ぜひよろしくお願いいたします。</li>
                </ul>
              </div>
            <Scroll />
            </div>
          </div>
          <div className="questions">
            <Answers className="ansews-tab" question_title="Q1 あなたは、「貸し出しくん」を何から見聞きして知りましたか。" answers={['SNS', '友人からの紹介', 'その他']} />
            <Answers className="ansews-tab" question_title="Q2 あなたは、「貸し出しくん」をどのくらいの頻度で使用していますか。" answers={['週三回以上', '週二回', '週一回' ,'必要なときのみ使用','その他']} />
            <Answers className="ansews-tab" question_title="Q3 あなたが「貸し出しくん」を利用した理由について、あてはまるものを全て選んでください。" answers={['簡単に本の貸出ができる', '本の履歴を確認できる', '自分で操作できる' ,'本の貸出ことが安全管理できる','その他']} />
            <Answers className="ansews-tab" question_title="あなたは、「貸し出しくん」についてどの程度満足していますか。" answers={['全く満足していない', ' あまり満足していない', 'どちらとも言えない' ,'やや満足している','非常に満足している','その他']} />
          </div>
          <div className="foot-content">
            <div className="submit_button">
              <a href="./question_done">
                <input className="submit_answer" type="button" value="以上の内容でアンケートを提出する" />
              </a>
            </div>
              <Decoration_Image className="page-bottom-image" />
          </div>
          
      </div>
        
    </main>
  );
}

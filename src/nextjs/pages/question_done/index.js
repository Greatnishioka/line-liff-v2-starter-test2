import Head from "next/head";
import Decoration_Image from ".././components/decoration-image";

export default function question_done(props) {

  return (
    <main class="question-done-page">
      <Head>
        <title>KASHIDASHIKUN questionnaire</title>
      </Head>
      <Decoration_Image className="page-top-image" />
      <div className="question-done-contents">
        <svg xmlns="http://www.w3.org/2000/svg" width="85.12" height="85.12" viewBox="0 0 85.12 85.12">
          <g id="check-circle_fill" transform="translate(-12.16 -12.16)">
            <path id="パス_4" data-name="パス 4" d="M54.72,12.16A42.56,42.56,0,1,0,97.28,54.72,42.563,42.563,0,0,0,54.72,12.16ZM73.1,40.821,53.1,68.561a3.021,3.021,0,0,1-4.911,0L36.337,52.145a.763.763,0,0,1,.617-1.206H41.41a3.026,3.026,0,0,1,2.46,1.263l6.764,9.386,14.934-20.71a3.038,3.038,0,0,1,2.46-1.263h4.455A.763.763,0,0,1,73.1,40.821Z" fill="#5045e6"/>
          </g>
        </svg>
        <h2 className="page-title">
        アンケートの入力が完了しました
        </h2>
        <p className="page-top-text">
        回答協力ありがとうございます。<br />
        こちらの画面は閉じていただいて結構です。
        </p>
      </div>
      <Decoration_Image className="page-bottom-image" />
    </main>
  );
}

// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    }  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "ご参加ありがとうございます。",
          "content": "本実験・調査の実施者は慶應義塾大学の李光鎬研究会です。本実験・調査への参加はあなたの任意によるものです。実験に参加していただいた方には、後日謝礼金として100円のe-giftを送付いたします。実験終了後に、メールアドレスをご記入ください。"
        },
        {
          "required": true,
          "type": "text",
          "title": "本実験・調査の目的",
          "content": "映画の予告編について調べることが本実験・調査の目的です。"
        },
        {
          "required": true,
          "type": "text",
          "title": "本実験・調査の手続き",
          "content": "本実験・調査では映画の予告編に関するアンケートにお答えいただきます。この実験・調査の所要時間は10〜20分程度です。"
        },
        {
          "required": true,
          "type": "text",
          "title": "潜在的なリスク・苦痛など",
          "content": "実験による多少の疲労は除き，潜在的なリスクや苦痛はありません。また，いつ，いかなる理由でも，自由に実験を中止していただけます（参加と中止もご参照ください）。"
        },
        {
          "required": true,
          "type": "text",
          "title": "参加による利益",
          "content": "あなたが本実験・調査に参加することで学習，認知，感情についての研究の発展に繋がります。"
        },
        {
          "required": true,
          "type": "text",
          "title": "匿名性の確保",
          "content": "本実験・調査によって得られた情報は法律による開示請求を除き，匿名性が維持されます。匿名性は実験参加者番号の付与，統計的解析によって保たれます。"
        },
        {
          "required": true,
          "type": "text",
          "title": "参加と中止",
          "content": "あなたは本実験・調査への参加もしくは不参加を自由に選択できます。また，参加した場合でも，いつでも，どのような理由でも，途中で実験・調査を中止することができます。もし，途中で実験・調査を中止したくなった場合は，「ESCキー」を押した後，ウィンドウを閉じることで実験・調査を中止できます。"
        },
        {
          "required": true,
          "type": "text",
          "title": "実験・調査実施者への問い合わせ",
          "content": "本実験・調査に対して質問がある場合は，実施者または実施責任者にお問い合わせください。"
        },
        {
          "required": true,
          "type": "radio",
          "label": "\u003Cspan style = \"color: tomato\"\u003E実験・調査への参加に同意いただけますか？同意いただける方はチェックをお願いします。同意いただけない方は，ESCを押した後，ウィンドウを閉じてください。\u003C\u002Fspan\u003E",
          "options": [
            {
              "label": "上記の説明をよく読み，理解した上で，実験・調査への参加に同意します。",
              "coding": "yes"
            }
          ],
          "name": "InformedConsent"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
const digits = 10;
const participantID = this.random.range(10**digits, 10**(digits+1));
this.state.participantID = participantID;
const id = Number(this.state.participantID); 
this.state.condition = (id % 3) + 1;
}
      },
      "title": "informedConsent"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 635.74,
          "height": 120.05,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "あなたのIDは${this.state.participantID}です\n\nグループ${this.state.condition}",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "ShowID",
      "timeout": "1000",
      "skip": true
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "input",
          "label": "あなたの年齢を入力してください。",
          "attributes": {
            "type": "number",
            "min": "18",
            "max": "99"
          },
          "help": "年齢を半角数字で入力してください",
          "name": "age"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cp\u003Eあなたの性別を選択してください：\u003C\u002Fp\u003E\r\n\u003Cdiv style=\"text-align: left; display: inline-block;\"\u003E\r\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"gender\" value=\"male\" required\u003E 男性\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"gender\" value=\"female\"\u003E 女性\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"gender\" value=\"other\"\u003E その他\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"gender\" value=\"prefer_not_to_say\"\u003E 答えたくない\u003C\u002Flabel\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "demographic"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "ご参加ありがとうございます。",
          "content": "本研究では、ご自身の映画鑑賞経験に関する質問に回答していただいた後、１本の予告編をご覧いただき、予告編を視聴して感じたことに関する質問に回答していただきます。正解などはありませんので，感じたままにご回答ください。"
        },
        {
          "required": true,
          "type": "text",
          "title": "準備ができた方は「次へ」を押して，開始してください。"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Instruction"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "ご自身の映画鑑賞経験に関して、以下の質問文を読んでいただき，あたなにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003C!-- 1. 映画を見る頻度 --\u003E\r\n\u003Cfieldset style=\"border: none; margin-bottom: 20px; text-align: left;\"\u003E\r\n  \u003Cp\u003E\u003Cstrong\u003E1. 映画を見る頻度を教えてください：\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"movie_frequency\" value=\"1\" required\u003E 1年に1本\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"movie_frequency\" value=\"2\"\u003E 6か月に1本\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"movie_frequency\" value=\"3\"\u003E 3か月に1本\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"movie_frequency\" value=\"4\"\u003E 1か月に1本\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"movie_frequency\" value=\"5\"\u003E 1週間に1本\u003C\u002Flabel\u003E\r\n\u003C\u002Ffieldset\u003E\r\n\r\n\u003C!-- 2. よく見る映画のジャンルについて --\u003E\r\n\u003Cfieldset style=\"border: none; margin-bottom: 20px; text-align: left;\"\u003E\r\n  \u003Cp\u003E\u003Cstrong\u003E2. よく見る映画のジャンルについて：\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"movie_genre\" value=\"1\" required\u003E アクション\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"movie_genre\" value=\"2\"\u003E 恋愛\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"movie_genre\" value=\"3\"\u003E ホラー\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"movie_genre\" value=\"4\"\u003E サスペンス\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"movie_genre\" value=\"5\"\u003E SF\u003C\u002Flabel\u003E\r\n\u003C\u002Ffieldset\u003E\r\n\r\n\u003C!-- 3. 映画を見る前に予告編を見る --\u003E\r\n\u003Cfieldset style=\"border: none; margin-bottom: 20px; text-align: left;\"\u003E\r\n  \u003Cp\u003E\u003Cstrong\u003E3. 映画を見る前に予告編を見る：\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"watch_trailer\" value=\"1\" required\u003E まったくあてはまらない\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"watch_trailer\" value=\"2\"\u003E ややあてはまらない\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"watch_trailer\" value=\"3\"\u003E どちらともいえない\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"watch_trailer\" value=\"4\"\u003E ややあてはまる\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"watch_trailer\" value=\"5\"\u003E とてもあてはまる\u003C\u002Flabel\u003E\r\n\u003C\u002Ffieldset\u003E\r\n\r\n\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": "",
        "undefined": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "multiple choice"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 75,
          "angle": 0,
          "width": 585.6,
          "height": 58.58,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "※音が出るように設定してください\n（大きな音が出る場合もあります。ご注意ください。）",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "22",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 384,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "この後、予告編が流れます",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Screen",
      "timeout": "4000"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cp\u003E　　　 画面をタップすると映像が流れます。\u003C\u002Fp\u003E\r\n\u003Cdiv style=\"width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; text-align: center;\"\u003E\r\n  \u003Ciframe src=\"https:\u002F\u002Fdrive.google.com\u002Ffile\u002Fd\u002F1WgpTg-wwgDevkL0lVyfSzHzrjKdih6aF\u002Fpreview?autoplay=1&mute=1\" width=\"960\" height=\"640\" style=\"border: none; max-width: 100%;\"\u003E\u003C\u002Fiframe\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C!-- 最初は disabled（無効）にしておく --\u003E\r\n\u003Cdiv style=\"text-align: center; \"\u003E\r\n    \u003Cbutton id=\"next-button\" disabled\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
setTimeout(() => {
    const btn = document.getElementById('next-button');
    if (btn) {
        btn.disabled = false; // 無効化を解除して押せるようにする
    }
}, 80000);

document.getElementById('next-button').addEventListener('click', () => {
    this.end();
});
}
      },
      "title": "Video A",
      "skip": "${this.state.condition != 1}"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cp\u003E　　　 画面をタップすると映像が流れます。\u003C\u002Fp\u003E\r\n\u003Cdiv style=\"width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; text-align: center;\"\u003E\r\n  \u003Ciframe src=\"https:\u002F\u002Fdrive.google.com\u002Ffile\u002Fd\u002F1pJk9VfJxArVYmnoITYxaOwCRW8Q-wyyx\u002Fpreview?autoplay=1&mute=1\" width=\"960\" height=\"640\" style=\"border: none; max-width: 100%;\"\u003E\u003C\u002Fiframe\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C!-- 最初は disabled（無効）にしておく --\u003E\r\n\u003Cdiv style=\"text-align: center; \"\u003E\r\n    \u003Cbutton id=\"next-button\" disabled\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
setTimeout(() => {
    const btn = document.getElementById('next-button');
    if (btn) {
        btn.disabled = false; // 無効化を解除して押せるようにする
    }
}, 80000);

document.getElementById('next-button').addEventListener('click', () => {
    this.end();
});
}
      },
      "title": "Video B",
      "skip": "${this.state.condition != 2}"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cp\u003E　　　 画面をタップすると映像が流れます。\u003C\u002Fp\u003E\r\n\u003Cdiv style=\"width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; text-align: center;\"\u003E\r\n  \u003Ciframe src=\"https:\u002F\u002Fdrive.google.com\u002Ffile\u002Fd\u002F1XcwkYy_zo7-O9FWHQsVzmnFP2xZtyfQx\u002Fpreview?autoplay=1&mute=1\" width=\"960\" height=\"640\" style=\"border: none; max-width: 100%;\"\u003E\u003C\u002Fiframe\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C!-- 最初は disabled（無効）にしておく --\u003E\r\n\u003Cdiv style=\"text-align: center; \"\u003E\r\n    \u003Cbutton id=\"next-button\" disabled\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
setTimeout(() => {
    const btn = document.getElementById('next-button');
    if (btn) {
        btn.disabled = false; // 無効化を解除して押せるようにする
    }
}, 80000);

document.getElementById('next-button').addEventListener('click', () => {
    this.end();
});
}
      },
      "title": "Video C",
      "skip": "${this.state.condition != 3}"
    },
    {
      "type": "lab.html.Page",
      "items": [],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//教示タイトル
const instructionTitle = '調査';

//教示文
const instructionText = '以下の質問項目をよく読み，あなたにもっとも当てはまる選択肢を選んでください。';

//尺度名（データ記録用; 半角英数推奨)
// 【重要】ここが空欄('')だとエラーの原因になります。必ず半角英数（例: q）を入力してください。
const scaleName = 'q';

//質問項目（['']で囲み，[,]で区切る）
const items = [
  'この映画の本編を観たい',
  'この映画の本編を映画館の大スクリーンで観賞したい',
  'この映画の本編が動画配信サービスにあれば視聴したい',
  'この映画を他人に勧めたい、またはSNSでシェアしたい',
  '映画の世界観に引き込まれた',
  '臨場感を感じた',
  '緊張感や迫力を感じた',
  '登場人物の感情に共感できた、または心に動かされた',
  '映画のストーリーやテーマを理解しやすかった',
  '登場人物の関係性や状況を把握しやすかった',
  'どのようなジャンルの映画かわかった',
  '映像のテンポが良かった',
  '映像の構成がわかりやすかった',
  '情報量が多すぎて処理しきれないと感じた',
  '映像全体に魅力があった',
  '作品に対する期待感があった',
  '映像が自然だった',
  '映像と音のバランスが自然だった',
  '映像の動きやアクションの迫力が強く伝わってきた',
  '登場人物の感情や人柄がより深く伝わってきた',
  'ストーリーの背景や込められたメッセージが明確だった',
];

//選択肢
const options = [
  { label: 'まったくあてはまらない', coding: '1' }, 
  { label:'あてはまらない', coding: '2' }, 
  { label:'どちらともいえない', coding: '3' }, 
  { label:'あてはまる', coding: '4' }, 
  { label:'非常によくあてはまる', coding: '5' }
];

//回答を必須にするか
const requiredOption = true;

//各質問項目に項目番号（1. 〜）をいれるか
const addItemNumber = true;

//項目順をランダムにするか
const randomaizedOrder = true;

//========================================================
// 【注意】ここから下はむやみに変更しないでください【注意】
//========================================================

//調査を作成・教示のセット
this.options.items = [
  {
    type: "text",
    title: instructionTitle,
    content: instructionText
  }
];

//各項目と尺度名を配列に格納
let scale = [];

items.forEach((item, index) => {
  scale.push(
    {
      item: item,
      // 【修正1】連番が正しく 1, 2, 3... となるように計算式を修正しました
      scaleName: scaleName + '_' + (index + 1)
    }
  );
});

//ランダム順にする場合に並び替え
if(randomaizedOrder) {
  scale = this.random.shuffle(scale);
}

//質問項目を作成
scale.forEach((item, index) => {
  this.options.items.push(
    {
      required: requiredOption,
      type: 'radio',
      // 【修正2】システムが全質問を「同じ選択肢」だと勘違いしないよう、各質問ごとにデータを複製して渡す
      options: options.map(opt => ({ label: opt.label, coding: opt.coding })),
      label: addItemNumber ? (index + 1) + '. ' + item.item : item.item,
      name: item.scaleName,
      shuffle: false
    }
  );
});

}
      },
      "title": "Multiple Choice"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "textarea",
          "help": "予告編の、どういった部分が映画を見たいと思う理由になりましたか？あなたの考えを自由に書いてください。 ない場合は「特になし」と記入してください。",
          "label": "映像の中で、最も印象に残った要素とその理由を教えてください。また、映画本編を見たいと思う理由があれば合わせて教えてください。",
          "name": "MostImpressed"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Free description"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": false,
          "type": "textarea",
          "label": "調査・実験時の問題",
          "help": "調査・実験の際に問題があった方は内容をご入力ください。問題がなかった方は空欄のままでけっこうです。",
          "name": "Impediment"
        },
        {
          "required": true,
          "type": "input",
          "label": "以下に、謝礼を受け取るメールアドレスをご記入ください。",
          "attributes": {
            "type": "email"
          },
          "help": "メールアドレスをご記入ください。",
          "name": "EmailAdress"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Error Report"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "\u003Cspan style = \"color:tomato\"\u003Eこれで本実験・調査は終了です！\u003C\u002Fspan\u003E",
          "content": "\u003Cspan style = \"color:tomato\"\u003Eご協力くださり，誠にありがとうございました。ウィンドウを閉じて実験を終了してください。\u003C\u002Fspan\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//check Tardy
//ファイル名をランダムIDにする
const participantID = this.random.uuid4()

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "2g0053vMaKxn",
    filename: filename,
    data: data,
  }),
});

}
      },
      "title": "thanks",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()
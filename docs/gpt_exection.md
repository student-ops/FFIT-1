## url to mdの実行結
    const res = await UrlToMdArticle("https://www.youtube.com/watch?v=2hXNd6x9sZs")
    console.log(res);

```
ts-node -r tsconfig-paths/register src/server/lib/url.ts
3728
{
  index: 0,
  message: {
    role: 'assistant',
    content: '# Rustをいち早く学ぶためのガイド\n' +
      '\n' +
      'こんにちは、私の名前はTrisです。技術的なビデオに焦点を当てたこのノーボイラープレートに興味を持ってくれてありがとうございます。これは私がパトロンにメンタリングセッションで教える方法でRustを学ぶためのガイドです。速く立ち上がるための多くのヒントがありますので、まずは主要な情報源から始めましょう。このビデオのスクリプトからイメージまで、全てはGitHub上でパブリックドメインライセンスの下にあるMarkdownドキュメントの一部です。\n' +
      '\n' +
      '## Rustは難しくない、慣れないだけ\n' +
      '\n' +
      'これが最初の教訓です。私のビデオはデザインによってほとんどハイプされていることに気づくかもしれません。私のビデオに対するコメントのほとんどは、全くRustの初心者からもらっています。中にはプログラミングも新しい人もいますが、彼らは見たものにとても興奮しています。Rustをまだ理解していないなら、私が試みるように、誰かがはっきりと説明すれば、それは魔法のように思えます。\n' +
      '\n' +
      '## Rustの人気と未来\n' +
      '\n' +
      'RustはGitHubプロジェクトやStack Overflowのタグによると、19番目に人気のある言語ですが、スケールは線形ではありません。HaskellやCommon Lispの運命を避けようとするならば、まだ途中です。Rustには脱出速度を達成させたいのです。\n' +
      '\n' +
      '## Rust学習の壁に向き合う\n' +
      '\n' +
      '2020年には、複数の文字列型やライフタイムの問題でRustの学習から2度脱落しました。その時には、私を助けてくれた優れたメンター（Alexに感謝）がいましたが、ほとんどの人はそのような贅沢を持っていません。彼らには、私が私のハイプビデオで助けようとする興奮が必要です。\n' +
      '\n' +
      '## 入門方法\n' +
      '\n' +
      'あなたがMac、Linux、WSLを使用している場合は、ターミナルでこのコマンドを実行してください。Windowsを使っていてWSLを実行できない場合は、インストーラーをダウンロードして実行してください。\n' +
      '\n' +
      'Windowsユーザーには、MicrosoftのWindowsサブシステム（WSL）をインストールして、この素晴らしい世界へのアクセスを得ることをお勧めします。\n' +
      '\n' +
      '## 学習カリキュラムの3本柱\n' +
      '\n' +
      '1. "The Rust Programming Language"、今後は"本"と呼ぶことにします。\n' +
      '2. "Rust by Example"は、絶好の補足読書です。\n' +
      '3. "Rustlings"は対話式のコードカタシステムです。これらすべてを一緒に使うことで、見逃していたかもしれない関連性が明らかになります。\n' +
      '\n' +
      '## Rustlingsとのスタート\n' +
      '\n' +
      'Rustlingsは、本とほぼ同じ順序で書かれています。これは、一緒に消費されることを意図しています。Rust by Exampleは本とは線形にリンクされていませんが、多くは同じ順序で読みます。抑えるべきビデオのスポンサーからのクイズもチェックしてください。\n' +
      '\n' +
      'このガイドの残りの部分については、Discordで質問をしてください。そして、TranscriptsとソースコードはGitHubのリンクにあり、エラッタはピン留めされたコメントで訂正されています。ビデオを見てくれてありがとう。次回Discordでお会いしましょう。\n' +
      '\n' +
      '## 追加情報\n' +
      '\n' +
      '著者のチャンネルをサポートしたい場合は、patreon.comで早期アドフリーおよびトラッキングフリービデオとVIP Discordアクセスが得られます。また、transhumanismやhope Punkの物語に興味がありましたら、著者のsci-fiポッドキャストLost Terminalや都市ファンタジーのPodcast Modern Prometheusもチェックしてください。'
  },
  finish_reason: 'stop'
}
# Rustをいち早く学ぶためのガイド

こんにちは、私の名前はTrisです。技術的なビデオに焦点を当てたこのノーボイラープレートに興味を持ってくれてありがとうございます。これは私がパトロンにメンタリングセッションで教える方法でRustを学ぶためのガイドです。速く立ち上がるための多くのヒントがありますので、まずは主要な情報源から始めましょう。このビデオのスクリプトからイメージまで、全てはGitHub上でパブリックドメインライセンスの下にあるMarkdownドキュメントの一部です。

## Rustは難しくない、慣れないだけ

これが最初の教訓です。私のビデオはデザインによってほとんどハイプされていることに気づくかもしれません。私のビデオに対するコメントのほとんどは、全くRustの初心者からもらっています。中にはプログラミングも新しい人もいますが、彼らは見たものにとても興奮しています。Rustをまだ理解していないなら、私が試みるように、誰かがはっきりと説明すれば、それは魔法のように思えます。

## Rustの人気と未来

RustはGitHubプロジェクトやStack Overflowのタグによると、19番目に人気のある言語ですが、スケールは線形ではありません。HaskellやCommon Lispの運命を避けようとするならば、まだ途中です。Rustには脱出速度を達成させたいのです。

## Rust学習の壁に向き合う

2020年には、複数の文字列型やライフタイムの問題でRustの学習から2度脱落しました。その時には、私を助けてくれた優れたメンター（Alexに感謝）がいましたが、ほとんどの人はそのような贅沢を持っていません。彼らには、私が私のハイプビデオで助けようとする興奮が必要です。

## 入門方法

あなたがMac、Linux、WSLを使用している場合は、ターミナルでこのコマンドを実行してください。Windowsを使っていてWSLを実行できない場合は、インストーラーをダウンロードして実行してください。

Windowsユーザーには、MicrosoftのWindowsサブシステム（WSL）をインストールして、この素晴らしい世界へのアクセスを得ることをお勧めします。

## 学習カリキュラムの3本柱

1. "The Rust Programming Language"、今後は"本"と呼ぶことにします。
2. "Rust by Example"は、絶好の補足読書です。
3. "Rustlings"は対話式のコードカタシステムです。これらすべてを一緒に使うことで、見逃していたかもしれない関連性が明らかになります。

## Rustlingsとのスタート

Rustlingsは、本とほぼ同じ順序で書かれています。これは、一緒に消費されることを意図しています。Rust by Exampleは本とは線形にリンクされていませんが、多くは同じ順序で読みます。抑えるべきビデオのスポンサーからのクイズもチェックしてください。

このガイドの残りの部分については、Discordで質問をしてください。そして、TranscriptsとソースコードはGitHubのリンクにあり、エラッタはピン留めされたコメントで訂正されています。ビデオを見てくれてありがとう。次回Discordでお会いしましょう。

## 追加情報

著者のチャンネルをサポートしたい場合は、patreon.comで早期アドフリーおよびトラッキングフリービデオとVIP Discordアクセスが得られます。また、transhumanismやhope Punkの物語に興味がありましたら、著者のsci-fiポッドキャストLost Terminalや都市ファンタジーのPodcast Modern Prometheusもチェックしてください。
```


```
ts-node -r tsconfig-paths/register src/server/lib/url.ts
6555
failed
```

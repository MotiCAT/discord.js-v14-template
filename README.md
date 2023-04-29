# discord.js-v14-template
Discord.js v14を使用してBotを作成するテンプレートです。

## 使い方
### Botアカウントの作り方
[こちら](https://discord.com/developers/applications)にアクセスし、New Application をクリックします。  
新しいアプリケーションの作成が終わったら、Botタブに移動し Add Botボタンをクリックします。  
ここで表示される token は 絶対に誰も教えないでください。Botアカウントが乗っ取られてしまいます。(tokenはどこかにメモしておきましょう)  

![image](https://user-images.githubusercontent.com/113648419/235129995-eccda6c3-f132-41ad-bcf0-077b1265178d.png)  
Botタブの下の方にあるPrivileged Gateway Intents を、上記のボタンのように設定します。  
~~SERVER MEMBERS INTENTはなくてもいいですが後のことを考えるとあったほうがいいかも~~  

専属Botなどにする場合は、Public Botをオフにします。(公開Botを作りたい方はこのままでOKです）
![image](https://user-images.githubusercontent.com/113648419/235134965-dbdfa7fe-63fe-4552-9433-64283784c647.png)


Oauth2タブからURL Generatorを開き、下の画像のようにチェックを入れます。  
![image](https://user-images.githubusercontent.com/113648419/235131557-b7a06e91-d6e4-4d7c-8f0e-312e3b9a43c4.png)  
![image](https://user-images.githubusercontent.com/113648419/235131602-5be0134e-4d02-440f-84e3-a28abcd8ec49.png)  

一番下にGENERATED URL というのが出てくるのでそちらをCopyし、Botをサーバーに導入してください。  

### Node.js のインストール
[Node.jsのダウンロードサイト](https://nodejs.org/en)にアクセスします。  
LTS と書いてある方(左側のボタン)をクリックし、インストーラーをダウンロードします。  
ダウンロードが終わったらインストーラーをクリックして起動し、Nextを連打してください。  

Finish と出たらインストールは完了です。

### Botの起動
.envファイルを開き、 DISCORD_TOKEN= の後に先ほどメモしたtokenを貼り付け保存します。    

コマンドプロンプトを開き、 `cd`コマンドでこのテンプレートをダウンロードしたフォルダに移動します。  
移動が終わったら `npm i discord.js dotenv` を実行してください。  
インストールが終わったのを確認出来たら`node index.js` と実行するとBotが起動します。  
これで起動できなかった方はトラブルシューティングを見てください。

このテンプレートでは !ping と入力すると Pong! と返されます。   
また、 メッセージ内に こんにちは という文字が含まれていたら こんにちは！ と返されます。   
自分の好きなように変更してみてください。

# トラブルシューティング
### 'node' は、内部コマンドまたは外部コマンド、操作可能なプログラムまたはバッチ ファイルとして認識されていません。
Node.jsはインストールしましたか？  インストールしている場合はコマンドプロンプトを一度閉じ、再度開いてください。  

### Error: Cannot find module 'C:\Users\ユーザー\以下ディレクトリ名\index.js'
cdコマンドで テンプレートをダウンロードしたフォルダに移動しましたか？ 存在しないファイルを実行しようとしています。  
cd コマンドって何？って方は[こちら](https://eng-entrance.com/windows-command-cd)どうぞ～

### Error: Cannot find module 'discord.js' または Error: Cannot find module 'dotenv'
`npm i discord.js dotenv` は実行しましたか？ 使用しようとしたモジュールが存在しない場合に発生するエラーです。  

### Error [TokenInvalid]: An invalid token was provided.
トークンが正しく設定されていないときに発生するエラーです。 .envファイルを確認してください。  
`DISCORD_TOKEN=Botのトークン`と正しく書けていますか？ それでも治らなかったら一度tokenをリセットすることをおすすめします。  

### Error [DisallowedIntents]: Privileged intent provided is not enabled or whitelisted.
MESSAGE CONTENT INTENTが有効化されていません。 BotタブからPrivileged Gateway Intentsを確認してください。

### これ以外のエラーの場合は DiscordのMotiCAT#0808にDMをください。対応します。  


# 公開Botを作成しようとしている方へ
![image](https://user-images.githubusercontent.com/113648419/235135095-b8545b4c-c7e7-44d5-abbd-6e2fd053224f.png)  
こういう「サーバーへ追加」のつけ方、わかりませんよね？私もわかりませんでした（ ・∇・）  
つけ方解説します  

Oauth2タブのGeneralを開いて、Default Authorization Link からつけることが出来ます。  
![image](https://user-images.githubusercontent.com/113648419/235135424-ac864bc7-abac-4db1-903c-ff74534adc07.png)  
AUTHORIZATION METHOD を In-app authorization にして、Botスコープと application.commandsスコープにチェックを入れます。  
BOT PERMISSIONS から必要な権限を選択してください。  
### 注意事項
公開Botでは要求権限をAdministratorにするのはできるかぎり推奨しません。必要最低限な権限を設定することをおすすめします。

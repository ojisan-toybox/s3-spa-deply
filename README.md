# s3-spa-deply

S3 に SPA をデプロイしてみる

create S3 env

```sh
# 初回
$ terraform init

# AWS CLIのprofileが必要(s3-adder)
# regionは ap-northeast-1
terraform apply
```

app build

```sh
# build spa
npm run b

# start dev server
npm run s
```

出てきた dist を S3 にコピペすればデプロイできる.
(めんどくさいから直接)

## memo

> オブジェクトのメタデータでウェブサイトのリダイレクト場所を設定することで、オブジェクトのリクエストを別のオブジェクトまたは URL にリダイレクトできます。リダイレクトを設定するには、オブジェクトメタデータに x-amz-website-redirect-location プロパティを追加します。Amazon S3 コンソールで、オブジェクトのメタデータ内のウェブサイトのリダイレクト場所を設定できます。Amazon S3 API を使用する場合は、x-amz-website-redirect-location を設定します。ウェブサイトは 301 リダイレクトとしてオブジェクトを解釈します。

> 高度な条件付きリダイレクトルールを使用すると、条件に応じてリクエストのルーティング先を変えることができます。この条件として使用できるのは、特定のオブジェクトキー名、リクエストの中のプレフィックス、またはレスポンスコードです。たとえば、バケット内のあるオブジェクトを削除する、または名前を変更する場合は、リクエストを別のオブジェクトにリダイレクトするルーティングルールを追加します。フォルダを使用できなくする場合は、ルーティングルールを追加して別のウェブページにリクエストをリダイレクトできます。ルーティングルールは、エラー状態を処理するために追加することもできます。その場合は、エラーの処理時に、エラーを発生させたリクエストを別のドメインにリダイレクトします。

> KeyPrefixEquals: リクエストをリダイレクトするオブジェクトキー名のプレフィックス。

なので一見したら オブジェクト指定しないとリダイレクトできないように思えるが、SPA 側で /about ではなく /about/ っていう遷移をさせれば、prefix ルールで/about を/about.html に書き換えられる

redirect されたかチェック

```
curl --dump-header -  http://s3-nextjs-deploy.s3-website-ap-northeast-1.amazonaws.com/about.html
```

# s3-spa-deply

S3 に SPA をデプロイしてみる. routing は react-router を採用.

## dev

create S3 env

```sh
# 初回
# 事前に s3-adder という profile を作成済み
# s3-adder は s3 に対するフルアクセスを持つ
$ terraform init

# 実行のためにはAWS CLIのprofileが必要
# regionは ap-northeast-1
terraform apply
```

app build

```sh
npm i

# build spa
npm run b

# start dev server
npm run s
```

出てきた dist を S3 にコピペする or この repository の master に push すればデプロイできます(GHA で CI/CD 動くように設定してある)。

## これはなに？

Mastodonのローカルタイムラインに投稿されているNSFWが付いていない画像を一覧で確認できるようにするギャラリー機能の独自実装です。

## 導入方法

まず `.env`を`.env.template`をもとに作成します。

```bash
cp .env.template .env
```

次に`.env`内の`REACT_APP_MASTODON_DOMAIN`に以下のように自分が管理しているMastodonのドメインを設定します。

```
REACT_APP_MASTODON_DOMAIN=https://gamelinks007.net

```

あとは`yarn install`などを実行してビルドします。

```bash
yarn install
yarn build
```

最後にビルドされた静的ファイルを Mastodonのソースコード内にある`public`ディレクトリ以下にお好きな名前で配置してください。


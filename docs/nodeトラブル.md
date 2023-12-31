`package.json`と`tsconfig.json`の設定を、動作する場合としない場合で分けて表にまとめます。ここでは、主に`module`の設定と`"type": "module"`の有無に焦点を当てます。

### 動作する設定

| 設定ファイル    | オプション | 設定値     | 説明                                                                                                   |
| --------------- | ---------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| `tsconfig.json` | `module`   | `CommonJS` | TypeScript を CommonJS 形式でコンパイル。Node.js のデフォルトモジュールシステムと互換性があります。    |
| `package.json`  | `"type"`   | （なし）   | `package.json`に`"type": "module"`がない場合、Node.js は CommonJS モジュールをデフォルトで使用します。 |

### 動作しない設定

| 設定ファイル    | オプション | 設定値   | 説明                                                                                                          |
| --------------- | ---------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| `tsconfig.json` | `module`   | `ESNext` | TypeScript を ESModule 形式でコンパイル。Node.js ではデフォルトでこの形式はサポートされていません。           |
| `package.json`  | `"type"`   | `module` | `package.json`に`"type": "module"`を設定すると、Node.js は`.js`ファイルを ESModule として扱うようになります。 |

### 追加の考慮事項

- **`ts-node`の使用**: `ts-node`を使用して TypeScript ファイルを直接実行する場合、Node.js のモジュール形式との互換性が特に重要です。`ts-node`はデフォルトで CommonJS モジュールを想定しています。

- **Node.js のバージョン**: Node.js のバージョンによっては、ESModule 形式のサポートが異なります。特に古いバージョンの Node.js では ESModule のサポートが限定的です。

- **追加設定**: ESModule 形式を使用する場合、`ts-node` の追加の設定や、代替のトランスパイルおよび実行方法（例: `babel`, `esbuild`）を検討する必要があります。

この表は一般的なケースを示していますが、特定のプロジェクトや環境によって異なる場合があるため、個別のプロジェクトのニーズや設定に応じて調整が必要です。また、Node.js、TypeScript、`ts-node`の各ドキュメンテーションを参照し、最新の情報を確認することをお勧めします。

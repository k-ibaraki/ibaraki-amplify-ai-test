# Amplify-AI-Test

AmplifyのAI機能を使って、AI ChatのWEBアプリを作ってみた

## 各種コマンド

- パッケージインストール
  - `npm i`
- バックエンド
  - Amplify Sandbox作成
    - `npx ampx sandbox --profile {AWS_PROFILE}`
  - Amplify Sandbox削除 
    - `npx ampx sandbox delete --profile {AWS_PROFILE}`
- フロントエンド
  - ローカルサーバー起動
    - `npm run dev`
  - ビルド
    - `npm run build`

## 使っている技術

- 全体
  - Amplify Gen2
- フロントエンド
  - React + TypeScript + Vite
  - Amplify SDK
  - Amplify UI
- バックエンド
  - Amplify Gen2
    - Auth
    - Data
    - AI

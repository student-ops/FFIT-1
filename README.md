This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
cd ffit-1
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Path layout

/samples: **検証のためのサンプル**

## 機能要件

- Youtube URL から字幕を取得してそれを技術記事風にして表示する
- Qiita Zenn のようなデザイン

## 意識したい非機能要件

## DB 操作

```
mysql -u root -p

## password rooot
SELECT USER();

create database test1;
use test1;

SELECT DATABASE();
SHOW DATABASES;


create table fruits (
  name varchar(255),
  price int
);

SHOW TABLES;

```

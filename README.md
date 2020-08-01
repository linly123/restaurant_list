我的餐廰清單
====
用了Node.js及Express的網站，展示喜愛餐廰名單的網站，可點擊得知該餐廰的名稱、位置、電話、評分及分類，同時可以編輯、新增、刪除餐廰，以及輸入餐廰名稱或以排序、篩選快速搜索指定餐廰。

Features - 網站功能
----
1. 使用者可於首頁瀏覽所有餐廰，並取得它們的照片、名稱、分類、評分及地址
2. 使用者可透過點擊餐廰查看詳細的資料，如餐廰地址、描述及電話
3. 使用者可新增餐廰，加入該餐廰各項相關資料
4. 使用者可以編輯指定餐廰的相關資料
5. 使用者可以刪除指定餐廰
6. 使用者可以輸入餐廰名稱搜索指定或相關餐廰
7. 使用者可以排序或篩選方法搜索餐廰

Environment SetUp - 環境建置
----
1.Node.js v12.18.3<br>2.Express v4.17.1<br>3.Express-Handlebars v5.1.0<br>4.Mongoose v5.9.25

Installing - 安裝流程
----
1.開啟terminal，Clone 此專案到本機電腦<br><pre>git clone https://github.com/linly123/restaurant_list</pre>
  
2.進入並存放此專案的資料夾<br><pre>cd restaurant_restaurantList</pre>
  
3.安裝 npm 套件<br><pre>於Terminal 輸入 npm install 指令</pre>

4.安裝 nodemon 套件<br><pre>於Terminal 輸入 nodemon app.js 指令</pre>

5.啟動伺服器，執行 app.js 檔案<br><pre>nodemon app.js</pre>

6.成功及完成啟動<br><pre>當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結
This is running on http://localhost:3000</pre>

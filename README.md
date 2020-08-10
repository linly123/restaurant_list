家庭記帳本
====
用了Node.js及Express的網站，用作記錄個人支出的網站，可以編輯、新增、刪除各項支出，並可查閱各類支出的金額和項目

Features - 網站功能
----
1. 使用者可於首頁瀏覽所有支出，並得知支出的名稱、金額、日期
2. 使用者可透過看支出的圖示，得知支出的類型
3. 使用者可新增支出，加入新的支出各項相關資料
4. 使用者可以編輯指定支出的相關資料
5. 使用者可以刪除指定支出
6. 使用者可以選擇不同類型支出作篩選，得知該類支出的金額和項目

Environment SetUp - 環境建置
----
1.Node.js v12.18.3<br>2.Express v4.17.1<br>3.Express-Handlebars v5.1.0<br>4.Mongoose v5.9.25

Installing - 安裝流程
----
1.開啟terminal，Clone 此專案到本機電腦<br><pre>git clone https://github.com/linly123/dad-s-expenses-tracket.git</pre>
  
2.進入並存放此專案的資料夾<br><pre>cd expense-tracker</pre>
  
3.安裝 npm 套件<br><pre>於Terminal 輸入 npm install nodemon指令</pre>

4.安裝 nodemon 套件<br><pre>於Terminal 輸入 nodemon app.js 指令</pre>

5.啟動伺服器，執行 app.js 檔案<br><pre>nodemon app.js</pre>

6.成功及完成啟動<br><pre>當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結
This is running on http://localhost:3000</pre>

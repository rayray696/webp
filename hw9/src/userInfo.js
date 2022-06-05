import React from "react";
import "./userInfo.css";

const App = () =>{
    return <div classname="app-container">
        <table>
            <thead>
                <tr>
                <th>出生年</th>
                <th>性別</th>
                <th>通訊縣市</th>
                <th>電子郵件</th>
                </tr>
            </thead>
            <tr>
                <th>不顯示</th>
                <th>不顯示</th>
                <th>不顯示</th>
                <th>不顯示</th>
            </tr><br/>
            <thead>
                <tr>
                <th>電話</th>
                <th>行動電話</th>
                <th>傳真電話</th>
                <th>其他聯絡方式</th>
                </tr>
            </thead>
            <tr>
                <th>不顯示</th>
                <th>不顯示</th>
                <th>不顯示</th>
                <th>不顯示</th>
            </tr>
        </table>
    </div>
}

export default App;
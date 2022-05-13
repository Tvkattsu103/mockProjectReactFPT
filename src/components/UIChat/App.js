import React from 'react'
import { App as SendbirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";
import "./styles.css";
const APP_ID = "9202D064-DEC2-41A6-8204-106108394843";
const USER_ID = "Demo User";
export default function App() {
    return (
        <div>
            <div className="App">
                <h1>Chào mừng bạn đến với hỗ trợ thông tin của team 1
                </h1>
                <SendbirdApp appId={APP_ID} userId={USER_ID} />
            </div>
        </div>
    )
}

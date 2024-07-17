import React from "react";
import styles from './ChatBotContainer.module.css';

export default function ChatBotContainer() {
    return (
        <div className="row justify-content-center">
            <div className="col-6">
                <div className="rounded-top">
                    <div className="p-3 rounded-top bg-dark">
                        <p className="mb-0 text-white">My AI</p>
                    </div>
                </div>

                <div className={`${styles.MessageBoxContainer} px-3 py-4`}>
                    <div className={`${styles.SenderMessage} d-flex align-items-center`}>
                        <p className={`${styles.MessageText} mb-0`}>KAKKAKAKAKAKAKKAKA</p>
                    </div>

                    <div className={`${styles.ReceiverMessage} d-flex align-items-center justify-content-end mt-3`}>
                        <p className={`${styles.MessageText} mb-0`}>KAKKAKAKAKAKAKKAKA</p>
                    </div>
                </div>

                <div className="input-group mb-3 py-1">
                    <input className="form-control rounded-0" type="text" placeholder="Type a message..." />
                    <button className="bg-white border-0">
                        <img
                            class="me-1"
                            src="https://cdn-icons-png.flaticon.com/512/1933/1933005.png"
                            height='20px'
                            width='20px'
                            alt=""
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
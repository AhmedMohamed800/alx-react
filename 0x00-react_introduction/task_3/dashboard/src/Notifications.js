import { React } from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';


export default function Notifications() {
    return (
        <div className="Notifications">
            <button
                style={{
                    color: '#3a3a3a',
                    background: 'none',
                    border: 'none',
                    fontSize: '15px',
                    position: 'absolute',
                    right: '12px',
                    top: '10px',
                    cursor: 'pointer',
                    outline: 'none',
                }}
                aria-label="Close"
                onClick={(e) => {
                    console.log('Close button has been clicked');
                }}
            >
                <img src={closeIcon} alt="close icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li
                    data-priority="urgent"
                    dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
                ></li>
            </ul>
        </div>
    )
}
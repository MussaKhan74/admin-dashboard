import React from 'react'
import './topbar.css'
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">lamaadmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://th-thumbnailer.cdn-si-edu.com/dOqTc6VHqbTZaY8cV8Fva2ZaI6A=/fit-in/600x0/https://tf-cmsv2-photocontest-smithsonianmag-prod-approved.s3.amazonaws.com/254181f4-a4e1-4f8b-be18-ed258339440f.jpg" alt="" className="topAvatar"/>
                </div>
            </div>
        </div>
    )
}

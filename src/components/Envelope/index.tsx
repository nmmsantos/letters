import { useState } from 'react';
import Style from './index.module.css';

interface EnvelopeProps {
    width?: number;
}

export default function Envelope({ width = 220 }: EnvelopeProps) {
    const [folded, setFolded] = useState(true);

    return (
        <div style={{ transform: `scale(${width / 220})`, transformOrigin: 'top left', paddingTop: 80 }}>
            <div className={`${Style.Envelope} ${folded ? Style.Fold : ''}`} onClick={() => setFolded(!folded)}>
                <div className={`${Style.Top}`}></div>
                <div className={`${Style.Left}`}></div>
                <div className={`${Style.Back}`}>
                    <div className={`${Style.Paper}`}>
                        <span className={`${Style.Line} ${Style.One}`}></span>
                        <span className={`${Style.Line} ${Style.Two}`}></span>
                        <span className={`${Style.Line} ${Style.Three}`}></span>
                        <span className={`${Style.Line} ${Style.Two}`}></span>
                        <span className={`${Style.Line} ${Style.One}`}></span>
                    </div>
                </div>
                <div className={`${Style.Right}`}></div>
                <div className={`${Style.Bottom}`}></div>
            </div>
        </div>
    );
}

import { ReactNode } from 'react';
import Style from './index.module.css';

interface TooltipProps {
    body: any;
    children: ReactNode;
}

export default function Tooltip({ body, children }: TooltipProps) {
    return (
        <div className={`${Style.Tooltip}`}>
            <div className={`${Style.TooltipText}`}>{body}</div>
            {children}
        </div>
    );
}

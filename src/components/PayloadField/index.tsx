import { FontAwesomeIcon as I } from '@fortawesome/react-fontawesome';
import { useCallback } from 'react';
import Tooltip from '../Tooltip';

interface PayloadFieldProps {
    payload: string;
    help?: string;
}

export default function PayloadField({ payload, help }: PayloadFieldProps) {
    const copy = useCallback(async () => {
        await navigator.clipboard.writeText(payload);
    }, [payload]);

    return (
        <div className="field">
            <label htmlFor="link" className="label">
                Letter link
            </label>
            <div className="control">
                <div className="field has-addons">
                    <div className="control has-icons-left is-expanded">
                        <input
                            id="link"
                            name="link"
                            type="text"
                            className="input is-large"
                            value={payload}
                            onFocus={(e) => e.target.select()}
                            readOnly
                            autoFocus
                        />
                        <span className="icon is-small is-left">
                            <I icon="envelope-open" />
                        </span>
                    </div>
                    <div className="control">
                        <Tooltip body={<span style={{ whiteSpace: 'nowrap' }}>Copy to clipboard</span>}>
                            <button className="button is-large is-info is-outlined" onPointerUp={copy}>
                                <span className="icon is-small">
                                    <I icon="clipboard" />
                                </span>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
            {help && <p className="help">{help}</p>}
        </div>
    );
}

import { FontAwesomeIcon as I } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import CopyToClipboard from '../../helpers/CopyToClipboard';
import { Password } from '../../helpers/Crypto';
import Tooltip from '../Tooltip';

interface PasswordFieldProps {
    password: string;
    help?: string;
    onPasswordChange: (value: string) => void;
    onSubmit?: () => void;
}

export default function PasswordField({ password, onPasswordChange, help, onSubmit }: PasswordFieldProps) {
    const [visible, setVisible] = useState(false);

    return (
        <div className="field">
            <label htmlFor="password" className="label">
                Password
            </label>
            <div className="control">
                <div className="field has-addons">
                    <div className="control has-icons-left has-icons-right is-expanded">
                        <input
                            id="password"
                            name="password"
                            type={visible ? 'text' : 'password'}
                            className="input is-large"
                            value={password}
                            onChange={(e) => onPasswordChange(e.target.value)}
                            onFocus={(e) => e.target.select()}
                            autoFocus
                            autoComplete="off"
                        />
                        <span className="icon is-small is-left">
                            <I icon="key" />
                        </span>
                        <span className="icon is-small is-right">
                            <I icon="xmark" />
                        </span>
                    </div>
                    <div className="control">
                        <Tooltip body={<span style={{ whiteSpace: 'nowrap' }}>{visible ? 'Hide password' : 'Show password'}</span>}>
                            <button className="button is-large is-info is-outlined" onPointerUp={() => setVisible(!visible)}>
                                <span className="icon is-small">
                                    <I icon={visible ? 'eye' : 'eye-slash'} />
                                </span>
                            </button>
                        </Tooltip>
                    </div>
                    <div className="control">
                        <Tooltip body={<span style={{ whiteSpace: 'nowrap' }}>Generate password</span>}>
                            <button
                                className="button is-large is-info is-outlined"
                                onPointerUp={() => onPasswordChange(Password.generate(16))}
                            >
                                <span className="icon is-small">
                                    <I icon="rotate" />
                                </span>
                            </button>
                        </Tooltip>
                    </div>
                    <div className="control">
                        <Tooltip body={<span style={{ whiteSpace: 'nowrap' }}>Copy to clipboard</span>}>
                            <button className="button is-large is-info is-outlined" onPointerUp={() => CopyToClipboard(password)}>
                                <span className="icon is-small">
                                    <I icon="clipboard" />
                                </span>
                            </button>
                        </Tooltip>
                    </div>
                    {onSubmit && (
                        <div className="control">
                            <Tooltip body={<span style={{ whiteSpace: 'nowrap' }}>Next</span>}>
                                <button
                                    className="button is-large is-link is-outlined"
                                    disabled={!password.length}
                                    onPointerUp={() => password.length && onSubmit()} // If onClick was used, the disabled prop would spread
                                >
                                    <span className="icon is-small">
                                        <I icon="right-long" />
                                    </span>
                                </button>
                            </Tooltip>
                        </div>
                    )}
                </div>
            </div>
            {help && <p className="help">{help}</p>}
        </div>
    );
}

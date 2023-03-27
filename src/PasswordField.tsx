import { FontAwesomeIcon as I } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';
import { Password } from './Crypto';

interface PasswordFieldProps {
    password: string;
    help?: string;
    onPasswordChange: (value: string) => void;
    onSubmit?: () => void;
}

export default function PasswordField({ password, onPasswordChange, help, onSubmit }: PasswordFieldProps) {
    const [visible, setVisible] = useState(false);

    const copy = useCallback(async () => {
        await navigator.clipboard.writeText(password);
    }, [password]);

    return (
        <div className="field">
            <label htmlFor="password" className="label">
                Password
            </label>
            <div className="control">
                <div className="field has-addons">
                    <div className="control has-icons-left is-expanded">
                        <input
                            id="password"
                            name="password"
                            type={visible ? 'text' : 'password'}
                            className="input is-large"
                            value={password}
                            onChange={(e) => onPasswordChange(e.target.value)}
                            onFocus={(e) => e.target.select()}
                            autoFocus
                        />
                        <span className="icon is-small is-left">
                            <I icon="key" />
                        </span>
                    </div>
                    <div className="control">
                        <button className="button is-large is-info is-outlined" onPointerUp={() => setVisible(!visible)}>
                            <span className="icon is-small">
                                <I icon={visible ? 'eye' : 'eye-slash'} />
                            </span>
                        </button>
                    </div>
                    <div className="control">
                        <button className="button is-large is-info is-outlined" onPointerUp={() => onPasswordChange(Password.generate(16))}>
                            <span className="icon is-small">
                                <I icon="rotate" />
                            </span>
                        </button>
                    </div>
                    <div className="control">
                        <button className="button is-large is-info is-outlined" onPointerUp={copy}>
                            <span className="icon is-small">
                                <I icon="clipboard" />
                            </span>
                        </button>
                    </div>
                    {onSubmit && (
                        <div className="control">
                            <button className="button is-large is-link is-outlined" onPointerUp={(e) => onSubmit()}>
                                <span className="icon is-small">
                                    <I icon="right-long" />
                                </span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {help && <p className="help">{help}</p>}
        </div>
    );
}

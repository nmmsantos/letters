import { useState } from 'react';
import Envelope from '../components/Envelope';
import PasswordField from '../components/PasswordField';
import PayloadField from '../components/PayloadField';
import { CryptoTasks } from '../helpers/Crypto';

function NewLetter() {
    const [pasword, setPassword] = useState('');
    const [keyPayload, setkeyPayload] = useState('');

    return (
        <section className="section">
            <div className="container">
                <h1 className="title">New Letter</h1>
                {!keyPayload ? (
                    <PasswordField
                        password={pasword}
                        onPasswordChange={setPassword}
                        onSubmit={async () => setkeyPayload(await CryptoTasks.generateKey(pasword))}
                        help="Save this password to later unlock the letter."
                    />
                ) : (
                    <PayloadField payload={keyPayload} help="Send this link to a friend so he can write back a letter only you can read." />
                )}
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Envelope width={500} />
            </div>
        </section>
    );
}

export default NewLetter;

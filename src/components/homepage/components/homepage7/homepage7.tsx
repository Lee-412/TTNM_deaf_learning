
import classes from './homepage7.module.css';
import { Button } from '@mantine/core';
import { TextInput } from '@mantine/core';

const HomePage7 = () => {
    return (
        <div className={classes['homepage7']}>
            <h1 className={classes['homepage7-h']}>Liên hệ với chúng tôi</h1>
            <div className={classes['homepage7-b']}>
                <div className={classes['homepage7-b-1']}>
                    <TextInput mt="sm" label="Name" placeholder="Name" />
                    <TextInput mt="sm" label="Email" placeholder="Email" />
                    <TextInput mt="sm" label="Message" placeholder="Message" />
                    <div style={{ textAlign: 'center', marginTop: '5%' }} >
                        <Button style={{ width: '60%', borderRadius: '10cap' }}>Send</Button>
                    </div>

                </div>
                <div className={classes['homepage7-b-2']}>
                    <ul>
                        <li style={{ display: 'flex' }}>
                            <img src="https://img.icons8.com/?size=100&id=J5tyvAWzAr1T&format=png&color=000000" alt="" />
                            <div className={classes['homepage7-b-2-text']}>
                                <h5>Phone</h5>
                                <p>2390183908123890</p>
                            </div>
                        </li>
                        <li style={{ display: 'flex' }}>
                            <img src="https://img.icons8.com/?size=100&id=X0mEIh0RyDdL&format=png&color=000000" alt="" />
                            <div className={classes['homepage7-b-2-text']}>
                                <h5>Email</h5>
                                <p>asddfas@gmal.com</p>
                            </div>
                        </li>
                        <li style={{ display: 'flex' }}>
                            <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="" />
                            <div className={classes['homepage7-b-2-text']}>
                                <h5>Facebook</h5>
                                <p>facebook.com/abcxyz</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomePage7;
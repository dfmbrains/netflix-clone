import React, {useState} from 'react';
import './account.css';
import {useDispatch} from "react-redux";
import {changePassword} from "../../store/reducers/account";

const Account = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const dispatch = useDispatch();
    const changePasswordFunc = (e) => {
        e.preventDefault();
        const changePasswordData = {
            old_password: oldPassword,
            new_password: newPassword,
            new_password_confirm: confirmNewPassword
        };
        dispatch(changePassword(changePasswordData))
    };
    return (
        <section className="account">
            <div className="account__box">
                <h1 className={"account__title"}>Change Password</h1>
                <form onSubmit={(e) => changePasswordFunc(e)}>
                    <input placeholder={"Old Password"} onChange={(e) => setOldPassword(e.target.value)}
                           type="password"/>
                    <input placeholder={"New Password"} onChange={(e) => setNewPassword(e.target.value)}
                           type="password"/>
                    <input placeholder={"Confirm New Password"} onChange={(e) => setConfirmNewPassword(e.target.value)}
                           type="password"/>
                    <button type={"submit"}>Change Password</button>
                </form>
            </div>
        </section>
    );
};

export default Account;
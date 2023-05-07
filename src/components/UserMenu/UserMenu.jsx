import { useDispatch, useSelector } from "react-redux"
import { Div, Ul, MobileButton, Button, Mail } from "./UserMenu.styled"
import { emailSelector, tokenSelector } from "redux/selectors";
import { signOut } from "redux/auth/authOperations";

export function UserMenu() {

    const dispatch = useDispatch();
    const token = useSelector(tokenSelector);
    const email = useSelector(emailSelector);

    const onClick = () => {
        dispatch(signOut(token));
    };

    return (
        <Div>
            <MobileButton>mobile button</MobileButton>
            <Ul>
                <Mail>{email}</Mail>
                <Button onClick={onClick}>sign out</Button>
            </Ul>
        </Div>
    )
}
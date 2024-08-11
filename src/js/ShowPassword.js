import { updatePasswordCheckBox } from "../redux/slices/auth/signupSlice";

const showPassword = (passwordCheckbox, dispatch) =>{
    if(!passwordCheckbox){
        dispatch(updatePasswordCheckBox(true));
    }
    else if(passwordCheckbox){
      dispatch(updatePasswordCheckBox(false));
    }
}

export default showPassword;
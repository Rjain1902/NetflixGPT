export const checkValidateData=(email,password)=>{
    const emailValidate=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    const passwordValidate=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)

    if(!emailValidate) return 'Email is not Valid'
    if(!passwordValidate)return 'Password is not valid'

    return null

}
import axios from 'axios';
const SERVER = process.env.REACT_APP_SERVER
const LOCAL = process.env.REACT_APP_LOCALSERVER

//ctrl+r로 전체 바꿀수 있음 ${}


//Users
export const login = loginRequest=> axios.post(`${LOCAL}/users/login`,loginRequest,{withCredentials:true})
export const logout = () => axios.get(`${LOCAL}/users/logout`,{withCredentials:true})
export const register = joinRequest=> axios.post(`${LOCAL}/users/join`,joinRequest,{withCredentials:true})
export const agreeTermsConditions = agreeTermsConditionsRequest=>axios.post(`${LOCAL}/users/terms`,agreeTermsConditionsRequest,{withCredentials:true})
export const exclusiveCompany = exclusiveCompanyRequest => axios.post(`${LOCAL}/users/exclusive`,exclusiveCompanyRequest,{withCredentials:true})


//stateCheck(useEffect & CheckService)
export const signCheck = () => axios.get(`${LOCAL}/states/signCheck`,{withCredentials:true})
export const companyCheck = () => axios.get(`${LOCAL}/states/companyCheck`,{withCredentials:true})
export const userInfoCheck = () => axios.get(`${LOCAL}/states/userInfoCheck`,{withCredentials:true})
export const termsCheck = () => axios.get(`${LOCAL}/states/termsCheck`,{withCredentials:true})
export const exclusiveCompanyCheck = () => axios.get(`${LOCAL}/states/exclusiveCompanyCheck`,{withCredentials:true})
export const exclusiveTokenCheck = () => axios.get(`${LOCAL}/states/exclusiveTokenCheck`,{withCredentials:true})
export const signAllCheck = () => axios.get(`${LOCAL}/states/signAllCheck`,{withCredentials:true})
export const authModifySignCheck = ()=> axios.get(`${LOCAL}/states/authModifySignCheck`,{withCredentials:true})
export const searchDataCheck = () => axios.get(`${LOCAL}/states/searchDataCheck`,{withCredentials:true})

//Find Service

export const changePasswordPage = changePasswordPageRequest => axios.post(`${LOCAL}/findInfo/changePasswordPage`,changePasswordPageRequest,{withCredentials:true})
export const findEditPassword = findEmailPasswordRequest => axios.post(`${LOCAL}/findInfo/findEditPassword`,findEmailPasswordRequest,{withCredentials:true})
export const checkSMSAuthNum = checkSMSAuthNumRequest => axios.post(`${LOCAL}/findInfo/checkSMSAuthNum`,checkSMSAuthNumRequest,{withCredentials:true})



//Update Service
export const authModify = authModifyRequest => axios.post(`${LOCAL}/profiles/authModify`,authModifyRequest,{withCredentials:true})
export const editUser = editUserRequest => axios.post(`${LOCAL}/profiles/editUser`,editUserRequest,{withCredentials:true})
export const editUserPassword = editUserPasswordRequest => axios.post(`${LOCAL}/profiles/editUserPassword`,editUserPasswordRequest,{withCredentials:true})
export const editUserPhone = editUserPhoneRequest => axios.post(`${LOCAL}/profiles/editUserPhone`,editUserPhoneRequest,{withCredentials:true})
export const editEmailAdress = editEmailAdressRequest => axios.post(`${LOCAL}/profiles/editEmailAdress`,editEmailAdressRequest,{withCredentials:true})
//User WithDraw Service
export const withdrawUser = withdrawUserRequest => axios.post(`${LOCAL}/profiles/withdrawUser`,withdrawUserRequest,{withCredentials:true})


//Table Service
export const excelTables = tableRequest => axios.post(`${LOCAL}/tables/upload`,tableRequest,{withCredentials:true})
export const tableFind = () => axios.get(`${LOCAL}/tables/find`,{withCredentials:true})
export const tableUpdate = tableUpdateRequest => axios.post(`${LOCAL}/tables/uploadOne`,tableUpdateRequest,{withCredentials:true})
export const tableDelete = tableDeleteRequest => axios.post(`${LOCAL}/tables/delete`,tableDeleteRequest,{withCredentials:true})
export const findOneTable = findOneRequest => axios.post(`${LOCAL}/tables/findOne`,findOneRequest,{withCredentials:true})
export const findOneMobile = findOneMobileRequest => axios.post(`${LOCAL}/tables/findOneMobile`,findOneMobileRequest,{withCredentials:true})
export const tableEdit = editTableRequest => axios.post(`${LOCAL}/tables/tableEdit`,editTableRequest,{withCredentials:true})


//Send Email
export const checkmail = mailRequest => axios.post(`${LOCAL}/sendService/sendMail`,mailRequest,{withCredentials:true})
export const sendModifyEmail = sendModifyEmailRequest => axios.post(`${LOCAL}/sendService/sendModifyEmail`,sendModifyEmailRequest,{withCredentials:true})
export const sendContactMail = sendContactMailRequest => axios.post(`${LOCAL}/sendService/sendContactMail`,sendContactMailRequest,{withCredentials:true})

//Send SMS -Register
export const sendJoinSMS = sendJoinSMSRequest => axios.post(`${LOCAL}/sendService/sendJoinSMS`,sendJoinSMSRequest,{withCredentials:true})


//Send SMS -Find
export const sendFindIdSMS= sendFindIdSMSRequest => axios.post(`${LOCAL}/sendService/findIdSendSMS`,sendFindIdSMSRequest,{withCredentials:true})
export const sendFindPwSMS = sendFindPwSMSRequest => axios.post(`${LOCAL}/sendService/sendFindPwSMS`,sendFindPwSMSRequest,{withCredentials:true} )

//Send SMS -Update
export const sendEditNameSMS = sendEditNameSMSRequest => axios.post(`${LOCAL}/sendService/sendEditNameSMS`,sendEditNameSMSRequest,{withCredentials:true})
export const sendEditPhoneSMS = sendEditPhoneSMSRequest => axios.post(`${LOCAL}/sendService/sendEditPhoneSMS`,sendEditPhoneSMSRequest,{withCredentials:true})
export const sendEditPasswordSMS = sendEditPasswordSMSRequest => axios.post(`${LOCAL}/sendService/sendEditPasswordSMS`,sendEditPasswordSMSRequest,{withCredentials:true})


//auth--삭제예정
export const authHomeCheck = ()=> axios.get(`${LOCAL}/auth/authHomeCheck`,{withCredentials:true})
export const authLogin = authLoginRequest => axios.post(`${LOCAL}/auth/authLogin`,authLoginRequest,{withCredentials:true})

export const authLogout = () => axios.get(`${LOCAL}/auth/authLogout`,{withCredentials:true})
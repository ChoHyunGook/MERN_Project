import axios from 'axios';
const SERVER = process.env.REACT_APP_SERVER
const LOCAL = process.env.REACT_APP_LOCALSERVER

//ctrl+r로 전체 바꿀수 있음 ${}


//Users
export const login = loginRequest=> axios.post(`${SERVER}/users/login`,loginRequest,{withCredentials:true})
export const logout = () => axios.get(`${SERVER}/users/logout`,{withCredentials:true})
export const register = joinRequest=> axios.post(`${SERVER}/users/join`,joinRequest,{withCredentials:true})
export const agreeTermsConditions = agreeTermsConditionsRequest=>axios.post(`${SERVER}/users/terms`,agreeTermsConditionsRequest,{withCredentials:true})
export const exclusiveCompany = exclusiveCompanyRequest => axios.post(`${SERVER}/users/exclusive`,exclusiveCompanyRequest,{withCredentials:true})


//stateCheck(useEffect & CheckService)
export const signCheck = () => axios.get(`${SERVER}/states/signCheck`,{withCredentials:true})
export const companyCheck = () => axios.get(`${SERVER}/states/companyCheck`,{withCredentials:true})
export const userInfoCheck = () => axios.get(`${SERVER}/states/userInfoCheck`,{withCredentials:true})
export const termsCheck = () => axios.get(`${SERVER}/states/termsCheck`,{withCredentials:true})
export const exclusiveCompanyCheck = () => axios.get(`${SERVER}/states/exclusiveCompanyCheck`,{withCredentials:true})
export const exclusiveTokenCheck = () => axios.get(`${SERVER}/states/exclusiveTokenCheck`,{withCredentials:true})
export const signAllCheck = () => axios.get(`${SERVER}/states/signAllCheck`,{withCredentials:true})
export const authModifySignCheck = ()=> axios.get(`${SERVER}/states/authModifySignCheck`,{withCredentials:true})
export const searchDataCheck = () => axios.get(`${SERVER}/states/searchDataCheck`,{withCredentials:true})

//Find Service

export const changePasswordPage = changePasswordPageRequest => axios.post(`${SERVER}/findInfo/changePasswordPage`,changePasswordPageRequest,{withCredentials:true})
export const findEditPassword = findEmailPasswordRequest => axios.post(`${SERVER}/findInfo/findEditPassword`,findEmailPasswordRequest,{withCredentials:true})
export const checkSMSAuthNum = checkSMSAuthNumRequest => axios.post(`${SERVER}/findInfo/checkSMSAuthNum`,checkSMSAuthNumRequest,{withCredentials:true})



//Update Service
export const authModify = authModifyRequest => axios.post(`${SERVER}/profiles/authModify`,authModifyRequest,{withCredentials:true})
export const editUser = editUserRequest => axios.post(`${SERVER}/profiles/editUser`,editUserRequest,{withCredentials:true})
export const editUserPassword = editUserPasswordRequest => axios.post(`${SERVER}/profiles/editUserPassword`,editUserPasswordRequest,{withCredentials:true})
export const editUserPhone = editUserPhoneRequest => axios.post(`${SERVER}/profiles/editUserPhone`,editUserPhoneRequest,{withCredentials:true})
export const editEmailAdress = editEmailAdressRequest => axios.post(`${SERVER}/profiles/editEmailAdress`,editEmailAdressRequest,{withCredentials:true})
//User WithDraw Service
export const withdrawUser = withdrawUserRequest => axios.post(`${SERVER}/profiles/withdrawUser`,withdrawUserRequest,{withCredentials:true})


//Table Service
export const excelTables = tableRequest => axios.post(`${SERVER}/tables/upload`,tableRequest,{withCredentials:true})
export const tableFind = () => axios.get(`${SERVER}/tables/find`,{withCredentials:true})
export const tableUpdate = tableUpdateRequest => axios.post(`${SERVER}/tables/uploadOne`,tableUpdateRequest,{withCredentials:true})
export const tableDelete = tableDeleteRequest => axios.post(`${SERVER}/tables/delete`,tableDeleteRequest,{withCredentials:true})
export const findOneTable = findOneRequest => axios.post(`${SERVER}/tables/findOne`,findOneRequest,{withCredentials:true})
export const findOneMobile = findOneMobileRequest => axios.post(`${SERVER}/tables/findOneMobile`,findOneMobileRequest,{withCredentials:true})
export const tableEdit = editTableRequest => axios.post(`${SERVER}/tables/tableEdit`,editTableRequest,{withCredentials:true})


//Send Email
export const checkmail = mailRequest => axios.post(`${SERVER}/sendService/sendMail`,mailRequest,{withCredentials:true})
export const sendModifyEmail = sendModifyEmailRequest => axios.post(`${SERVER}/sendService/sendModifyEmail`,sendModifyEmailRequest,{withCredentials:true})
export const sendContactMail = sendContactMailRequest => axios.post(`${SERVER}/sendService/sendContactMail`,sendContactMailRequest,{withCredentials:true})

//Send SMS -Register
export const sendJoinSMS = sendJoinSMSRequest => axios.post(`${SERVER}/sendService/sendJoinSMS`,sendJoinSMSRequest,{withCredentials:true})


//Send SMS -Find
export const sendFindIdSMS= sendFindIdSMSRequest => axios.post(`${SERVER}/sendService/findIdSendSMS`,sendFindIdSMSRequest,{withCredentials:true})
export const sendFindPwSMS = sendFindPwSMSRequest => axios.post(`${SERVER}/sendService/sendFindPwSMS`,sendFindPwSMSRequest,{withCredentials:true} )

//Send SMS -Update
export const sendEditNameSMS = sendEditNameSMSRequest => axios.post(`${SERVER}/sendService/sendEditNameSMS`,sendEditNameSMSRequest,{withCredentials:true})
export const sendEditPhoneSMS = sendEditPhoneSMSRequest => axios.post(`${SERVER}/sendService/sendEditPhoneSMS`,sendEditPhoneSMSRequest,{withCredentials:true})
export const sendEditPasswordSMS = sendEditPasswordSMSRequest => axios.post(`${SERVER}/sendService/sendEditPasswordSMS`,sendEditPasswordSMSRequest,{withCredentials:true})


//auth--삭제예정
export const authHomeCheck = ()=> axios.get(`${SERVER}/auth/authHomeCheck`,{withCredentials:true})
export const authLogin = authLoginRequest => axios.post(`${SERVER}/auth/authLogin`,authLoginRequest,{withCredentials:true})

export const authLogout = () => axios.get(`${SERVER}/auth/authLogout`,{withCredentials:true})
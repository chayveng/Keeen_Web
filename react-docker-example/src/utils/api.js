// const BASE_URL = process.env.REACT_APP_BASE_URL;
// const BASE_AUTH_URL = process.env.REACT_APP_AUTHEN_BASE_URL;
const BASE_URL = 'https://tms.siamtheatre.com'
const BASE_URL_MASTER = 'https://master.siamtheatre.com'
const BASE_URL_USER = 'https://user.siamtheatre.com'
const BASE_URL_TRANSACTION = 'https://transaction.siamtheatre.com'

const API = {
  // master
  MASTER_BANK: `${BASE_URL_MASTER}/api/v1/master/bank_dropdown`,
  MASTER_PAYMENT_CHANNEL: `${BASE_URL_MASTER}/api/v1/master/payment_channel`,
  MASTER_TRANSACTION_TYPE: `${BASE_URL_MASTER}/api/v1/master/transaction_type`,
  
  USER: `${BASE_URL_USER}/api/v1/user`,
  TRANSACTION: `${BASE_URL_TRANSACTION}/api/v1/transaction`,
  ACCOUNT: `${BASE_URL_TRANSACTION}/api/v1/account/merchant`,

  // tms
  GET_DEVICE_MANAGEMENT: `${BASE_URL}/api/v1/device_management`,
  GET_PRODUCT: `${BASE_URL}/api/v1/product`,
  GET_PRODUCT_ATTRIBUTE: `${BASE_URL}/api/v1/product_attribute`,
  GET_PRODUCT_ATTRIBUTE_DROPDOWN: `${BASE_URL}/api/v1/product_attribute/dropdown`,
}

export default API;
const url = `${output.meta.api}/users/otp/+${CODE + PHONE_NUMBER}`
console.log(url)
const otpFetch = http.get(url)
const otpResponse = json(otpFetch.body)
const otp = otpResponse.otp

console.log(JSON.stringify(otp))

output.otp = otp

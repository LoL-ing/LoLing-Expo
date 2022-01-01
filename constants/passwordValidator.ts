//길이(8~20), 대소문자, 숫자, space

const reg = /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9@$!%*#?&]{8,20}$/;

export default function passwordValidator(password: string) {
  if (!reg.test(password)) {
    return false;
  } else return true;
}

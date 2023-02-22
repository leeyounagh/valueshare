import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SLayout = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');

  console.log(email, name, password, confirmPassword);

  const onEmailHandler = (e) => {
    const email = e.target.value;
    const isEmailValid = email.includes('@');

    if (!isEmailValid) {
      return errorMessage;
    }
    setEmail(email);
  };
  const onNameHandler = (e) => {
    setName(e.target.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const onConfirmPasswordHandler = (e) => {
    if (password !== confirmPassword) setConfirmPassword(e.target.value);
  };
  const onPhoneHandler = (e) => {
    const phoneNumber = e.target.value.replace(/[^0-9]/g, '').split('');

    const arr = [
      [0, phoneNumber > 9 ? 3 : 2],
      [0, phoneNumber > 10 ? 4 : 3],
      [0, 4],
    ];

    e.target.value = arr
      .map(function (v) {
        return phoneNumber.splice(v[0], v[1]).join('');
      })
      .filter(function (t) {
        return t;
      })
      .join('-');

    setPhone(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert('비밀번호를 확인해주세요');
    }

    const body = {
      email,
      name,
      password,
      phone,
    };

    axios
      .post('', body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        setError('에러');
      });
  };

  return (
    <SLayout>
      <h1>회원가입</h1>
      <form onSubmit={onSubmitHandler}>
        <div style={{ marginBottom: '50px' }}>
          <label>이메일</label>
          <input
            name="email"
            value={email}
            onChange={onEmailHandler}
            placeholder="이메일을 입력해주세요"
          />
          {}
        </div>
        <div style={{ marginBottom: '50px' }}>
          <label>이름</label>
          <input
            name="name"
            value={name}
            onChange={onNameHandler}
            placeholder="이름을 입력해주세요"
          />
        </div>
        <div style={{ marginBottom: '50px' }}>
          <label>비밀번호</label>
          <input
            name="password"
            value={password}
            onChange={onPasswordHandler}
            placeholder="비밀번호를 입력해주세요."
          />
        </div>
        <div style={{ marginBottom: '50px' }}>
          <label>비밀번호 확인</label>
          <input
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={onConfirmPasswordHandler}
            placeholder="비밀번호 한번더 입력해주세요."
          />
        </div>
        <div>
          <label>전화번호</label>
          <input
            name="phone"
            value={phone}
            onChange={onPhoneHandler}
            placeholder="전화번호를 입력해주세요."
          ></input>
        </div>

        <br />
        <div style={{ marginBottom: '50px' }}>
          <button type="submit">회원가입</button>
        </div>
      </form>
    </SLayout>
  );
}

export default Register;

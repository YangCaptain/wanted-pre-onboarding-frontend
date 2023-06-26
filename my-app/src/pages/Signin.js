import React, { useState } from 'react';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = () => {
    // 로그인 로직 구현
    // 유효성 검사 등을 수행하고 API 호출 등을 통해 서버에 로그인 요청을 보낼 수 있습니다.
    // 로그인이 정상적으로 완료되면 응답으로 받은 JWT를 로컬 스토리지에 저장하고, /todo 경로로 이동해야 합니다.
  };

  return (
    <div>
      <h2>로그인</h2>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        data-testid="email-input"
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        data-testid="password-input"
      />
      <button onClick={handleSignin} data-testid="signin-button">
        로그인
      </button>
    </div>
  );
}

export default Signin;

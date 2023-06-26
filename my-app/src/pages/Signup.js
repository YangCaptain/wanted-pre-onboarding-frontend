import React, { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // 회원가입 로직 구현
    // 유효성 검사 등을 수행하고 API 호출 등을 통해 서버에 회원가입 요청을 보낼 수 있습니다.
    // 회원가입이 정상적으로 완료되면 /signin 경로로 이동하도록 처리해야 합니다.
  };

  return (
    <div>
      <h2>회원가입</h2>
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
      <button onClick={handleSignup} data-testid="signup-button">
        회원가입
      </button>
    </div>
  );
}

export default Signup;

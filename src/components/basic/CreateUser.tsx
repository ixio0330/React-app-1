import React from "react";

function CreateUser(props: { uesrname: string, email: string, onChange: any, onCreate: any }) {
  const { onChange, uesrname, email, onCreate } = props;
  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="이름"
        onChange={onChange}
        value={uesrname}
      />
      <input
        type="text"
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>Insert</button>
    </div>
  )
}

export default React.memo(CreateUser);
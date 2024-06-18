import {useState} from 'react';

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register= () => {

  const [name, setName] = useState("이름");
  // 초기값 설정
  const [birth, setBirth] = useState("");
  const [nationality, setNationality] = useState("");
  const [bio, setBio] = useState("");

  // 이름
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  // 생년월일
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  }

  // 국적
  const onChangeNationality = (e) => {
    setNationality(e.target.value);
  }

  // 자기소개
  const onChangeBio = (e) => {
    setBio(e.target.value);
  }

  return (
    <div>
      <div>
        <input 
        value={name}
        onChange={onChangeName} 
        placeholder={"이름"} 
        />
      </div>

      <div>
        <input 
        value={birth}
        onChange={onChangeBirth} 
        type="date" 
        />
        {birth}
      </div>  


      <div>
        <select 
          value={nationality}
          onChange={onChangeNationality}>
          <option></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {nationality}
      </div>

    <div>
      <textarea 
        value={bio} 
        onChange={onChangeBio} />
        {bio}
    </div>

    </div>
  );
};

export default Register;
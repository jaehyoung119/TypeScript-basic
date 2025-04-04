// 타입 별칭

type User = {
  // 중복 타입 코드 간편화
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

// type User => 중복 별칭 사용불가

function func() {
  type User = {}; //function 안의 타입 중복사용가능
}

let user: User = {
  id: 1,
  name: "김재형",
  nickname: "안녕갱지",
  birth: "2001",
  bio: "안녕하세요",
  location: "서울",
};

let user2: User = {
  id: 2,
  name: "김요한",
  nickname: "안녕갱지",
  birth: "2001",
  bio: "안녕하세요",
  location: "서울",
};

type CountryCodes = {
  [key : string] : string; // 타입분량 간소화
};

// 인덱스 시그늬처
let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
    [key : string] : number; // 빈객체도 혀용 위반하지 않는다면 모든 허용
   // Korea: number; // 필수 정보 있을시 추가 빈객체시 오류
                     // 단 인덱스 시그니처의 같거나 호환하는 타입이여야함
}

let countryNumberCodes: CountryNumberCodes = {
    
}

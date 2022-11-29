interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
  something: object;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
  //..
}

// 특정 상품의 정보를 화면에 노출시킬 때 api 에서 받아온 데이터 중 일부만 필요할 수 있다.

// 방법 1. 새로운 타입을 재정의한다.
// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }

// function displayProductDetail(shoppingItem: ProductDetail) {

// }


// 방법 2. 유틸리티 타입 Pick을 사용한다.
// function displayProductDetail(shoppingItem: Pick<Product, 'id' |'name'|'price'>) {

// }


// Partial 내부 구조 분석

// 특정 상품의 상세 정보를 나타내기 위한 함수
function displayProductDetail(shoppingItem: Pick<Product, 'id' |'name'|'price'>) {

}

// 특정 상품 정보를 업데이트(갱신)하는 함수
// 정의된 Product 타입의 일부 중 원하는 것만 업데이트 할 수 있다고 가정

/* 
방법 1. 옵셔널 타입으로 새로운 타입 정의
=> 맞는 방법이지만 코드양이 늘어나는 방법 

interface UpdateProduct {
  id?: number;
  name?: string;
  price?: number;
  brand?: string;
  stock?: number;
}


function updateProductItem(productItem: UpdateProduct) {

}

*/

/* 
방법2. Partial 사용 
=> 방법1과 동일한 효과
*/

function updateProductItem(productItem: Partial<Product>) {

}


// 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

/* 
Partial 없이 옵셔널하게 작성해도 된다.
다만 코드의 양이 늘어날 뿐이다.

interface UserProfileUpdate {
  username?: string;
  email?: string;
  profilePhotoUrl?: string;
} 

*/

// 첫번째 단계
type UserProfileUpdate = {
  username?: UserProfile['username']
  email?: UserProfile['email']
  profilePhotoUrl?: UserProfile['profilePhotoUrl']
}

// 두번째 단계
type UserProfileUpdate = {
  [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
}

// 세번째 단계
/* 
keyof는 타입의 키 값을 받아온다.

type UserProfileKeys = keyof UserProfile

UserProfileKeys 의 값은 'username' | 'email' |  'profilePhotoUrl'
*/

type UserProfileUpdate = {
  [p in keyof UserProfile]? : UserProfile[p]
}


// 네번째 단계 - Partial 구현
type Subset<T> = {
  [p in keyof T]? : T[p]
}

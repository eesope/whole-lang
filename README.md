# wholelang
react-native, expo-cli, javascript

2021-Dec-16
해결해야할 문제)

1. 
list 에 새로운 문장을 추가했는데 새 문장이 보이지 않음.
console.log 로 리스트를 찍어보니 
array 는 형성이 되고 새로운 키값도 생기는데
-> input 입력한 문장이 undefined 로 나오고
-> 첫번째 문장은 항상 추가가 안됨

console.log 를 해보니 input 은 인식하는데 리스트로 넘겨주지를 못하는 듯함
하단은 console.log 기록

첫번째 입력은 빈칸으로 나오고,
Array []

두번째 입력부터 출력이 되고
입력한 문장 값은 undefined 로 출력되는 중

Array [
 Object {
  "key": "1",
  "sentence": undefined,
 },
]

2.
list 에 있는 문장의 갯수를 카운트 중
입력은 카운트를 잘 하는데 삭제는 카운트를 못하는 듯함
0개가 되면 카운트를 하나 일정하게 기능하지 못하는 것 같음

{/* 입력한 문장 카운팅 */}
<Text style={styles.sumNumber}> {(list[list.length-1] && parseInt(list[list.length -1].key)) || 0} sentences </Text>

3.
Array 에 입력한 문장이 저장이 안되다보니 AsyncStorage가 제대로 되는지 확인 불가...

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

input 에 입력된 데이터를 저장하는 버튼에 달려 있는
handleSubmit 함수에서 console.log(inputValue) 를 찍어보니
undefined 라고 나와 이 함수가 잘못된 것이 아닐지...
const handleSubmit = () => {
        if (!lineToBeEdited) {
            handleAddLine({
                sentence: inputValue,
                // to make a string use `${}`
                // if the array is not empty(a key(index) count start with 0, so put -1) && check the key of the last element
                // convert it to an integer, +1 to it, return the new value as a string for the new key
                // if the array is empty, current inputValue will be the first line -> () || 1
                key: `${ (list[list.length-1] && parseInt(list[list.length -1].key) + 1) || 1}`
            });
             console.log(inputValue)
            setInputValue('');
        } else {
            handleEditLine({
                sentence: inputValue,
                key: lineToBeEdited.key
            })
        }
        setInputValue('');
    };

2.
list 에 있는 문장의 갯수를 카운트 중
입력은 카운트를 잘 하는데 삭제는 카운트를 못함

{/* 입력한 문장 카운팅 */}
<Text style={styles.sumNumber}> {(list[list.length-1] && parseInt(list[list.length -1].key)) || 0} sentences </Text>

3.
Array 에 입력한 문장이 저장이 안되다보니 AsyncStorage가 제대로 되는지 확인 불가...

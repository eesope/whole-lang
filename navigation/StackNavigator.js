import React from 'react';
//설치한 스택 네비게이션 라이브러리를 가져옵니다
import { createStackNavigator } from '@react-navigation/stack';

//페이지로 만든 컴포넌트들을 불러옵니다
import Home from '../components/Home';
import Settings from '../components/Settings';
import ReadMe from '../components/ReadMe';
import registerForPushNotificationsAsync from '../RegisterForPushNotificationsAsync';
import Notifications from '../components/Notifications';


//스택 네비게이션 라이브러리가 제공해주는 여러 기능이 담겨있는 객체를 사용합니다
//그래서 이렇게 항상 상단에 선언하고 시작하는게 규칙입니다!
const Stack = createStackNavigator();

const StackNavigator = () =>{
    return (

        //컴포넌트들을 페이지처럼 여기게끔 해주는 기능을 하는 네비게이터 태그를 선언합니다.
        //위에서 선언한 const Stack = createStackNavigator(); Stack 변수에 들어있는 태그를 꺼내 사용합니다.
        //Stack.Navigator 태그 내부엔 페이지(화면)를 스타일링 할 수 있는 다양한 옵션들이 담겨 있습니다.

        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f6f6f6',
                    height:100,
                },
                headerTitleAlign: 'center',
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontSize: 25,
                    fontWeight: '700'
                },
                headerBackTitleVisible: true
            }}
            
        >

            {/* 컴포넌트를 페이지로 만들어주는 엘리먼트에 끼워 넣습니다. 이 자체로 이제 페이지 기능을 합니다*/}
            {/* name 이 페이지 타이틀 */}
            <Stack.Screen name='My list' component={Home}/>
            <Stack.Screen name='Settings' component={Settings}/>
            <Stack.Screen name='ReadMe' component={ReadMe}/>
            <Stack.Screen name='registerForPushNotificationsAsynce' component={registerForPushNotificationsAsync}/>
            <Stack.Screen name='Notifications' component={Notifications}/>
            

        </Stack.Navigator>
    )
}

export default StackNavigator;
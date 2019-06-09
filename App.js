import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/features/login/components/login';
import AttendanceList from './src/features/attendance-list/components/attendance-list';
import Management from './src/features/management/components/management';
import Camera from './src/features/management/components/camera';

const mainNavigator = createStackNavigator({
    login: { screen: Login },
    attendanceList: { screen: AttendanceList },
    management: { screen: Management },
    camera: { screen: Camera }
}, {
    headerLayoutPreset: 'left',
});

export default createAppContainer(mainNavigator);

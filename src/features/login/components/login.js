import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logoImage}
                        source={require('../../../assets/images/login_header.png')}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.loginContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={{width: 90}}>아이디</Text>
                        <TextInput
                            style={styles.inputArea}
                            onChangeText={(id) => this.setState({ id })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={{width: 90}}>패스워드</Text>
                        <TextInput
                            style={styles.inputArea}
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </View>
                    <View style={[styles.inputContainer, {marginTop: 30}]}>
                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={this.login.bind(this)}
                        >
                            <Text style={styles.loginText}>로그인</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    login() {
        const { navigate } = this.props.navigation;
        // TODO: Implment network logic
        console.log('login');
        navigate('attendanceList');
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#EEE'
    },

    logoContainer: {
        flex: 1,
        alignItems: 'center'
    },

    logoImage: {
        flex: 1,
        width: '100%',
        height: undefined
    },

    loginContainer: {
        flex: 2,
        alignItems: 'center'
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },

    inputArea: {
        backgroundColor: '#CCC',
        width: 120,
        marginLeft: 10,
    },

    loginButton: {
        width: 220,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        backgroundColor: '#DF321C',
    },

    loginText: {
        color: 'white'
    }
});
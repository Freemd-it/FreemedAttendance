import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { CameraKitCamera } from 'react-native-camera-kit';
export default class Management extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null
        }
    }

    onTakePicture(image) {
        this.setState({image});
    }

    async pressCamera() {
        const success = await CameraKitCamera.checkDeviceCameraAuthorizationStatus();
        if (success) {
            this.props.navigation.navigate('camera', {
                onTakePicture: this.onTakePicture.bind(this)
            });
        }
    }

    render() {
        const cameraView = this.state.image ?
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{uri: this.state.image.uri}}
                    resizeMode='contain'
                />
            </View> :
            <TouchableOpacity 
                style={styles.photoContainer}
                onPress={this.pressCamera.bind(this)}>
                <Icon
                    size={30}
                    name='camera'
                />
            </TouchableOpacity>
        return (
            <View style={styles.container}>
                {cameraView}
                <View style={styles.listContainer}>

                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEE',
        padding: 10
    },

    photoContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCC',
        marginLeft: 30,
        marginRight: 30
    },

    imageContainer: {
        flex: 2,
        backgroundColor: '#CCC',
        marginLeft: 30,
        marginRight: 30
    },

    image: {
        flex: 1,
        width: '100%',
        height: undefined
    },

    listContainer: {
        flex: 3
    }
});
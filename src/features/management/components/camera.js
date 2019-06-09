import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CameraKitCamera } from 'react-native-camera-kit';

export default class Camera extends Component {

    render() {
        return (
            <View style={styles.container}>
                <CameraKitCamera
                    ref={cam => this.camera = cam}
                    style={styles.preview}
                    cameraOptions={{
                        flashMode: 'off',
                        ratioOverlay: '16:9'
                    }}
                />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> SNAP </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    takePicture = async () => {
        if (this.camera) {
            const image = await this.camera.capture(false);
            const { navigation } = this.props;
            navigation.goBack();
            navigation.state.params.onTakePicture(image);
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});
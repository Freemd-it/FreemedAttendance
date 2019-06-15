import React, { 
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    FlatList,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { CameraKitCamera } from 'react-native-camera-kit';
import { Svg, Rect } from 'react-native-svg';
export default class Management extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null,
            imageWidth: 0,
            imageHeight: 0,
            rects: []
        }
    }

    generateRects() {
        const numRect = Math.floor(Math.random() * 5) + 8;
        const rects = new Array(numRect).fill(0).map(_ => {
            const x0 = Math.random() * 0.9;
            const y0 = Math.random() * 0.9;
            const x1 = Math.min(x0 + Math.random() * 0.3, 0.98);
            const y1 = Math.min(y0 + Math.random() * 0.3, 0.98);
            return [x0, y0, x1, y1];
        });
        this.setState({ rects });
    }

    onTakePicture(image) {
        this.setState({ image });
        this.generateRects.bind(this)();
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
        const { imageWidth, imageHeight, rects, image } = this.state;
        const cameraView = image ?
            <View style={styles.imageContainer}>
                <ImageBackground
                    style={styles.image}
                    source={{ uri: image.uri }}
                    onLayout={(event) => {
                        const { width, height } = event.nativeEvent.layout;
                        this.setState({ imageWidth: width, imageHeight: height });
                    }}
                >
                    <Svg
                        width={imageWidth}
                        height={imageHeight}
                    >
                        {rects.map((rect, i) => (
                            <Rect
                                key={i}
                                x={imageWidth * rect[0]}
                                y={imageHeight * rect[1]}
                                width={imageWidth * (rect[2] - rect[0])}
                                height={imageHeight * (rect[3] - rect[1])}
                                strokeWidth='1'
                                fillOpacity='0'
                                stroke='rgb(255, 0, 0)'
                                onPress={() => alert(`Press ${i}`)}
                            />
                        ))}
                    </Svg>
                </ImageBackground>
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
                    <FlatList
                        data={rects}
                        renderItem={({ item }) => (
                            <View
                                style={styles.listItem}
                            >
                                <Text>hi</Text>
                            </View>
                        )}
                        keyExtractor={(_, index) => `${index}`}
                    />
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
    },

    image: {
        flex: 1,
        width: '100%',
        height: '100%'
    },

    listContainer: {
        flex: 3
    },

    listItem: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#DF321C',
        borderBottomWidth: StyleSheet.hairlineWidth
    }
});
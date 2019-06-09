import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';

export default class AttendanceList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            attendanceList: [
                { title: '진료소 파트1', date: '6월 8일'},
                { title: '진료소 파트2', date: '6월 8일'},
                { title: '진료소 파트3', date: '6월 8일'},
                { title: '보건교육 성북지점', date: '6월 8일'}
            ]
        };
    }

    pressItem() {
        const { navigate } = this.props.navigation;
        navigate('management');
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.attendanceList}
                    renderItem={({item}) => (
                        <TouchableOpacity 
                            style={styles.itemContainer}
                            onPress={this.pressItem.bind(this)}
                        >
                            <Text>{item.title}</Text>
                            <Text>{item.date}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(_, index) => `${index}`}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEE'
    },

    itemContainer: {
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

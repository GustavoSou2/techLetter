import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function (props) {
    return (
            <View style={{ borderRadius: 12, borderWidth: 1, borderColor: '#39393930', marginBottom: 15, flex: .1 }}>
                <Image
                    style={{
                        width: '100%',
                        height: 210,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12
                    }}
                    source={{ uri: props.imageLink }}
                />
                <View style={{ padding: 15 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{ props.title }</Text>
                    <Text style={{ fontSize: 14, color: '#39393970' }}>{ props.category }</Text>
                    <Text style={{ fontSize: 14, color: '#39393970', textAlign: 'right' }}>{ props.timepost }</Text>
                </View>
            </View>
    );
}


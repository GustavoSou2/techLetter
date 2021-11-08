import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import CardPost from '../src/CardPost/CardPost';
import api from '../../service/PostsAPI';


export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            statusShowPosts: false
        }
    };


    async componentDidMount() {
        try {
            const res = await api.get('/posts');
            this.setState({
                posts: res.data
            });
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerTitle}>
                    <Text style={styles.titlePage}>TechLetter's</Text>
                </View>
                <View style={styles.containerCards}>
                    <ScrollView>
                        {
                            this.state.posts.map(post => <CardPost key={post.id}
                                                                   title={post.title}
                                                                   category={post.category}
                                                                   imageLink={post.imageLink}
                                                                   timepost={post.timepost}
                            />)
                        }
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titlePage: {
        color: '#FFFFFF',
        fontSize: 32,
        marginTop: 32,
        marginBottom: 0,
        fontWeight: 'bold'
    },
    containerTitle: {
        flex: .15,
        width: '100%',
        backgroundColor: '#3970ff',
        justifyContent: 'center',
        paddingHorizontal: 32,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24
    },
    containerCards: {
        flex: .9,
        padding: 15
    }
});

import React, {useEffect, useState} from 'react';
import {View, Text, Modal, StyleSheet, TextInput, TouchableOpacity, Button, Pressable, Alert} from "react-native";
import randomWords from 'random-words'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Scramble = () => {
    const [randomWord, setRandomWord] = useState(randomWords({exactly: 1, minLength: 4, maxLength: 6})[0])
    const [shuffleWord, setShuffleWord] = useState('')
    const [inputWord, setInputWord] = useState('')
    const [modal, setModal] = useState(false)
    const getRandomWord = () => {

        setRandomWord(randomWords({exactly: 1, minLength: 4, maxLength: 6})[0])

    }

    const getShuffleWord = (word) => {
        setShuffleWord(word.split('').sort(function () {
            return 0.5 - Math.random()
        }).join(''));

    }
    useEffect(() => {
        getShuffleWord(randomWord)
    }, [randomWord]);

    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}>Word Scramble</Text>
            <View style={{
                height: 400,
                width: "100%",
                alignItems: 'center',
                justifyContent: 'space-around'
            }}>
                <View>
                    <Text style={{textAlign: 'center', marginBottom: 10}}>Scrambled word</Text>
                    <View style={styles.box}>
                        <Text style={{textAlign: 'center'}}>{shuffleWord}</Text>

                    </View>
                </View>
                <TextInput placeholder="Enter word"
                           value={inputWord}
                           onChangeText={(word) => setInputWord(word)}
                           style={{
                               borderBottomWidth: 2,
                               width: 200,
                               height: 70,
                               fontSize: 30,
                               padding: 10,
                               borderColor: "#6495ED"
                           }}/>
                <Button style={{borderRadius: 10, backgroundColor: '#6495ED', padding: 15}} onPress={() => {

                    setModal(true)
                    setTimeout(() => {
                        setModal(false)
                        getRandomWord()
                        setInputWord('')
                    }, 500)


                }} title={"Unscramble Word!"} disabled={!inputWord}/>


            </View>
            <ModalResponse modal={modal} response={inputWord.toLowerCase() === randomWord}/>

        </View>

    );
};
const ModalResponse = ({modal, response}) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modal}
        >
            <View style={{
                marginTop: 'auto',
                height: 50,
                width: 150,
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: 'center',
                marginBottom: 100,
                backgroundColor: "#6495ED", borderRadius: 20
            }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {
                        response ? <><FontAwesome5 name="check"
                                                   style={{color: "green", fontSize: 20, marginRight: 10}}/>
                        <Text style={{
                            textAlign: "center", fontSize: 20, color: 'white'
                        }}>RIGHT!</Text></>
                        :
                        <>
                            <FontAwesome5 name="times" style={{color: "red", fontSize: 20, marginRight: 10}}/>
                            <Text style={{
                                textAlign: "center", fontSize: 20, color: 'white'
                            }}>WRONG!</Text>
                        </>}


                        </View>



                        </View>
                        </Modal>

                        )
                    }
                    const styles = StyleSheet.create({
                    container: {
                    flex: 1,
                    height: 100,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'space-around',

                },
                    box: {
                    width: 200, height: 100, borderRadius: 10, borderColor: 'grey', justifyContent: 'center',
                    backgroundColor: 'white',
                    elevation: 10,
                    shadowColor: 'grey',
                },
                });
                    export default Scramble;
